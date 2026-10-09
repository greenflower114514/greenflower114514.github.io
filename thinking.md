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

.thought-calendar {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(9, 10, 12, 0.72);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.2);
}

.thought-calendar-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.thought-calendar-head h3 { margin: 0; color: #fff; font-size: 1.25rem; }
.thought-calendar-nav { display: flex; gap: 8px; }
.thought-calendar-nav button {
  width: 40px;
  height: 40px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
}
.thought-calendar-nav button:hover:not(:disabled) { background: rgba(255, 255, 255, 0.14); }
.thought-calendar-nav button:disabled { opacity: 0.35; cursor: default; }
.thought-calendar-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); }
.thought-calendar-weekday {
  padding: 12px 8px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.78rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.thought-calendar-cell {
  min-width: 0;
  min-height: 112px;
  padding: 10px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.thought-calendar-cell--empty { background: rgba(255, 255, 255, 0.015); }
.thought-day {
  width: 100%;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 8px;
  color: rgba(255, 255, 255, 0.78);
  text-align: left;
  border: 1px solid transparent;
  background: transparent;
  cursor: default;
}
.thought-day--has-entry { color: #fff; border-color: rgba(255, 224, 163, 0.28); background: rgba(255, 224, 163, 0.07); cursor: pointer; }
.thought-day--has-entry:hover { border-color: rgba(255, 224, 163, 0.72); background: rgba(255, 224, 163, 0.13); }
.thought-day-number { color: #ffe0a3; font-size: 0.9rem; }
.thought-day-title { width: 100%; color: rgba(255, 255, 255, 0.9); font-size: 0.82rem; line-height: 1.4; overflow-wrap: anywhere; }
.thought-calendar-empty { padding: 18px 22px; color: rgba(255, 255, 255, 0.55); }
.thought-calendar[hidden] { display: none; }
.thinking-calendar[hidden] { display: none; }

.thought-detail time {
  display: block;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.82rem;
  letter-spacing: 0.08em;
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

.thought-detail-body .thought-section-break { margin-top: 1.8em; }
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
@media (max-width: 600px) {
  .thinking-main { width: calc(100% - 32px); margin-top: -32px; }
  .thinking-heading { display: block; }
  .thought-calendar-head { padding: 14px; }
  .thought-calendar-cell { min-height: 80px; padding: 4px; }
  .thought-day { min-height: 68px; padding: 5px; gap: 5px; }
  .thought-day-title { font-size: 0.7rem; }
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
    <section class="thinking-calendar" id="thinking-calendar" aria-label="思考日历">
      <div class="thought-calendar">
        <div class="thought-calendar-head">
          <h3 id="thought-calendar-title"></h3>
          <div class="thought-calendar-nav" aria-label="切换月份">
            <button type="button" id="thought-month-prev" aria-label="上个月">‹</button>
            <button type="button" id="thought-month-next" aria-label="下个月">›</button>
          </div>
        </div>
        <div class="thought-calendar-grid" id="thought-calendar-grid" role="grid" aria-label="思考日期"></div>
        <p class="thought-calendar-empty" id="thought-calendar-empty" hidden>这个月还没有思考记录。</p>
      </div>
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
  const calendar = document.getElementById("thinking-calendar");
  const calendarTitle = document.getElementById("thought-calendar-title");
  const calendarGrid = document.getElementById("thought-calendar-grid");
  const calendarEmpty = document.getElementById("thought-calendar-empty");
  const previousMonth = document.getElementById("thought-month-prev");
  const nextMonth = document.getElementById("thought-month-next");
  const back = document.getElementById("thought-back");
  const records = [...document.querySelectorAll("#thought-data article")];
  const weekdays = ["日", "一", "二", "三", "四", "五", "六"];

  function dateParts(dateText) {
    const [year, month, day] = dateText.split("-").map(Number);
    return { year, month, day };
  }

  function monthKey(year, month) {
    return `${year}-${String(month + 1).padStart(2, "0")}`;
  }

  const availableMonths = records.map((record) => {
    const { year, month } = dateParts(record.dataset.date);
    return monthKey(year, month - 1);
  }).sort();
  const firstMonth = availableMonths[0] || "";
  const lastMonth = availableMonths.at(-1) || "";
  let visibleMonth = lastMonth ? dateParts(`${lastMonth}-01`) : dateParts(new Date().toISOString().slice(0, 10));

  function renderCalendar() {
    const { year, month } = visibleMonth;
    const key = monthKey(year, month - 1);
    calendarTitle.textContent = new Date(year, month - 1, 1).toLocaleDateString("zh-CN", { year: "numeric", month: "long" });
    previousMonth.disabled = !firstMonth || key <= firstMonth;
    nextMonth.disabled = !lastMonth || key >= lastMonth;
    calendarGrid.innerHTML = weekdays.map((day) => `<div class="thought-calendar-weekday" role="columnheader">周${day}</div>`).join("");

    const firstWeekday = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const thoughtsByDay = new Map();
    records.forEach((record) => {
      const { year: recordYear, month: recordMonth, day } = dateParts(record.dataset.date);
      if (recordYear !== year || recordMonth !== month) return;
      const list = thoughtsByDay.get(day) || [];
      list.push(record);
      thoughtsByDay.set(day, list);
    });

    for (let index = 0; index < firstWeekday; index += 1) {
      calendarGrid.insertAdjacentHTML("beforeend", '<div class="thought-calendar-cell thought-calendar-cell--empty" role="gridcell" aria-hidden="true"></div>');
    }
    for (let day = 1; day <= daysInMonth; day += 1) {
      const dayRecords = thoughtsByDay.get(day) || [];
      const cell = document.createElement("div");
      cell.className = "thought-calendar-cell";
      cell.setAttribute("role", "gridcell");
      if (dayRecords.length) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "thought-day thought-day--has-entry";
        button.setAttribute("aria-label", `${year}年${month}月${day}日：${dayRecords.map((record) => record.dataset.title).join("、")}`);
        button.addEventListener("click", () => { window.location.hash = dayRecords[0].dataset.thoughtId; });
        button.innerHTML = `<span class="thought-day-number">${day} 日</span>${dayRecords.map((record) => `<span class="thought-day-title">${escapeHtml(record.dataset.title)}</span>`).join("")}`;
        cell.append(button);
      } else {
        cell.innerHTML = `<div class="thought-day"><span class="thought-day-number">${day}</span></div>`;
      }
      calendarGrid.append(cell);
    }
    const trailingCells = (7 - ((firstWeekday + daysInMonth) % 7)) % 7;
    for (let index = 0; index < trailingCells; index += 1) {
      calendarGrid.insertAdjacentHTML("beforeend", '<div class="thought-calendar-cell thought-calendar-cell--empty" role="gridcell" aria-hidden="true"></div>');
    }
    calendarEmpty.hidden = thoughtsByDay.size > 0;
  }

  function changeMonth(offset) {
    const next = new Date(visibleMonth.year, visibleMonth.month - 1 + offset, 1);
    visibleMonth = { year: next.getFullYear(), month: next.getMonth() + 1 };
    renderCalendar();
  }

  function escapeHtml(value) {
    return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
  }

  function render() {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const thought = records.find((entry) => entry.dataset.thoughtId === id);
    if (!thought) {
      calendar.hidden = false;
      back.hidden = true;
      content.querySelector(".thought-detail")?.remove();
      return;
    }

    calendar.hidden = true;
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

  previousMonth.addEventListener("click", () => changeMonth(-1));
  nextMonth.addEventListener("click", () => changeMonth(1));
  renderCalendar();
  window.addEventListener("hashchange", render);
  render();
})();
</script>

<div id="music-player" aria-label="首页音乐播放器"></div>
<script src="assets/nav-shell.js"></script>
<script src="assets/music-player.js"></script>
<script src="assets/pet-cat.js"></script>
