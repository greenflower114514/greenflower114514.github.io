---
layout: home
title: 个人主页
permalink: /redbook.html
---

<link rel="stylesheet" href="assets/nav-shell.css">

<div class="profile-page">
  <section class="profile-hero">
    <time class="profile-time" id="profile-time">Loading time...</time>

    <div class="profile-hero-inner">
      <img class="profile-avatar" src="https://avatars.githubusercontent.com/u/93895894?v=4" alt="干煸双鲜的头像">
      <h1 class="profile-title">干煸双鲜</h1>
      <p class="profile-subtitle">·谁能送我只猫啊·</p>
      <div class="profile-divider"></div>
      <nav class="profile-nav" aria-label="个人主页导航">
        <a href="blog.html"><span class="profile-nav-icon">✎</span><span class="profile-nav-en">Blog</span><span class="profile-nav-cn">博客</span></a>
        <a href="./#about"><span class="profile-nav-icon">⌁</span><span class="profile-nav-en">About</span><span class="profile-nav-cn">关于</span></a>
        <a class="is-active" href="redbook.html"><span class="profile-nav-icon">◎</span><span class="profile-nav-en">RedBook</span><span class="profile-nav-cn">小红书</span></a>
        <a href="gallery.html"><span class="profile-nav-icon">▣</span><span class="profile-nav-en">Gallery</span><span class="profile-nav-cn">相册</span></a>
        <a href="thinking.html"><span class="profile-nav-icon">☼</span><span class="profile-nav-en">Thinking</span><span class="profile-nav-cn">思考</span></a>
      </nav>
    </div>
  </section>

  <aside class="daily-board" aria-label="今日正在做的事">
    <h2>今日黑板</h2>
    <time>Today / 正在做</time>
    <ul>
      <li>继续装修 GitHub 个人主页。</li>
      <li>整理 About 区域和人生时间线。</li>
      <li>给导航页面慢慢补内容。</li>
    </ul>
  </aside>

  <aside class="visit-calendar" aria-label="主页访问日历">
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
  </aside>
</div>

<script src="assets/nav-shell.js"></script>
