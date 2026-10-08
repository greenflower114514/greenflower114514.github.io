---
layout: home
title: 个人主页
permalink: /thinking.html
---

<link rel="stylesheet" href="assets/nav-shell.css">
<link rel="stylesheet" href="assets/pet-cat.css">
<link rel="stylesheet" href="assets/music-player.css">

<style>
.thinking-main {
  width: min(1180px, calc(100% - 64px));
  margin: -56px auto 120px;
  position: relative;
  z-index: 3;
}

.thinking-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin: 0 0 24px;
  color: rgba(255, 255, 255, 0.62);
}

.thinking-heading h2 {
  margin: 0;
  color: #fff;
  font-size: 1.45rem;
}

.thinking-heading p { margin: 8px 0 0; }

.thinking-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.thought-card {
  min-height: 250px;
  display: flex;
  align-items: end;
  padding: 24px;
  overflow: hidden;
  color: #fff;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background-color: #17191b;
  background-position: center;
  background-size: cover;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.24);
  transition: transform 180ms ease, border-color 180ms ease;
}

.thought-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.36);
}

.thought-card-content {
  width: 100%;
  padding-top: 64px;
  background: linear-gradient(180deg, transparent, rgba(5, 6, 8, 0.82) 35%);
}

.thought-card time,
.thought-detail time {
  display: block;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
}

.thought-card h3 {
  margin: 8px 0 0;
  color: #fff;
  font-size: 1.25rem;
}

.thought-detail {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(9, 10, 12, 0.76);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.32);
}

.thought-detail-cover {
  min-height: 300px;
  display: flex;
  align-items: end;
  padding: clamp(24px, 6vw, 64px);
  background-color: #17191b;
  background-position: center;
  background-size: cover;
}

.thought-detail-cover h2 {
  max-width: 820px;
  margin: 12px 0 0;
  color: #fff;
  font-size: clamp(1.8rem, 4vw, 3rem);
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
}

.thought-detail-body {
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(28px, 6vw, 64px) 28px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.04rem;
  line-height: 1.95;
}

