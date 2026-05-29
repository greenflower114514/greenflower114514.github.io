---
layout: home
title: 电子蜗居
permalink: /blog.html
---

<link rel="stylesheet" href="assets/nav-shell.css">
<link rel="stylesheet" href="assets/pet-cat.css">

<style>
.blog-main {
  width: min(1180px, calc(100% - 64px));
  margin: -56px auto 120px;
  position: relative;
  z-index: 3;
}

.profile-page .profile-hero {
  min-height: min(650px, 76vh);
}

.blog-shell {
  display: flex;
  gap: 22px;
  align-items: stretch;
  transition: gap 220ms ease;
}

.blog-sidebar {
  width: 300px;
  flex: 0 0 300px;
  min-height: 560px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025)),
    rgba(9, 10, 12, 0.62);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.30);
  backdrop-filter: blur(18px);
  transition: width 240ms ease, flex-basis 240ms ease;
}

.blog-sidebar.is-collapsed {
  width: 52px;
  flex-basis: 52px;
}

.blog-sidebar-head {
  display: flex;
  min-height: 64px;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 18px 18px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.11);
}

.blog-sidebar-title {
  min-width: 0;
}

.blog-sidebar-title strong {
  display: block;
  color: #fff;
  font-size: 0.98rem;
}

.blog-sidebar-title span {
  display: block;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.blog-toggle {
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  color: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: color 160ms ease, background 160ms ease;
}

.blog-toggle:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.12);
}

.blog-sidebar.is-collapsed .blog-sidebar-head {
  justify-content: center;
  padding-right: 9px;
  padding-left: 9px;
}

.blog-sidebar.is-collapsed .blog-sidebar-title,
.blog-sidebar.is-collapsed .blog-list,
.blog-sidebar.is-collapsed .blog-category-bar {
  display: none;
}

.blog-sidebar.is-collapsed .blog-toggle {
  transform: rotate(180deg);
}

.blog-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 16px;
  list-style: none;
}

.blog-category-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 16px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.blog-category-button {
  padding: 7px 10px;
  color: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 160ms ease, border-color 160ms ease, background 160ms ease;
}

.blog-category-button:hover,
.blog-category-button.is-active {
  color: #fff;
  border-color: rgba(255, 224, 163, 0.34);
  background: rgba(255, 224, 163, 0.10);
}

.blog-entry-button {
  width: 100%;
  padding: 14px;
  color: rgba(255, 255, 255, 0.72);
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.035);
  cursor: pointer;
  transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
}

.blog-entry-button:hover,
.blog-entry-button.is-active {
  border-color: rgba(255, 255, 255, 0.26);
  background: rgba(255, 255, 255, 0.09);
  transform: translateX(3px);
}

