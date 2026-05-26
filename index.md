---
layout: home
title: 电子蜗居
---

<style>
body {
  color: rgba(255, 255, 255, 0.82);
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.10), transparent 30%),
    radial-gradient(circle at 14% 48%, rgba(112, 125, 143, 0.14), transparent 32%),
    linear-gradient(180deg, #101112 0%, #1d2022 46%, #0b0d0f 100%) !important;
}

.site-header,
.site-footer,
.post-header {
  display: none;
}

.post-title,
.page-heading {
  position: absolute;
  top: 18px;
  left: max(28px, calc((100vw - 1180px) / 2));
  z-index: 3;
  margin: 0 !important;
  padding: 8px 18px;
  color: rgba(255, 255, 255, 0.88) !important;
  font-size: 1rem !important;
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(8, 9, 10, 0.32);
  backdrop-filter: blur(14px);
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.22);
}

.page-content {
  padding: 0 !important;
  background: transparent !important;
}

.wrapper {
  max-width: none !important;
  padding: 0 !important;
}

.profile-page {
  min-height: 100vh;
  color: rgba(255, 255, 255, 0.82);
  background:
    radial-gradient(circle at 50% 32%, rgba(255, 255, 255, 0.06), transparent 24%),
    linear-gradient(180deg, #151617 0%, #202326 44%, #0c0f12 100%);
}

.profile-time {
  position: absolute;
  top: 18px;
  right: max(28px, calc((100vw - 1180px) / 2));
  z-index: 3;
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  padding: 0 14px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.82rem;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(8, 9, 10, 0.30);
  backdrop-filter: blur(14px);
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.24);
}

.profile-hero {
  position: relative;
  min-height: min(620px, 70vh);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 66px 24px 58px;
  text-align: center;
  background:
    linear-gradient(180deg, rgba(8, 9, 10, 0.30), rgba(8, 9, 10, 0.76)),
    radial-gradient(circle at 50% 42%, rgba(255, 255, 255, 0.12), transparent 24%),
    url("assets/hero-background.svg") center / cover no-repeat;
}

.profile-hero::after {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 86px;
  content: "";
  background: linear-gradient(180deg, transparent, #202326 78%);
  pointer-events: none;
}

.profile-hero-inner {
  position: relative;
  z-index: 1;
  width: min(680px, 94vw);
  transform: translateY(-2px);
}

.profile-avatar {
  width: 88px;
  height: 88px;
  object-fit: cover;
  border: 4px solid #f2f2f2;
  border-radius: 50%;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.38),
    0 24px 64px rgba(0, 0, 0, 0.46);
}

.profile-title {
  margin: 18px 0 8px;
  color: #fff;
  font-size: 2.55rem;
  font-weight: 800;
  line-height: 1.12;
  text-align: center;
}

.profile-subtitle {
  margin: 0 auto 24px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.95rem;
  letter-spacing: 0.18em;
  text-align: center;
}

.profile-divider {
  width: min(500px, 88vw);
  height: 1px;
  margin: 0 auto 34px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.30), transparent);
}

.profile-nav {
  display: grid;
  grid-template-columns: repeat(5, minmax(84px, 1fr));
  width: min(620px, 94vw);
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(12, 13, 14, 0.18);
  backdrop-filter: blur(12px);
}

.profile-nav a {
  display: flex;
  min-height: 92px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  color: rgba(255, 255, 255, 0.74);
  text-decoration: none;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  transition: color 160ms ease, background 160ms ease;
}

.profile-nav a:last-child {
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

.profile-nav a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.profile-nav-icon {
  font-size: 1.12rem;
  line-height: 1;
}

.profile-nav-en {
  color: #fff;
  font-size: 0.92rem;
  line-height: 1.1;
}

.profile-nav-cn {
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.76rem;
  line-height: 1.1;
}

.profile-content {
  width: min(900px, calc(100% - 64px));
  margin: 0 auto;
  padding: 46px 0 124px;
}

.daily-board {
  position: fixed;
  top: 92px;
  right: max(22px, calc((100vw - 1700px) / 2 + 20px));
  z-index: 2;
  width: 300px;
  padding: 24px;
  color: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.15);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.025)),
    rgba(9, 10, 12, 0.76);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(18px);
}

.daily-board::before {
  display: block;
  width: 56px;
  height: 3px;
  margin: 0 auto 18px;
  content: "";
  background: rgba(255, 255, 255, 0.22);
}

.daily-board h2 {
  margin: 0 0 8px;
  color: #fff;
  font-size: 1.05rem;
}