.thought-detail-body p { margin: 0 0 1.1em; }
.thought-detail-body img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 28px auto;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 18px 52px rgba(0, 0, 0, 0.28);
}
.thought-detail-body figure { margin: 30px 0; }
.thought-detail-body figcaption {
  margin-top: -18px;
  color: rgba(255, 255, 255, 0.54);
  font-size: 0.84rem;
  text-align: center;
}
.thought-detail-body h2, .thought-detail-body h3 { color: #fff; }
.thought-back { display: inline-flex; margin-bottom: 24px; color: #ffe0a3; text-decoration: none; }
.thought-empty { grid-column: 1 / -1; padding: 32px; color: rgba(255, 255, 255, 0.68); border: 1px solid rgba(255, 255, 255, 0.14); }

@media (max-width: 900px) {
  .thinking-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 600px) {
  .thinking-main { width: calc(100% - 32px); margin-top: -32px; }
  .thinking-heading { display: block; }
  .thinking-grid { grid-template-columns: 1fr; }
  .thought-card { min-height: 220px; }
  .thought-detail-cover { min-height: 230px; }
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
        <a href="blog.html"><span class="profile-nav-icon">✎</span><span class="profile-nav-en">Blog</span><span class="profile-nav-cn">博客</span></a>
        <a href="./#about"><span class="profile-nav-icon">⌁</span><span class="profile-nav-en">About</span><span class="profile-nav-cn">关于</span></a>
        <a href="https://www.xiaohongshu.com/user/profile/62e6a1d1000000001f016185"><span class="profile-nav-icon">◎</span><span class="profile-nav-en">RedBook</span><span class="profile-nav-cn">小红书</span></a>
        <a href="gallery.html"><span class="profile-nav-icon">▣</span><span class="profile-nav-en">Gallery</span><span class="profile-nav-cn">相册</span></a>
        <a class="is-active" href="thinking.html"><span class="profile-nav-icon">☼</span><span class="profile-nav-en">Thinking</span><span class="profile-nav-cn">思考</span></a>
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
            <li>整理 About 区域和人生时间线。</li>
            <li>给导航页面慢慢补内容。</li>
          </ul>
        </div>
      </div>
    </aside>
  </section>

  <main class="thinking-main" id="thinking-content">
    <div class="thinking-heading">
      <div>
        <h2>Thinking / 思考</h2>
        <p>把每天经过的念头，留成可以回看的记录。</p>
      </div>
      <a class="thought-back" id="thought-back" href="thinking.html" hidden>← 返回全部思考</a>
    </div>
    <section class="thinking-grid" id="thinking-grid" aria-label="思考记录">
      {% assign thought_documents = site.thoughts | sort: "date" | reverse %}
      {% for thought in thought_documents %}
      <a class="thought-card" href="thinking.html#{{ thought.slug | default: thought.path | split: "/" | last | replace: ".md", "" | replace: ".markdown", "" | uri_escape }}" data-thought-id="{{ thought.slug | default: thought.path | split: "/" | last | replace: ".md", "" | replace: ".markdown", "" | escape }}" style="background-image: linear-gradient(180deg, rgba(4, 5, 7, 0.02), rgba(4, 5, 7, 0.18)), url('{{ thought.cover | default: "/assets/hero-background.svg" | relative_url }}')">
        <div class="thought-card-content">
          <time datetime="{{ thought.date | date: "%Y-%m-%d" }}">{{ thought.date | date: "%Y.%m.%d" }}</time>
          <h3>{{ thought.title | escape }}</h3>
        </div>
      </a>
      {% endfor %}
      {% unless thought_documents.size > 0 %}<p class="thought-empty">还没有思考记录。新增一篇 `_thoughts/` Markdown 文件后，它会自动出现在这里。</p>{% endunless %}
    </section>

    <div id="thought-data" hidden>
      {% assign thought_documents = site.thoughts | sort: "date" | reverse %}
      {% for thought in thought_documents %}
      <article data-thought-id="{{ thought.slug | default: thought.path | split: "/" | last | replace: ".md", "" | replace: ".markdown", "" | escape }}" data-title="{{ thought.title | escape }}" data-date="{{ thought.date | date: "%Y-%m-%d" }}" data-cover="{{ thought.cover | default: "/assets/hero-background.svg" | relative_url }}">
        <div>{{ thought.content | markdownify }}</div>
      </article>
      {% endfor %}
    </div>
  </main>
</div>

<script>
(() => {
  const content = document.getElementById("thinking-content");
  const grid = document.getElementById("thinking-grid");
  const back = document.getElementById("thought-back");
  const records = [...document.querySelectorAll("#thought-data article")];

  function escapeHtml(value) {
    return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
  }

  function render() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const thought = records.find((entry) => entry.dataset.thoughtId === id);
    if (!thought) {
      grid.hidden = false;
      back.hidden = true;
      content.querySelector(".thought-detail")?.remove();
      return;
    }

    grid.hidden = true;
    back.hidden = false;
    content.querySelector(".thought-detail")?.remove();
    const detail = document.createElement("article");
    detail.className = "thought-detail";
    const cover = document.createElement("header");
    cover.className = "thought-detail-cover";
    cover.style.backgroundImage = `linear-gradient(180deg, rgba(4, 5, 7, 0.04), rgba(4, 5, 7, 0.78)), url('${thought.dataset.cover}')`;
    cover.innerHTML = `<div><time datetime="${escapeHtml(thought.dataset.date)}">${escapeHtml(thought.dataset.date.replaceAll("-", "."))}</time><h2>${escapeHtml(thought.dataset.title)}</h2></div>`;
    const body = document.createElement("div");
    body.className = "thought-detail-body";
    body.innerHTML = `<a class="thought-back" href="thinking.html">← 返回全部思考</a>${thought.firstElementChild.innerHTML}`;
    detail.append(cover, body);
    content.append(detail);
    window.scrollTo({ top: content.offsetTop - 24, behavior: "smooth" });
  }

  window.addEventListener("hashchange", render);
  render();
})();
</script>

<div id="music-player" aria-label="首页音乐播放器"></div>
<script src="assets/nav-shell.js"></script>
<script src="assets/music-player.js"></script>
<script src="assets/pet-cat.js"></script>