.blog-entry-meta {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: rgba(255, 255, 255, 0.52);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

.blog-entry-type {
  color: #fff;
  font-weight: 700;
}

.blog-entry-title {
  display: block;
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.98rem;
  line-height: 1.45;
}

.blog-entry-status {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.blog-entry-lock {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 9px;
  color: rgba(255, 244, 208, 0.92);
  border: 1px solid rgba(255, 224, 163, 0.24);
  background: rgba(255, 224, 163, 0.08);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.blog-entry-lock.is-open {
  color: rgba(204, 255, 232, 0.92);
  border-color: rgba(122, 241, 192, 0.24);
  background: rgba(122, 241, 192, 0.08);
}

.blog-reader {
  flex: 1;
  min-width: 0;
  min-height: 560px;
  padding: 42px 48px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    radial-gradient(circle at 75% 0%, rgba(255, 255, 255, 0.08), transparent 30%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.026)),
    rgba(9, 10, 12, 0.48);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(18px);
  transition: padding 220ms ease;
}

.blog-reader-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 18px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.blog-reader-type {
  padding: 4px 10px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.07);
}

.blog-reader h2 {
  margin: 0 0 18px;
  color: #fff;
  font-size: clamp(2rem, 4vw, 3.6rem);
  line-height: 1.08;
}

.blog-reader-excerpt {
  margin: 0 0 34px;
  color: rgba(255, 255, 255, 0.66);
  font-size: 1.05rem;
  line-height: 1.9;
}

.blog-reader-body {
  display: grid;
  gap: 18px;
  max-width: 760px;
}

.blog-reader-body > :first-child {
  margin-top: 0;
}

.blog-reader-body p {
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 1rem;
  line-height: 2;
}

.blog-reader-body h3,
.blog-reader-body h4 {
  margin: 18px 0 0;
  color: #fff;
  line-height: 1.35;
}

.blog-reader-body ul,
.blog-reader-body ol {
  margin: 0;
  padding-left: 1.4rem;
  color: rgba(255, 255, 255, 0.76);
  line-height: 1.9;
}

.blog-reader-body li + li {
  margin-top: 8px;
}

.blog-reader-body a {
  color: #ffe0a3;
}

.blog-reader-body strong {
  color: #fff;
}

.blog-reader-body blockquote {
  margin: 0;
  padding: 16px 18px;
  color: rgba(255, 255, 255, 0.68);
  border-left: 3px solid rgba(255, 224, 163, 0.58);
  background: rgba(255, 255, 255, 0.04);
}

.blog-reader-body img {
  display: block;
  width: min(100%, 720px);
  height: auto;
  margin: 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
}

.blog-reader-body code {
  padding: 0.15em 0.4em;
  color: #fff3d0;
  background: rgba(255, 255, 255, 0.08);
  font-size: 0.94em;
}

.blog-reader-body pre {
  overflow: auto;
  margin: 0;
  padding: 18px;
  color: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.22);
}

.blog-reader-body pre code {
  padding: 0;
  background: transparent;
}

.blog-gate {
  max-width: 560px;
}

.blog-gate-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  color: rgba(255, 244, 208, 0.94);
  border: 1px solid rgba(255, 224, 163, 0.18);
  background: rgba(255, 224, 163, 0.08);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.blog-gate-question {
  margin: 22px 0 12px;
  color: #fff;
  font-size: clamp(1.7rem, 3.2vw, 2.4rem);
  line-height: 1.22;
}

.blog-gate-copy,
.blog-gate-hint,
.blog-gate-feedback {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.9;
}

.blog-gate-hint {
  margin-top: 14px;
  color: rgba(255, 236, 198, 0.82);
}

.blog-gate-form {
  display: grid;
  gap: 14px;
  margin-top: 28px;
}

