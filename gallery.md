---
layout: home
title: 个人主页
permalink: /gallery.html
---

<link rel="stylesheet" href="assets/nav-shell.css">
<link rel="stylesheet" href="assets/gallery.css">
<link rel="stylesheet" href="assets/pet-cat.css">
<link rel="stylesheet" href="assets/music-player.css">

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
        <a class="is-active" href="gallery.html"><span class="profile-nav-icon">▣</span><span class="profile-nav-en">Gallery</span><span class="profile-nav-cn">相册</span></a>
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
            <li>整理 About 区域和人生时间线。</li>
            <li>给导航页面慢慢补内容。</li>
          </ul>
        </div>
      </div>
    </aside>
  </section>
</div>

<main class="gallery-shell" id="gallery-app" aria-label="Gallery 相册内容"></main>

<div id="music-player" aria-label="首页音乐播放器"></div>
<script src="assets/nav-shell.js"></script>
<script src="assets/gallery.js"></script>
<script src="assets/music-player.js"></script>
<script src="assets/pet-cat.js"></script>
