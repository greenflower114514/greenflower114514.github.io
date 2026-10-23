import { execFileSync } from "node:child_process";
import fs from "node:fs";

export const repository = "greenflower114514/greenflower114514.github.io";
export const historyBranch = "update-history";
export const historyPath = "recent-updates.json";
export const timeZone = "Asia/Hong_Kong";

function git(...args) {
  return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], maxBuffer: 20 * 1024 * 1024 });
}

export function uploadDate(timestamp) {
  const date = new Date(timestamp);
  if (!Number.isFinite(date.getTime())) throw new Error("Invalid upload timestamp");
  return new Intl.DateTimeFormat("en-CA", {
    timeZone, year: "numeric", month: "2-digit", day: "2-digit"
  }).format(date);
}

function readAt(ref, file) {
  if (!ref) return "";
  try { return git("show", `${ref}:${file}`); } catch { return ""; }
}

function jsonAt(ref, file) {
  try { return JSON.parse(readAt(ref, file)); } catch { return null; }
}

function documentTitle(ref, file) {
  const text = readAt(ref, file);
  const match = text.match(/^title:\s*(.+)$/m);
  return match ? match[1].trim().replace(/^(["'])(.*)\1$/, "$2") : file.split("/").at(-1).replace(/\.md$/, "");
}

export function describeChanges(before, after, files) {
  const items = [];
  const add = label => { if (!items.includes(label)) items.push(label); };
  for (const file of files) {
    if (/^_(thoughts|blog)\/.*\.md$/.test(file)) {
      const kind = file.startsWith("_thoughts/") ? "Thinking" : "Blog";
      const exists = Boolean(readAt(after, file));
      const previous = before && readAt(before, file);
      const verb = !exists ? "移除" : previous ? "更新" : "发布";
      add(`${verb} ${kind}《${documentTitle(exists ? after : before, file)}》`);
    }
  }
  if (files.includes("assets/gallery-list.json")) {
    const oldAlbums = jsonAt(before, "assets/gallery-list.json") || [];
    const albums = jsonAt(after, "assets/gallery-list.json") || [];
    for (const album of albums) {
      const old = oldAlbums.find(item => item.id === album.id);
      for (const photo of album.photos || []) {
        const previous = old?.photos?.find(item => item.id === photo.id);
        if (JSON.stringify(previous) !== JSON.stringify(photo)) {
          add(`${album.title || "相册"}${previous ? "更新" : "新增"}《${photo.title || photo.id}》`);
        }
      }
    }
    if (!items.some(item => /相册|今日最佳/.test(item))) add("更新相册内容与照片信息");
  }
  const rules = [
    [/^assets\/gallery\//, "上传或调整相册图片"],
    [/^assets\/thinking\//, "上传或调整 Thinking 配图"],
    [/^assets\/blog\//, "上传或调整 Blog 配图"],
    [/^(index\.md|assets\/about-sections\.json)$/, "更新主页布局或 About 内容"],
    [/^(thinking\.md|assets\/thought-lock\.js)$/, "调整 Thinking 阅读页面"],
    [/^(gallery\.md|assets\/gallery\.(js|css))$/, "调整相册展示与交互"],
    [/^(blog\.md|assets\/blog\.(js|css))$/, "调整 Blog 阅读页面"],
    [/^assets\/listen-list\.json$/, "更新歌单与歌曲信息"],
    [/^assets\/read-list\.json$/, "更新阅读书单"],
    [/^assets\/study-list\.json$/, "更新学习记录"],
    [/^assets\/watch-list\.json$/, "更新观影记录"],
    [/^assets\/daily-board\.json$/, "更新今日黑板"],
    [/^(money-plan\.html|assets\/money-plan)/, "更新小狗钱钱计划页面"],
    [/^assets\/music-player/, "调整音乐播放器"],
    [/^assets\/pet-/, "调整主页宠物与互动效果"],
    [/^assets\/nav-shell/, "调整主页导航"],
    [/^(\.github\/workflows\/recent-updates\.yml|scripts\/recent-updates|assets\/recent-updates)/, "更新上传记录与自动统计"],
    [/^_updates\//, "补充主页更新说明"],
    [/^(_config\.yml|Gemfile)/, "调整网站配置"],
    [/^(README\.md|Agents\.md|AGENTS\.md)$/, "更新项目维护说明"]
  ];
  for (const [pattern, label] of rules) {
    if (files.some(file => pattern.test(file))) add(label);
  }
  return items;
}

export function buildUpload({ before, after, uploadedAt, id }) {
  if (!/^[a-f0-9]{40}$/.test(after)) throw new Error("Invalid commit SHA");
  if (before && !/^[a-f0-9]{40}$/.test(before)) throw new Error("Invalid base SHA");
  const date = uploadDate(uploadedAt);
  const files = (before
    ? git("diff", "--name-only", "-z", before, after)
    : git("ls-tree", "-r", "--name-only", "-z", after)).split("\0").filter(Boolean);
  const message = git("show", "-s", "--format=%s", after).trim();
  const items = describeChanges(before, after, files);
  return {
    id: id || `${after}:${uploadedAt}`, sha: after, uploadedAt, date,
    message, items: items.length ? items : [message || "更新网站内容"],
    url: `https://github.com/${repository}/commit/${after}`
  };
}

export function mergeUploads(...feeds) {
  const uploads = new Map();
  for (const feed of feeds) {
    for (const entry of feed?.uploads || []) {
      if (!entry.id || !/^[a-f0-9]{40}$/.test(entry.sha)) continue;
      uploads.set(entry.id, { ...entry, date: uploadDate(entry.uploadedAt) });
    }
  }
  return { version: 1, timeZone, uploads: [...uploads.values()].sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt) || a.id.localeCompare(b.id)) };
}

// A separate data branch keeps uploads automatic without rebuilding Pages or
// generating bot commits on main. SHA leases prevent overlapping pushes losing entries.
export async function publishUpload({ github, context }) {
  const { owner, repo } = context.repo;
  const run = await github.rest.actions.getWorkflowRun({ owner, repo, run_id: context.runId });
  const pushedAt = context.payload.repository?.pushed_at;
  const uploadedAt = typeof pushedAt === "number"
    ? new Date(pushedAt * 1000).toISOString()
    : (pushedAt && !Number.isNaN(Date.parse(pushedAt)) ? new Date(pushedAt).toISOString() : run.data.created_at);
  const before = /^0+$/.test(context.payload.before || "") ? null : context.payload.before;
  const entry = buildUpload({ before, after: context.sha, uploadedAt, id: `push-${context.runId}` });
  const seed = JSON.parse(fs.readFileSync("assets/recent-updates.json", "utf8"));
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      let existing;
      try {
        existing = (await github.rest.repos.getContent({ owner, repo, path: historyPath, ref: historyBranch })).data;
      } catch (error) { if (error.status !== 404) throw error; }
      const old = existing ? JSON.parse(Buffer.from(existing.content, "base64").toString("utf8")) : null;
      const merged = mergeUploads(seed, old, { uploads: [entry] });
      const content = JSON.stringify(merged, null, 2) + "\n";
      if (existing && Buffer.from(existing.content, "base64").toString("utf8") === content) return;
      if (existing) {
        await github.rest.repos.createOrUpdateFileContents({ owner, repo, branch: historyBranch, path: historyPath,
          sha: existing.sha, message: `Record upload ${context.sha.slice(0, 7)}`, content: Buffer.from(content).toString("base64") });
      } else {
        const blob = await github.rest.git.createBlob({ owner, repo, content, encoding: "utf-8" });
        const tree = await github.rest.git.createTree({ owner, repo, tree: [{ path: historyPath, mode: "100644", type: "blob", sha: blob.data.sha }] });
        const commit = await github.rest.git.createCommit({ owner, repo, message: "Initialize homepage upload history", tree: tree.data.sha, parents: [] });
        await github.rest.git.createRef({ owner, repo, ref: `refs/heads/${historyBranch}`, sha: commit.data.sha });
      }
      return;
    } catch (error) {
      if (![409, 422].includes(error.status) || attempt === 5) throw error;
      await new Promise(resolve => setTimeout(resolve, 400 * (attempt + 1)));
    }
  }
}
