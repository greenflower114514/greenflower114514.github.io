import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import { buildUpload, mergeUploads, publishUpload, uploadDate } from "./recent-updates.mjs";

const require = createRequire(import.meta.url);
const client = require("../assets/recent-updates.js");
const seed = JSON.parse(fs.readFileSync("assets/recent-updates.json", "utf8"));
const latest = seed.uploads.find(entry => entry.sha.startsWith("69d2ce6"));
const previous = "10a84574d3b6d53f69249d0732db2f08022dc6b5";

test("Hong Kong midnight decides the upload date, independently of the reader timezone", () => {
  for (const date of [uploadDate, client.dateKey]) {
    assert.equal(date("2026-10-23T15:59:59Z"), "2026-10-23");
    assert.equal(date("2026-10-23T16:00:00Z"), "2026-10-24");
  }
});

test("a delayed upload uses its upload date and describes both the thought and the photo", () => {
  const entry = buildUpload({ before: previous, after: latest.sha, uploadedAt: "2026-10-25T01:00:00Z" });
  assert.equal(entry.date, "2026-10-25");
  assert(entry.items.includes("发布 Thinking《照片和文字》"));
  assert(entry.items.includes("今日最佳新增《霉豆腐和鸡煲》"));
});

test("history merges without duplicate entries or losing older uploads", () => {
  const next = { ...latest, id: "push-1000", uploadedAt: "2026-10-23T16:00:00Z", date: "1999-01-01" };
  const feed = mergeUploads(seed, { uploads: [next] }, seed);
  assert.equal(feed.uploads.length, seed.uploads.length + 1);
  const uploads = client.mergeFeeds(seed, feed, seed);
  assert.equal(uploads.length, seed.uploads.length + 1);
  assert.equal(uploads[0].date, "2026-10-24");
  assert.equal(client.groupUploads(uploads)[0].uploads.length, 1);
  assert(client.groupUploads(uploads).find(day => day.date === "2026-10-23").items.includes("发布 Thinking《照片和文字》"));
});

test("the page retains a snapshot when the live history is unavailable", async () => {
  const updates = [];
  await client.load({ snapshotUrl: "snapshot", historyUrl: "live", onUpdate: entries => updates.push(entries),
    fetcher: async url => {
      if (url === "live") throw new Error("network unavailable");
      return { ok: true, json: async () => seed };
    }
  });
  assert.equal(updates.at(-1).length, seed.uploads.length);
});

test("the live history works independently of the snapshot", async () => {
  const updates = [];
  await client.load({ snapshotUrl: "snapshot", historyUrl: "live", onUpdate: entries => updates.push(entries),
    fetcher: async url => url === "snapshot" ? { ok: false, status: 404 } : { ok: true, json: async () => seed }
  });
  assert.equal(updates.at(-1).length, seed.uploads.length);
});

test("workflow retries preserve a concurrent upload, and reruns do not create another entry", async () => {
  let data = seed;
  let revision = 1;
  let writes = 0;
  let conflict = true;
  const other = { ...latest, id: "push-another", uploadedAt: "2026-10-23T16:01:00.000Z" };
  const github = { rest: {
    actions: { getWorkflowRun: async () => ({ data: { created_at: "2026-10-23T16:05:00Z" } }) },
    repos: {
      getContent: async () => ({ data: { sha: String(revision), content: Buffer.from(JSON.stringify(data, null, 2) + "\n").toString("base64") } }),
      createOrUpdateFileContents: async payload => {
        writes++;
        if (conflict) {
          conflict = false;
          data = mergeUploads(data, { uploads: [other] });
          revision++;
          throw Object.assign(new Error("concurrent update"), { status: 409 });
        }
        assert.equal(payload.sha, String(revision));
        data = JSON.parse(Buffer.from(payload.content, "base64").toString("utf8"));
        revision++;
      }
    }
  } };
  const context = { repo: { owner: "greenflower114514", repo: "greenflower114514.github.io" }, runId: 1000,
    sha: latest.sha, payload: { before: previous, repository: { pushed_at: 1792771200 } } };
  await publishUpload({ github, context });
  assert.equal(data.uploads.length, seed.uploads.length + 2);
  assert(data.uploads.some(upload => upload.id === other.id));
  const entry = data.uploads.find(upload => upload.id === "push-1000");
  assert.equal(entry.uploadedAt, new Date(1792771200 * 1000).toISOString());
  const beforeWrites = writes;
  await publishUpload({ github, context });
  assert.equal(writes, beforeWrites);
});

test("workflow can initialize an isolated data branch without a parent commit", async () => {
  let tree;
  let commit;
  let ref;
  const github = { rest: {
    actions: { getWorkflowRun: async () => ({ data: { created_at: "2026-10-24T01:00:00Z" } }) },
    repos: { getContent: async () => { throw Object.assign(new Error("missing branch"), { status: 404 }); } },
    git: {
      createBlob: async payload => { assert.equal(JSON.parse(payload.content).uploads.length, seed.uploads.length + 1); return { data: { sha: "blob" } }; },
      createTree: async payload => { tree = payload; return { data: { sha: "tree" } }; },
      createCommit: async payload => { commit = payload; return { data: { sha: "commit" } }; },
      createRef: async payload => { ref = payload; }
    }
  } };
  await publishUpload({ github, context: { repo: { owner: "greenflower114514", repo: "greenflower114514.github.io" }, runId: 2000,
    sha: latest.sha, payload: { before: previous, repository: {} } } });
  assert.deepEqual(commit.parents, []);
  assert.equal(tree.tree.length, 1);
  assert.equal(ref.ref, "refs/heads/update-history");
});