.daily-board time {
  display: block;
  margin-bottom: 18px;
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.76rem;
  letter-spacing: 0.10em;
}

.daily-board ul {
  display: grid;
  gap: 10px;
  margin: 0;
  padding-left: 1.05rem;
}

.daily-board li {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
}

.visit-calendar {
  position: fixed;
  top: 92px;
  left: max(22px, calc((100vw - 1700px) / 2 + 20px));
  z-index: 2;
  width: 300px;
  padding: 22px;
  color: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.15);
  background:
    radial-gradient(circle at 10% 10%, rgba(255, 138, 66, 0.55), transparent 34%),
    radial-gradient(circle at 90% 94%, rgba(46, 204, 143, 0.72), transparent 36%),
    linear-gradient(135deg, rgba(249, 115, 22, 0.72), rgba(17, 24, 39, 0.86) 46%, rgba(15, 23, 42, 0.92));
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.36);
  backdrop-filter: blur(18px);
}

.calendar-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 22px;
}

.calendar-head button {
  width: 38px;
  height: 34px;
  color: #fff;
  border: 0;
  background: rgba(255, 255, 255, 0.16);
  cursor: pointer;
}

.calendar-title {
  color: #fff;
  font-weight: 700;
  text-align: center;
}

.calendar-weekdays,
.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
}

.calendar-weekdays {
  margin-bottom: 8px;
}

.calendar-weekdays span {
  padding: 6px 0;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.78rem;
  font-weight: 700;
  text-align: center;
  background: rgba(255, 255, 255, 0.12);
}

.calendar-day {
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.86rem;
  border: 1px solid transparent;
}

.calendar-day.is-muted {
  color: rgba(255, 255, 255, 0.28);
}

.calendar-day.is-visited {
  color: #111827;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.90);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.38);
}

.calendar-day.is-today {
  border-color: rgba(255, 255, 255, 0.72);
}

.calendar-note {
  margin: 16px 0 0;
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.74rem;
  line-height: 1.55;
}

.about-kicker {
  margin: 0 0 14px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.about-title {
  margin: 0 0 18px;
  color: #fff;
  font-size: 2.25rem;
  line-height: 1.2;
}

.about-intro {
  max-width: 900px;
  margin: 0 0 38px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 1.05rem;
  line-height: 1.9;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.about-card,
.timeline-card {
  border: 1px solid rgba(255, 255, 255, 0.13);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.025)),
    rgba(9, 10, 12, 0.34);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(14px);
}

.about-card {
  position: relative;
  min-height: 180px;
  padding: 32px 36px;
  overflow: visible;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.about-card:hover {
  z-index: 4;
  transform: translateX(-4px);
  border-color: rgba(255, 255, 255, 0.24);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.035)),
    rgba(9, 10, 12, 0.40);
}

.about-card h3,
.timeline-title {
  margin: 0 0 12px;
  color: #fff;
  font-size: 1.1rem;
}

.about-card > p,
.about-card > ul {
  max-width: 100%;
}

.about-card-summary {
  margin-bottom: 22px;
}

.about-items {
  display: grid;
  gap: 12px;
  margin: 0;
  padding-left: 1.3rem;
}

.about-items li::marker {
  color: rgba(255, 255, 255, 0.84);
  font-weight: 700;
}

.about-item-name {
  color: #fff;
  font-weight: 700;
}

.about-detail {
  position: fixed;
  top: 50%;
  right: max(24px, calc((100vw - 1700px) / 2 + 24px));
  z-index: 12;
  width: min(1040px, calc(100vw - 720px));
  min-height: min(720px, calc(100vh - 120px));
  max-height: calc(100vh - 96px);
  overflow: auto;
  padding: 34px;
  opacity: 0;
  transform: translate(28px, -50%);
  color: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(255, 255, 255, 0.16);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.035)),
    rgba(12, 13, 14, 0.92);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(18px);
  pointer-events: none;
  transition: opacity 180ms ease, transform 180ms ease;
}

.about-card:hover .about-detail,
.about-card.is-detail-open .about-detail {
  opacity: 1;
  pointer-events: auto;
  transform: translate(0, -50%);
}

.about-detail strong {
  display: block;
  margin-bottom: 10px;
  color: #fff;
}

.about-detail p {
  margin: 0 0 12px;
}

.about-detail p:last-child {
  margin-bottom: 0;
}

.about-cover-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}

.about-detail-media {
  position: relative;
  min-height: 170px;
  display: flex;
  align-items: end;
  justify-content: start;
  padding: 16px;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.86);
  font: inherit;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(circle at 36% 28%, rgba(255, 255, 255, 0.18), transparent 28%),
    linear-gradient(135deg, rgba(255, 138, 66, 0.30), rgba(46, 204, 143, 0.18)),
    rgba(255, 255, 255, 0.04);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: zoom-in;
}

