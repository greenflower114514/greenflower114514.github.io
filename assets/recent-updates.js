(function (root) {
  "use strict";
  const timeZone = "Asia/Hong_Kong";
  function dateKey(timestamp) {
    const date = new Date(timestamp);
    if (!Number.isFinite(date.getTime())) return "";
    return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
  }

  function mergeFeeds(...feeds) {
    const entries = new Map();
    feeds.forEach(feed => {
      if (feed?.version !== 1 || !Array.isArray(feed.uploads)) return;
      feed.uploads.forEach(entry => {
        const date = dateKey(entry.uploadedAt);
        if (!entry.id || !date || !/^[a-f0-9]{40}$/.test(entry.sha || "")) return;
        entries.set(entry.id, {
          ...entry, date,
          items: Array.isArray(entry.items) ? entry.items.filter(item => typeof item === "string" && item.trim()) : [],
          url: `https://github.com/greenflower114514/greenflower114514.github.io/commit/${entry.sha}`
        });
      });
    });
    return [...entries.values()].sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt) || a.id.localeCompare(b.id));
  }

  function groupUploads(uploads) {
    const days = new Map();
    uploads.forEach(upload => {
      if (!days.has(upload.date)) days.set(upload.date, { date: upload.date, uploads: [], items: [] });
      const day = days.get(upload.date);
      day.uploads.push(upload);
      for (const item of upload.items) if (!day.items.includes(item)) day.items.push(item);
    });
    return [...days.values()].sort((a, b) => b.date.localeCompare(a.date));
  }

  async function load({ snapshotUrl, historyUrl, onUpdate, fetcher = fetch }) {
    const feeds = [];
    const read = async url => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      try {
        const response = await fetcher(url, { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error(`Upload history HTTP ${response.status}`);
        const feed = await response.json();
        if (feed?.version !== 1 || !Array.isArray(feed.uploads)) throw new Error("Invalid upload history");
        feeds.push(feed);
        onUpdate(mergeFeeds(...feeds));
      } finally { clearTimeout(timeout); }
    };
    const results = await Promise.allSettled([read(snapshotUrl), read(historyUrl)]);
    if (results.every(result => result.status === "rejected")) onUpdate([]);
  }

  const api = { dateKey, mergeFeeds, groupUploads, load };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.HomepageUpdates = api;
})(globalThis);