.blog-gate-label {
  display: block;
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.blog-gate-input {
  width: 100%;
  margin-top: 10px;
  padding: 15px 16px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  font-size: 1rem;
  line-height: 1.5;
}

.blog-gate-input:focus {
  outline: none;
  border-color: rgba(255, 224, 163, 0.68);
  box-shadow: 0 0 0 3px rgba(255, 224, 163, 0.12);
}

.blog-gate-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.blog-gate-submit {
  padding: 12px 18px;
  color: #151515;
  border: 0;
  background: linear-gradient(135deg, #ffe0a3, #ffd27b);
  font-size: 0.94rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.blog-gate-submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(255, 210, 123, 0.24);
}

.blog-gate-feedback {
  min-height: 1.9em;
}

.blog-gate-feedback.is-error {
  color: #ffb4b4;
}

.blog-gate-feedback.is-success {
  color: #bbffdd;
}

.blog-empty {
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.8;
}

@media (max-width: 900px) {
  .blog-main {
    width: min(100% - 28px, 760px);
    margin-top: -34px;
  }

  .blog-shell {
    display: grid;
  }

  .blog-sidebar,
  .blog-sidebar.is-collapsed {
    width: 100%;
    flex-basis: auto;
    min-height: auto;
  }

  .blog-sidebar.is-collapsed .blog-list {
    display: none;
  }

  .blog-sidebar.is-collapsed .blog-sidebar-title {
    display: block;
  }

  .blog-sidebar.is-collapsed .blog-sidebar-head {
    justify-content: space-between;
    padding: 18px;
  }

  .blog-reader {
    min-height: auto;
    padding: 28px 22px;
  }
}

@media (min-width: 901px) and (max-width: 1450px) {
  .blog-main {
    width: min(820px, calc(100% - 620px));
  }

  .blog-reader {
    padding: 36px 34px;
  }
}

@media (max-width: 1100px) {
  .blog-main {
    width: min(100% - 28px, 760px);
  }
}
</style>

<div class="profile-page">
  <section class="profile-hero">
    <time class="profile-time" id="profile-time">Loading time...</time>

    <aside class="hero-panel hero-panel--left">
      <div class="visit-calendar panel-shell" aria-label="主页访问日历">
        <div class="panel-head">
          <div class="panel-title">
            <strong>访问日历</strong>
            <span>Calendar / Visits</span>
          </div>
          <button class="panel-toggle" type="button" aria-label="收起访问日历" aria-expanded="true" data-collapsed-label="日历" data-expanded-label="收起访问日历" data-hidden-label="展开访问日历"></button>
        </div>
        <div class="panel-body">
          <div class="calendar-head">
            <button class="calendar-prev" type="button" aria-label="上个月">&lt;</button>
            <div class="calendar-title" id="calendar-title">Month 0000</div>
            <button class="calendar-next" type="button" aria-label="下个月">&gt;</button>
          </div>
          <div class="calendar-weekdays" aria-hidden="true">
            <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </div>
          <div class="calendar-days" id="calendar-days"></div>
          <p class="calendar-note">访问过主页的日期会被点亮，记录保存在当前浏览器中。</p>
        </div>
      </div>
    </aside>

    <div class="profile-hero-inner">
      <img class="profile-avatar" src="https://avatars.githubusercontent.com/u/93895894?v=4" alt="干煸双鲜的头像">
      <h1 class="profile-title">干煸双鲜</h1>
      <p class="profile-subtitle">·谁能送我只猫啊·</p>
      <div class="profile-divider"></div>
      <nav class="profile-nav" aria-label="个人主页导航">
        <a class="is-active" href="blog.html"><span class="profile-nav-icon">✎</span><span class="profile-nav-en">Blog</span><span class="profile-nav-cn">博客</span></a>
        <a href="./#about"><span class="profile-nav-icon">⌁</span><span class="profile-nav-en">About</span><span class="profile-nav-cn">关于</span></a>
        <a href="redbook.html"><span class="profile-nav-icon">◎</span><span class="profile-nav-en">RedBook</span><span class="profile-nav-cn">小红书</span></a>
        <a href="gallery.html"><span class="profile-nav-icon">▣</span><span class="profile-nav-en">Gallery</span><span class="profile-nav-cn">相册</span></a>
        <a href="thinking.html"><span class="profile-nav-icon">☼</span><span class="profile-nav-en">Thinking</span><span class="profile-nav-cn">思考</span></a>
      </nav>
    </div>

    <aside class="hero-panel hero-panel--right">
      <div class="daily-board panel-shell" aria-label="今日正在做的事">
        <div class="panel-head">
          <div class="panel-title">
            <h2>今日黑板</h2>
            <span>Today / 正在做</span>
          </div>
          <button class="panel-toggle" type="button" aria-label="收起今日黑板" aria-expanded="true" data-collapsed-label="黑板" data-expanded-label="收起今日黑板" data-hidden-label="展开今日黑板"></button>
        </div>
        <div class="panel-body">
          <time>Today / 正在做</time>
          <ul>
            <li>继续装修 GitHub 个人主页。</li>
            <li>整理 Blog 日记页和可收起边栏。</li>
            <li>给导航页面慢慢补内容。</li>
          </ul>
        </div>
      </div>
    </aside>
  </section>

  <main class="blog-main" aria-label="博客日记">
    <div class="blog-shell">
      <aside class="blog-sidebar" id="blog-sidebar">
        <div class="blog-sidebar-head">
          <div class="blog-sidebar-title">
            <strong>日记索引</strong>
            <span>Diary Index</span>
          </div>
          <button class="blog-toggle" id="blog-toggle" type="button" aria-label="收起日记边栏" aria-expanded="true">‹</button>
        </div>
        <div class="blog-category-bar" id="blog-category-bar"></div>
        <ol class="blog-list" id="blog-list"></ol>
      </aside>

      <article class="blog-reader" id="blog-reader">
        <p class="blog-empty">正在加载日记...</p>
      </article>
    </div>
  </main>

</div>

<script src="assets/nav-shell.js"></script>
<script>
const blogGateStoragePrefix = "blog-gate:";
const blogEntries = [
{% assign blog_documents = site.blog | sort: "date" | reverse %}
{% for post in blog_documents %}
  {
    id: {{ post.path | split: "/" | last | replace: ".md", "" | replace: ".markdown", "" | jsonify }},
    title: {{ post.title | jsonify }},
    date: {{ post.date | date: "%Y-%m-%d" | jsonify }},
    type: {{ post.type | default: "Note" | jsonify }},
    excerpt: {{ post.excerpt | default: post.content | strip_html | strip_newlines | truncate: 140 | jsonify }},
    cover: {{ post.cover | default: "" | jsonify }},
    gateEnabled: {{ post.gateEnabled | default: false | jsonify }},
    gateQuestion: {{ post.gateQuestion | default: "" | jsonify }},
    gateAnswer: {{ post.gateAnswer | default: "" | jsonify }},
    gateHint: {{ post.gateHint | default: "" | jsonify }},
    gateVersion: {{ post.gateVersion | default: 1 | jsonify }},
    contentHtml: {{ post.content | markdownify | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
];
const blogSidebar = document.getElementById("blog-sidebar");
const blogToggle = document.getElementById("blog-toggle");
const blogCategoryBar = document.getElementById("blog-category-bar");
const blogList = document.getElementById("blog-list");
const blogReader = document.getElementById("blog-reader");
const allCategoryName = "全部";
let activeEntryId = null;
let activeCategory = allCategoryName;

function escapeBlogHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatBlogDate(value) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function normalizeGateText(value) {
  return String(value ?? "").trim();
}

function normalizeGateAnswer(value) {
  return normalizeGateText(value).toLocaleLowerCase("zh-CN");
}

function normalizeBlogEntry(entry) {
  const gateQuestion = normalizeGateText(entry.gateQuestion);
  const gateAnswer = normalizeGateAnswer(entry.gateAnswer);
  const gateVersion = normalizeGateText(entry.gateVersion) || "1";

  return {
    ...entry,
    contentHtml: String(entry.contentHtml ?? ""),
    gateEnabled: Boolean(entry.gateEnabled && gateQuestion && gateAnswer),
    gateQuestion,
    gateAnswer,
    gateHint: normalizeGateText(entry.gateHint),
    gateVersion
  };
}

function getGateStorageKey(entry) {
  return `${blogGateStoragePrefix}${entry.id}:${entry.gateVersion}`;
}

function hasGateAccess(entry) {
  if (!entry.gateEnabled) return true;

  try {
    return window.sessionStorage.getItem(getGateStorageKey(entry)) === "passed";
  } catch (error) {
    return false;
  }
}

function grantGateAccess(entry) {
  try {
    window.sessionStorage.setItem(getGateStorageKey(entry), "passed");
  } catch (error) {
    // Ignore storage failures so the gate can still work in-session.
  }
}

function updateBlogHash(entryId) {
  if (!entryId) return;
  const nextUrl = `${window.location.pathname}${window.location.search}#${encodeURIComponent(entryId)}`;
  window.history.replaceState(null, "", nextUrl);
}

function getEntryIdFromHash() {
  return decodeURIComponent(window.location.hash.replace(/^#/, ""));
}

function getCategories() {
  const types = [...new Set(blogEntries.map((entry) => normalizeGateText(entry.type)).filter(Boolean))];
  return [allCategoryName, ...types];
}

function getFilteredEntries() {
  if (activeCategory === allCategoryName) return blogEntries;
  return blogEntries.filter((entry) => normalizeGateText(entry.type) === activeCategory);
}

function renderCategoryBar() {
  if (!blogCategoryBar) return;

  blogCategoryBar.innerHTML = getCategories().map((category) => `
    <button class="blog-category-button${category === activeCategory ? " is-active" : ""}" type="button" data-category-name="${escapeBlogHtml(category)}">
      ${escapeBlogHtml(category)}
    </button>
  `).join("");

  blogCategoryBar.querySelectorAll(".blog-category-button").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveCategory(button.dataset.categoryName || allCategoryName);
    });
  });
}

function renderBlogList() {
  if (!blogList) return;

  const visibleEntries = getFilteredEntries();

  blogList.innerHTML = visibleEntries.map((entry) => `
    <li>
      <button class="blog-entry-button${entry.id === activeEntryId ? " is-active" : ""}" type="button" data-entry-id="${escapeBlogHtml(entry.id)}">
        <span class="blog-entry-meta">
          <span class="blog-entry-type">${escapeBlogHtml(entry.type)}</span>
          <time>${escapeBlogHtml(formatBlogDate(entry.date))}</time>
        </span>
        <span class="blog-entry-title">${escapeBlogHtml(entry.title)}</span>
        ${entry.gateEnabled ? `
          <span class="blog-entry-status">
            <span class="blog-entry-lock${hasGateAccess(entry) ? " is-open" : ""}">${hasGateAccess(entry) ? "Unlocked" : "Question Gate"}</span>
          </span>
        ` : ""}
      </button>
    </li>
  `).join("");

  blogList.querySelectorAll(".blog-entry-button").forEach((button) => {
    button.addEventListener("click", () => {
      renderBlogEntry(button.dataset.entryId);
    });
  });
}

function setActiveCategory(categoryName) {
  activeCategory = categoryName || allCategoryName;
  const filteredEntries = getFilteredEntries();
  const activeEntryInCategory = filteredEntries.find((entry) => entry.id === activeEntryId);

  renderCategoryBar();

  if (!filteredEntries.length) {
    if (blogReader) {
      blogReader.innerHTML = '<p class="blog-empty">这个分类下还没有日记。</p>';
    }
    renderBlogList();
    return;
  }

  if (activeEntryInCategory) {
    renderBlogEntry(activeEntryInCategory.id, { updateHash: false });
    return;
  }

  renderBlogEntry(filteredEntries[0].id);
}

function renderBlogContent(entry) {
  const coverMarkup = entry.cover
    ? `<img class="blog-reader-cover" src="${escapeBlogHtml(entry.cover)}" alt="${escapeBlogHtml(entry.title)}">`
    : "";

  blogReader.innerHTML = `
    <div class="blog-reader-meta">
      <span class="blog-reader-type">${escapeBlogHtml(entry.type)}</span>
      <time>${escapeBlogHtml(formatBlogDate(entry.date))}</time>
    </div>
    <h2>${escapeBlogHtml(entry.title)}</h2>
    <p class="blog-reader-excerpt">${escapeBlogHtml(entry.excerpt)}</p>
    <div class="blog-reader-body">
      ${coverMarkup}
      ${entry.contentHtml}
    </div>
  `;
}

function renderBlogGate(entry, feedback = {}) {
  const hintMarkup = entry.gateHint
    ? `<p class="blog-gate-hint">Hint: ${escapeBlogHtml(entry.gateHint)}</p>`
    : "";
  const feedbackClass = feedback.type ? ` is-${escapeBlogHtml(feedback.type)}` : "";

  blogReader.innerHTML = `
    <div class="blog-reader-meta">
      <span class="blog-reader-type">${escapeBlogHtml(entry.type)}</span>
      <time>${escapeBlogHtml(formatBlogDate(entry.date))}</time>
    </div>
    <section class="blog-gate" aria-labelledby="blog-gate-title">
      <span class="blog-gate-kicker">Question Gate</span>
      <h2 class="blog-gate-question" id="blog-gate-title">${escapeBlogHtml(entry.gateQuestion)}</h2>
      <p class="blog-gate-copy">Answer the question below to read this entry.</p>
      ${hintMarkup}
      <form class="blog-gate-form" id="blog-gate-form">
        <label class="blog-gate-label" for="blog-gate-answer">
          Your answer
          <input class="blog-gate-input" id="blog-gate-answer" name="answer" type="text" autocomplete="off" spellcheck="false" required>
        </label>
        <div class="blog-gate-actions">
          <button class="blog-gate-submit" type="submit">Open Entry</button>
          <p class="blog-gate-feedback${feedbackClass}" id="blog-gate-feedback">${escapeBlogHtml(feedback.message ?? "")}</p>
        </div>
      </form>
    </section>
  `;

  const gateForm = document.getElementById("blog-gate-form");
  const gateInput = document.getElementById("blog-gate-answer");
  const gateFeedback = document.getElementById("blog-gate-feedback");

  if (!gateForm || !gateInput || !gateFeedback) return;

  gateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submittedAnswer = normalizeGateAnswer(gateInput.value);
    if (!submittedAnswer) {
      gateFeedback.textContent = "Write an answer first.";
      gateFeedback.className = "blog-gate-feedback is-error";
      gateInput.focus();
      return;
    }

    if (submittedAnswer !== entry.gateAnswer) {
      gateFeedback.textContent = "That answer does not open this entry yet.";
      gateFeedback.className = "blog-gate-feedback is-error";
      gateInput.select();
      return;
    }

    grantGateAccess(entry);
    renderBlogEntry(entry.id, { updateHash: false });
  });

  gateInput.addEventListener("input", () => {
    gateFeedback.textContent = "";
    gateFeedback.className = "blog-gate-feedback";
  });
}

function renderBlogEntry(entryId, options = {}) {
  const entry = blogEntries.find((item) => item.id === entryId) || blogEntries[0];
  if (!entry || !blogReader) return;

  activeEntryId = entry.id;
  if (options.updateHash !== false) updateBlogHash(entry.id);

  if (entry.gateEnabled && !hasGateAccess(entry)) {
    renderBlogGate(entry, options.feedback);
    renderCategoryBar();
    renderBlogList();
    return;
  }

  renderBlogContent(entry);
  renderCategoryBar();
  renderBlogList();
}

function showBlogError() {
  if (!blogReader) return;
  blogReader.innerHTML = '<p class="blog-empty">日记加载失败，稍后再来看看。</p>';
}

if (blogToggle && blogSidebar) {
  if (window.matchMedia("(max-width: 900px)").matches) {
    blogSidebar.classList.add("is-collapsed");
    blogToggle.setAttribute("aria-expanded", "false");
    blogToggle.setAttribute("aria-label", "展开日记边栏");
  }

  blogToggle.addEventListener("click", () => {
    const collapsed = blogSidebar.classList.toggle("is-collapsed");
    blogToggle.setAttribute("aria-expanded", String(!collapsed));
    blogToggle.setAttribute("aria-label", collapsed ? "展开日记边栏" : "收起日记边栏");
  });
}

try {
  const normalizedEntries = Array.isArray(blogEntries)
    ? blogEntries.map(normalizeBlogEntry).sort((a, b) => String(b.date).localeCompare(String(a.date)))
    : [];

  blogEntries.length = 0;
  blogEntries.push(...normalizedEntries);

  if (!blogEntries.length) {
    throw new Error("No blog entries found");
  }

  const initialEntryId = getEntryIdFromHash();
  const initialEntry = blogEntries.find((entry) => entry.id === initialEntryId);
  if (initialEntry) {
    activeCategory = normalizeGateText(initialEntry.type) || allCategoryName;
    renderBlogEntry(initialEntry.id);
  } else {
    renderBlogEntry(blogEntries[0]?.id);
  }
} catch (error) {
  showBlogError();
}

window.addEventListener("hashchange", () => {
  const entryId = getEntryIdFromHash();
  if (!entryId || entryId === activeEntryId) return;
  const entry = blogEntries.find((item) => item.id === entryId);
  if (entry) {
    activeCategory = normalizeGateText(entry.type) || allCategoryName;
  }
  renderBlogEntry(entryId, { updateHash: false });
});
</script>
<script src="assets/pet-cat.js"></script>