.about-detail-media::after {
  position: absolute;
  inset: 0;
  content: "";
  background:
    linear-gradient(180deg, transparent 42%, rgba(9, 10, 12, 0.76)),
    linear-gradient(135deg, rgba(9, 10, 12, 0.10), rgba(9, 10, 12, 0.42));
  pointer-events: none;
}

.about-detail-media > span {
  position: relative;
  z-index: 1;
}

.about-detail-media.is-placeholder {
  border-style: dashed;
  background:
    radial-gradient(circle at 36% 28%, rgba(255, 255, 255, 0.18), transparent 28%),
    linear-gradient(135deg, rgba(255, 138, 66, 0.30), rgba(46, 204, 143, 0.18)),
    rgba(255, 255, 255, 0.04);
}

.about-detail-list {
  display: grid;
  gap: 18px;
  margin: 0;
  padding-left: 1.35rem;
}

.about-detail-list li::marker {
  color: #fff;
  font-weight: 800;
}

.about-detail-list h4 {
  margin: 0 0 8px;
  color: #fff;
  font-size: 1rem;
}

.about-detail-list p {
  margin: 0 0 8px;
}

.about-comment {
  color: rgba(255, 255, 255, 0.60);
}

.about-load-error {
  padding: 28px;
  color: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.13);
  background: rgba(9, 10, 12, 0.34);
}

.about-detail a {
  color: #d8e2ff;
}

.detail-lightbox {
  position: fixed;
  inset: 0;
  z-index: 30;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(12px);
}

.detail-lightbox.is-open {
  display: flex;
}

.detail-lightbox-panel {
  width: min(980px, calc(100vw - 64px));
  min-height: min(620px, calc(100vh - 96px));
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.78);
  font-size: 1.1rem;
  letter-spacing: 0.12em;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background:
    radial-gradient(circle at 45% 30%, rgba(255, 255, 255, 0.16), transparent 28%),
    linear-gradient(135deg, #282b2f, #0b0d0f);
  box-shadow: 0 28px 110px rgba(0, 0, 0, 0.55);
}

.detail-lightbox-panel img {
  display: block;
  width: 100%;
  max-height: calc(100vh - 96px);
  object-fit: contain;
}

.detail-lightbox-close {
  position: fixed;
  top: 24px;
  right: 28px;
  width: 40px;
  height: 40px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
}

.about-card p,
.about-card li,
.timeline-card p {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.85;
}

.about-card ul {
  margin: 0;
  padding-left: 1.1rem;
}

.about-card a {
  color: #d8e2ff;
}

.about-timeline {
  margin-top: 48px;
}

.timeline-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 14px;
}

.timeline-heading h2 {
  margin: 0;
  color: #fff;
  font-size: 1.45rem;
}

.timeline-heading span {
  color: rgba(255, 255, 255, 0.54);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
}

.timeline-list {
  position: relative;
  display: grid;
  gap: 20px;
  margin: 0;
  padding: 0 0 0 34px;
  list-style: none;
}

.timeline-list::before {
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 9px;
  width: 1px;
  content: "";
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.36), rgba(255, 255, 255, 0.12));
}

.timeline-item {
  position: relative;
}

.timeline-item::before {
  position: absolute;
  top: 24px;
  left: -31px;
  width: 11px;
  height: 11px;
  content: "";
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  background: #202326;
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.05);
}

.timeline-card {
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  padding: 26px 30px;
}

.timeline-year {
  display: inline-flex;
  margin-bottom: 12px;
  padding: 4px 10px;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
}

.timeline-copy h3 {
  margin-top: 0;
}

@media (max-width: 640px) {
  .profile-time {
    top: 56px;
    right: 14px;
    min-height: 30px;
    padding: 0 10px;
    font-size: 0.68rem;
  }

  .profile-hero {
    min-height: 590px;
    padding: 64px 14px 54px;
  }

  .profile-title {
    font-size: 2rem;
  }

  .profile-nav {
    grid-template-columns: repeat(5, 1fr);
    width: min(560px, 96vw);
  }

  .profile-nav a {
    min-height: 76px;
  }

  .profile-nav-en {
    font-size: 0.76rem;
  }

  .profile-nav-cn {
    font-size: 0.66rem;
  }

  .profile-content {
    width: min(100% - 28px, 860px);
    margin-right: auto;
    margin-left: auto;
    padding-top: 36px;
  }

  .about-title {
    font-size: 1.55rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-card {
    min-height: auto;
    padding: 22px;
  }

  .about-card:hover {
    transform: none;
  }

  .about-card > p,
  .about-card > ul {
    max-width: none;
  }

  .about-detail {
    position: static;
    width: auto;
    min-height: auto;
    margin-top: 18px;
    padding: 16px 0 0;
    opacity: 1;
    transform: none;
    border-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
  }

  .about-cover-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-detail-media {
    min-height: 120px;
  }

  .daily-board {
    position: fixed;
    top: 92px;
    right: 14px;
    width: 220px;
    margin: 0;
  }

  .visit-calendar {
    position: fixed;
    top: 92px;
    left: 14px;
    width: 220px;
    margin: 0;
  }

  .timeline-heading {
    display: block;
  }

  .timeline-heading span {
    display: block;
    margin-top: 8px;
  }

  .timeline-card {
    display: block;
    padding: 22px;
  }

  .post-title,
  .page-heading {
    top: 14px;
    left: 14px;
    padding: 7px 12px;
    font-size: 0.82rem !important;
  }
}

@media (min-width: 641px) and (max-width: 1450px) {
  .profile-content {
    width: min(980px, calc(100% - 64px));
    margin-right: auto;
    margin-left: auto;
  }

  .about-detail {
    position: static;
    width: auto;
    min-height: auto;
    margin-top: 22px;
    padding: 18px;
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }

  .about-card:hover .about-detail,
  .about-card.is-detail-open .about-detail {
    transform: none;
  }

  .daily-board {
    position: fixed;
    top: 92px;
    right: 24px;
    width: 260px;
    margin: 0;
  }

  .visit-calendar {
    position: fixed;
    top: 92px;
    left: 24px;
    width: 260px;
    margin: 0;
  }
}
</style>

<div class="profile-page">
  <section class="profile-hero">
    <time class="profile-time" id="profile-time">Loading time...</time>

    <div class="profile-hero-inner">
      <img class="profile-avatar" src="https://avatars.githubusercontent.com/u/93895894?v=4" alt="干煸双鲜的头像">
      <h1 class="profile-title">干煸双鲜</h1>
      <p class="profile-subtitle">·谁能送我只猫啊·</p>
      <div class="profile-divider"></div>
      <nav class="profile-nav" aria-label="个人主页导航">
        <a href="blog.html">
          <span class="profile-nav-icon">✎</span>
          <span class="profile-nav-en">Blog</span>
          <span class="profile-nav-cn">博客</span>
        </a>
        <a href="#about">
          <span class="profile-nav-icon">⌁</span>
          <span class="profile-nav-en">About</span>
          <span class="profile-nav-cn">关于</span>
        </a>
        <a href="redbook.html">
          <span class="profile-nav-icon">◎</span>
          <span class="profile-nav-en">RedBook</span>
          <span class="profile-nav-cn">小红书</span>
        </a>
        <a href="gallery.html">
          <span class="profile-nav-icon">▣</span>
          <span class="profile-nav-en">Gallery</span>
          <span class="profile-nav-cn">相册</span>
        </a>
        <a href="thinking.html">
          <span class="profile-nav-icon">☼</span>
          <span class="profile-nav-en">Thinking</span>
          <span class="profile-nav-cn">思考</span>
        </a>
      </nav>
    </div>
  </section>

  <main class="profile-content" id="about">
    <p class="about-kicker">About / 关于</p>
    <h2 class="about-title">电子蜗居</h2>
    <p class="about-intro">网络是由信号与电流构筑而成的城市群，而散落的文字、代码与图像，在其中拼凑出我的电子蜗居。</p>

    <section class="about-grid" aria-label="关于我的卡片">
      <article class="about-card">
        <h3>关于我</h3>
        <p>你好，我是干煸双鲜。这里是我的 GitHub 个人主页，也是一个用来展示近况、记录想法、顺便证明我确实在努力的地方。</p>
        <div class="about-detail">
          <button class="about-detail-media" type="button" data-lightbox-title="IMAGE / NOTE">IMAGE / NOTE</button>
          <strong>更多一点</strong>
          <p>这个主页会慢慢变成一个个人档案馆：有学习痕迹，有奇怪想法，也会有一些阶段性成果。不是一次装修完，而是边走边补。</p>
          <p>这里以后可以放一张代表自己的图片、阶段截图，或者某个项目的预览图。</p>
          <p><a href="https://github.com/greenflower114514">查看 GitHub 主页</a></p>
        </div>
      </article>

      <article class="about-card">
        <h3>当前状态</h3>
        <p>正在把个人主页从“能看”慢慢改造成“有点东西”。学习、项目、表达能力都在施工中，偶尔还会和 CSS 进行友好切磋。</p>
        <div class="about-detail">
          <button class="about-detail-media" type="button" data-lightbox-title="TODAY / BUILDING">TODAY / BUILDING</button>
          <strong>施工现场</strong>
          <p>当前重点是把页面结构、内容分区和个人表达先搭起来。等地基稳了，再继续补博客、小红书、相册和思考页面。</p>
          <p>这个模块适合记录近期状态，比如正在学什么、正在做什么、最近卡在哪个坑里。</p>
          <p><a href="blog.html">去 Blog 页面看看</a></p>
        </div>
      </article>

      <article class="about-card">
        <h3>兴趣偏好</h3>
        <ul>
          <li>喜欢有一点个人气味的页面。</li>
          <li>喜欢猫，但目前处于“谁能送我只猫啊”的阶段。</li>
          <li>喜欢把普通东西折腾得更像自己一点。</li>
        </ul>
        <div class="about-detail">
          <button class="about-detail-media" type="button" data-lightbox-title="MOOD / LIFE">MOOD / LIFE</button>
          <strong>风格偏好</strong>
          <p>偏好暗色、克制、有一点神秘感的视觉风格。内容可以认真，但不要太端着，最好能让访客感觉这里确实住着一个人。</p>
          <p>未来可以把喜欢的图片、歌单、照片或者小红书内容做成这一块的延伸入口。</p>
          <p><a href="redbook.html">去小红书页面看看</a></p>
        </div>
      </article>

      <article class="about-card">
        <h3>技术方向</h3>
        <p>目前关注编程学习、项目实践、GitHub Pages 和个人站点搭建。技能树还在长，枝杈有点随缘，但根应该是认真在扎。</p>
        <div class="about-detail">
          <button class="about-detail-media" type="button" data-lightbox-title="STACK / MAP">STACK / MAP</button>
          <strong>正在生长</strong>
          <p>这里之后可以继续扩展为技能地图：前端、图形、工具链、项目经验都能放进来，不急着吹满，先让它真实一点。</p>
          <p>等内容更多时，可以在这里放技能标签、学习路线图，或者项目截图。</p>
          <p><a href="thinking.html">去 Thinking 页面看看</a></p>
        </div>
      </article>

      <article class="about-card">
        <h3>小目标</h3>
        <ul>
          <li>持续完善这个主页。</li>
          <li>把学习过程整理成能复看的记录。</li>
          <li>让项目展示不再像临时占位。</li>
        </ul>
        <div class="about-detail">
          <button class="about-detail-media" type="button" data-lightbox-title="NEXT / PLAN">NEXT / PLAN</button>
          <strong>近期目标</strong>
          <p>先把每个导航页面做成可用状态，再逐步补内容。等内容多起来，这里就不只是首页，而是一个真正能回看的个人索引。</p>
          <p>这个区域可以持续更新成季度目标、学习计划，或者一些完成后会很爽的小清单。</p>
          <p><a href="gallery.html">去 Gallery 页面看看</a></p>
        </div>
      </article>

      <article class="about-card">
        <h3>联系入口</h3>
        <p>目前先保留 GitHub 作为公开入口：<a href="https://github.com/greenflower114514">greenflower114514</a>。其他联系方式等我想好怎么优雅出现再说。</p>
        <div class="about-detail">
          <button class="about-detail-media" type="button" data-lightbox-title="LINK / ONLY">LINK / ONLY</button>
          <strong>公开入口</strong>
          <p>先用 GitHub 做唯一公开入口，既够用，也不会把私人信息散得到处都是。需要更多联系方式时，再单独设计一个更漂亮的出现方式。</p>
          <p>后续可以添加项目仓库、主页链接，或者一个更正式的联系页面。</p>
          <p><a href="https://github.com/greenflower114514">打开 GitHub</a></p>
        </div>
      </article>
    </section>

    <section class="about-timeline" aria-label="人生时间线">
      <div class="timeline-heading">
        <h2>Timeline / 人生节点</h2>
        <span>不觉得很神圣吗...其实还好</span>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <article class="timeline-card">
            <span class="timeline-year">2023</span>
            <div class="timeline-copy">
              <h3 class="timeline-title">研究生入学</h3>
              <p>只是这样。</p>
            </div>
          </article>
        </li>

        <li class="timeline-item">
          <article class="timeline-card">
            <span class="timeline-year">2026.5.25</span>
            <div class="timeline-copy">
              <h3 class="timeline-title">创建个人主页</h3>
              <p>前途一片......啊。</p>
            </div>
          </article>
        </li>
      </ol>
    </section>
  </main>

</div>

<aside class="daily-board" aria-label="今日正在做的事">
    <h2>今日黑板</h2>
    <time>Today / 正在做</time>
    <ul>
      <li>继续装修 GitHub 个人主页。</li>
      <li>整理 About 区域和人生时间线。</li>
      <li>明明是黑板，内容却要在.md文件中修改，看起来真的很诡异，也许应该做一个在线修改的功能。</li>
    </ul>
  </aside>

  <aside class="visit-calendar" aria-label="主页访问日历">
    <div class="calendar-head">
      <button class="calendar-prev" type="button" aria-label="上个月">&lt;</button>
      <div class="calendar-title" id="calendar-title">Month 0000</div>
      <button class="calendar-next" type="button" aria-label="下个月">&gt;</button>
    </div>
    <div class="calendar-weekdays" aria-hidden="true">
      <span>S</span>
      <span>M</span>
      <span>T</span>
      <span>W</span>
      <span>T</span>
      <span>F</span>
      <span>S</span>
    </div>
    <div class="calendar-days" id="calendar-days"></div>
    <p class="calendar-note">访问过主页的日期会被点亮，记录保存在当前浏览器中。</p>
  </aside>

<div class="detail-lightbox" id="detail-lightbox" aria-hidden="true">
    <button class="detail-lightbox-close" type="button" aria-label="关闭大图">×</button>
    <div class="detail-lightbox-panel" id="detail-lightbox-panel">IMAGE / NOTE</div>
  </div>

<script>
let activeAboutCard = null;
let detailCloseTimer = null;
const aboutSectionsPath = "assets/about-sections.json";
const visitCalendarKey = "greenflower-homepage-visits";
const emptyAboutTitle = "内容还需要继续丰富";
const emptyAboutDescription = "这里以后会自动展示对应分类的 blog 内容。";
const emptyAboutComment = "等我再写几篇再来看看。";
const emptyAboutCoverLabel = "待补充";
const aboutBlogEntries = [
{% assign homepage_about_posts = site.blog | sort: "date" | reverse %}
{% for post in homepage_about_posts %}
  {
    id: {{ post.path | split: "/" | last | replace: ".md", "" | replace: ".markdown", "" | jsonify }},
    date: {{ post.date | date: "%Y-%m-%d" | jsonify }},
    aboutSection: {{ post.aboutSection | default: "" | jsonify }},
    title: {{ post.title | default: "" | jsonify }},
    excerpt: {{ post.excerpt | default: post.content | strip_html | strip_newlines | truncate: 140 | jsonify }},
    aboutTitle: {{ post.aboutTitle | default: "" | jsonify }},
    aboutDescription: {{ post.aboutDescription | default: "" | jsonify }},
    aboutComment: {{ post.aboutComment | default: "" | jsonify }},
    cover: {{ post.cover | default: "" | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
];

function openAboutDetail(card) {
  if (detailCloseTimer) window.clearTimeout(detailCloseTimer);
  if (activeAboutCard && activeAboutCard !== card) {
    activeAboutCard.classList.remove("is-detail-open");
  }
  activeAboutCard = card;
  card.classList.add("is-detail-open");
}

function scheduleCloseAboutDetail() {
  if (detailCloseTimer) window.clearTimeout(detailCloseTimer);
  detailCloseTimer = window.setTimeout(() => {
    if (activeAboutCard) {
      activeAboutCard.classList.remove("is-detail-open");
      activeAboutCard = null;
    }
  }, 120);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderAboutSections(sections) {
  const grid = document.querySelector(".about-grid");
  if (!grid) return;

  grid.innerHTML = sections.map((section) => {
    const items = Array.isArray(section.items) ? section.items.slice(0, 4) : [];
    const title = `${escapeHtml(section.titleEn)} / ${escapeHtml(section.titleCn)}`;
    const itemList = items.map((item) => `
      <li><span class="about-item-name">${escapeHtml(item.name)}</span>：${escapeHtml(item.description)}</li>
    `).join("");
    const coverGrid = items.map((item) => `
      <button class="about-detail-media" type="button" data-lightbox-title="${escapeHtml(item.coverLabel || item.name)}">
        ${escapeHtml(item.coverLabel || item.name)}
      </button>
    `).join("");
    const detailList = items.map((item) => `
      <li>
        <h4>${escapeHtml(item.name)}</h4>
        <p>${escapeHtml(item.description)}</p>
        <p class="about-comment">我的评价：${escapeHtml(item.comment)}</p>
      </li>
    `).join("");

    return `
      <article class="about-card" data-section="${escapeHtml(section.id)}">
        <h3>${title}</h3>
        <p class="about-card-summary">${escapeHtml(section.summary)}</p>
        <ol class="about-items">${itemList}</ol>
        <div class="about-detail">
          <div class="about-cover-grid">${coverGrid}</div>
          <strong>${title}</strong>
          <ol class="about-detail-list">${detailList}</ol>
        </div>
      </article>
    `;
  }).join("");

  bindAboutInteractions();
  bindLightboxTriggers();
}

function normalizeAboutText(value) {
  return String(value ?? "").trim();
}

function normalizeAboutBlogEntry(entry) {
  const aboutSection = normalizeAboutText(entry.aboutSection);
  if (!aboutSection) return null;

  const title = normalizeAboutText(entry.aboutTitle) || normalizeAboutText(entry.title) || emptyAboutTitle;
  const description = normalizeAboutText(entry.aboutDescription) || normalizeAboutText(entry.excerpt) || emptyAboutDescription;

  return {
    id: normalizeAboutText(entry.id),
    date: normalizeAboutText(entry.date),
    aboutSection,
    name: title,
    description,
    comment: normalizeAboutText(entry.aboutComment),
    cover: normalizeAboutText(entry.cover),
    coverLabel: title
  };
}

const normalizedAboutBlogEntries = aboutBlogEntries
  .map(normalizeAboutBlogEntry)
  .filter(Boolean)
  .sort((left, right) => String(right.date).localeCompare(String(left.date)));

function createEmptyAboutItems() {
  return {
    previewItems: Array.from({ length: 4 }, () => ({
      name: emptyAboutTitle,
      description: emptyAboutDescription,
      comment: emptyAboutComment,
      cover: "",
      coverLabel: emptyAboutCoverLabel
    })),
    detailItems: [{
      name: emptyAboutTitle,
      description: emptyAboutDescription,
      comment: emptyAboutComment,
      cover: "",
      coverLabel: emptyAboutCoverLabel
    }]
  };
}

function getAboutItemsForSection(sectionId) {
  const dynamicItems = normalizedAboutBlogEntries
    .filter((entry) => entry.aboutSection === sectionId)
    .slice(0, 4);

  if (dynamicItems.length) {
    return {
      previewItems: dynamicItems,
      detailItems: dynamicItems
    };
  }

  return createEmptyAboutItems();
}

function buildAboutCoverButton(item) {
  const hasCover = Boolean(normalizeAboutText(item.cover));
  const label = escapeHtml(item.coverLabel || item.name || emptyAboutCoverLabel);
  const lightboxTitle = escapeHtml(item.name || emptyAboutTitle);
  const lightboxImage = hasCover ? ` data-lightbox-image="${escapeHtml(item.cover)}"` : "";
  const className = hasCover ? "about-detail-media has-cover" : "about-detail-media is-placeholder";
  const style = hasCover
    ? ` style="background-image: linear-gradient(180deg, transparent 18%, rgba(9, 10, 12, 0.72)), url('${escapeHtml(item.cover)}');"`
    : "";

  return `
    <button class="${className}" type="button" data-lightbox-title="${lightboxTitle}"${lightboxImage}${style}>
      <span>${label}</span>
    </button>
  `;
}

function renderBlogLinkedAboutSections(sections) {
  const grid = document.querySelector(".about-grid");
  if (!grid) return;

  grid.innerHTML = sections.map((section) => {
    const { previewItems, detailItems } = getAboutItemsForSection(section.id);
    const title = `${escapeHtml(section.titleEn)} / ${escapeHtml(section.titleCn)}`;
    const itemList = detailItems.map((item) => `
      <li><span class="about-item-name">${escapeHtml(item.name)}</span>：${escapeHtml(item.description)}</li>
    `).join("");
    const coverGrid = previewItems.map(buildAboutCoverButton).join("");
    const detailList = detailItems.map((item) => `
      <li>
        <h4>${escapeHtml(item.name)}</h4>
        <p>${escapeHtml(item.description)}</p>
        <p class="about-comment">我的评价：${escapeHtml(item.comment || emptyAboutComment)}</p>
      </li>
    `).join("");

    return `
      <article class="about-card" data-section="${escapeHtml(section.id)}">
        <h3>${title}</h3>
        <p class="about-card-summary">${escapeHtml(section.summary)}</p>
        <ol class="about-items">${itemList}</ol>
        <div class="about-detail">
          <div class="about-cover-grid">${coverGrid}</div>
          <strong>${title}</strong>
          <ol class="about-detail-list">${detailList}</ol>
        </div>
      </article>
    `;
  }).join("");

  bindAboutInteractions();
  bindLightboxTriggers();
}

function showAboutLoadError() {
  const grid = document.querySelector(".about-grid");
  if (!grid) return;
  grid.innerHTML = '<p class="about-load-error">About 内容加载失败，稍后再来看看。</p>';
}

function bindAboutInteractions() {
  activeAboutCard = null;
  if (detailCloseTimer) window.clearTimeout(detailCloseTimer);

  document.querySelectorAll(".about-card").forEach((card) => {
    const detail = card.querySelector(".about-detail");

    card.addEventListener("mouseenter", () => openAboutDetail(card));
    card.addEventListener("mouseleave", (event) => {
      if (detail && detail.contains(event.relatedTarget)) return;
      scheduleCloseAboutDetail();
    });

    if (detail) {
      detail.addEventListener("mouseenter", () => openAboutDetail(card));
      detail.addEventListener("mouseleave", (event) => {
        if (card.contains(event.relatedTarget)) return;
        scheduleCloseAboutDetail();
      });
    }
  });
}

function loadAboutSections() {
  const grid = document.querySelector(".about-grid");
  if (grid) {
    grid.innerHTML = '<p class="about-load-error">正在加载 About 内容...</p>';
  }

  fetch(aboutSectionsPath)
    .then((response) => {
      if (!response.ok) throw new Error("About data request failed");
      return response.json();
    })
    .then((sections) => {
      if (!Array.isArray(sections)) throw new Error("About data is not an array");
      renderBlogLinkedAboutSections(sections);
    })
    .catch(showAboutLoadError);
}

const lightbox = document.getElementById("detail-lightbox");
const lightboxPanel = document.getElementById("detail-lightbox-panel");
const lightboxClose = document.querySelector(".detail-lightbox-close");

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

function bindLightboxTriggers() {
  document.querySelectorAll(".about-detail-media").forEach((button) => {
    button.addEventListener("click", () => {
      if (!lightbox || !lightboxPanel) return;
      const imageSrc = button.dataset.lightboxImage;
      const imageAlt = button.dataset.lightboxTitle || button.textContent;
      if (imageSrc) {
        lightboxPanel.innerHTML = `<img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}">`;
      } else {
        lightboxPanel.textContent = imageAlt;
      }
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

loadAboutSections();

function formatVisitDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function readVisitDates() {
  try {
    return JSON.parse(localStorage.getItem(visitCalendarKey)) || [];
  } catch {
    return [];
  }
}

function saveTodayVisit() {
  const today = formatVisitDate(new Date());
  const visits = new Set(readVisitDates());
  visits.add(today);
  localStorage.setItem(visitCalendarKey, JSON.stringify([...visits].sort()));
}

let calendarCursor = new Date();
calendarCursor.setDate(1);

function renderVisitCalendar() {
  const titleNode = document.getElementById("calendar-title");
  const daysNode = document.getElementById("calendar-days");
  if (!titleNode || !daysNode) return;

  const visits = new Set(readVisitDates());
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const todayKey = formatVisitDate(new Date());
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const title = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric"
  }).format(calendarCursor);

  titleNode.textContent = title;
  daysNode.innerHTML = "";

  for (let i = 0; i < firstDay; i += 1) {
    const empty = document.createElement("span");
    empty.className = "calendar-day is-muted";
    daysNode.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const key = formatVisitDate(date);
    const node = document.createElement("span");
    node.className = "calendar-day";
    node.textContent = day;
    if (visits.has(key)) node.classList.add("is-visited");
    if (key === todayKey) node.classList.add("is-today");
    daysNode.appendChild(node);
  }
}

const calendarPrev = document.querySelector(".calendar-prev");
const calendarNext = document.querySelector(".calendar-next");

if (calendarPrev) {
  calendarPrev.addEventListener("click", () => {
    calendarCursor.setMonth(calendarCursor.getMonth() - 1);
    renderVisitCalendar();
  });
}

if (calendarNext) {
  calendarNext.addEventListener("click", () => {
    calendarCursor.setMonth(calendarCursor.getMonth() + 1);
    renderVisitCalendar();
  });
}

saveTodayVisit();
renderVisitCalendar();

function updateProfileTime() {
  const timeNode = document.getElementById("profile-time");
  if (!timeNode) return;

  const now = new Date();
  const formatted = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(now);

  timeNode.textContent = `北京时间 ${formatted}`;
  timeNode.setAttribute("datetime", now.toISOString());
}

updateProfileTime();
setInterval(updateProfileTime, 1000);
</script>
