---
layout: home
title: 电子蜗居
---

<link rel="stylesheet" href="assets/pet-cat.css">
<link rel="stylesheet" href="assets/music-player.css">

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

.hero-panel {
  position: absolute;
  top: 92px;
  z-index: 2;
  width: 300px;
  transition: width 220ms ease, transform 220ms ease, opacity 180ms ease;
}

.hero-panel--left {
  left: max(22px, calc((100vw - 1700px) / 2 + 20px));
}

.hero-panel--right {
  right: max(22px, calc((100vw - 1700px) / 2 + 20px));
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
  width: 100%;
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
  width: 100%;
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

.panel-shell {
  overflow: hidden;
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.panel-title {
  min-width: 0;
}

.panel-title h2,
.panel-title strong {
  margin: 0;
  color: #fff;
  font-size: 1.05rem;
}

.panel-title span {
  display: block;
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.76rem;
  letter-spacing: 0.10em;
}

.panel-toggle {
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  font-size: 0;
  line-height: 1;
}

.panel-toggle::before {
  content: "−";
  font-size: 1.1rem;
  font-weight: 700;
}

.panel-body {
  margin-top: 18px;
}

.hero-panel.is-collapsed {
  width: 58px;
}

.hero-panel.is-collapsed .panel-shell {
  padding: 16px 10px;
}

.hero-panel.is-collapsed .panel-title,
.hero-panel.is-collapsed .panel-body,
.hero-panel.is-collapsed .daily-board::before {
  display: none;
}

.hero-panel.is-collapsed .panel-head {
  justify-content: center;
}

.hero-panel.is-collapsed .panel-toggle {
  width: 38px;
  height: 116px;
  padding: 10px 0;
}

.hero-panel.is-collapsed .panel-toggle::before {
  content: attr(data-collapsed-label);
  font-size: 0.74rem;
  font-weight: 600;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 0.18em;
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
  cursor: default;
}

.about-detail-media:disabled {
  opacity: 0.88;
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

.about-blog-link {
  display: inline-flex;
  align-items: center;
  margin-top: 4px;
  color: #ffe0a3;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
}

.about-blog-link:hover {
  color: #fff1ca;
}

.about-load-error {
  padding: 28px;
  color: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.13);
  background: rgba(9, 10, 12, 0.34);
}

.update-board {
  margin-top: 42px;
  padding: 28px 30px 26px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.025)),
    rgba(9, 10, 12, 0.34);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(14px);
}

.update-board__button {
  width: 100%;
  padding: 0;
  color: inherit;
  text-align: left;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.update-board__head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.update-board__title {
  margin: 0;
  color: #fff;
  font-size: 1.2rem;
}

.update-board__copy {
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.7;
}

.update-board__toggle {
  min-width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
  font-size: 1rem;
  line-height: 1;
}

.update-board__grid {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(7, 11px);
  grid-auto-columns: 11px;
  gap: 4px;
  align-items: center;
  min-height: 101px;
  padding: 2px 0;
  overflow-x: auto;
}

.update-board__cell {
  width: 11px;
  height: 11px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.10);
}

.update-board__cell.is-active {
  background: #ff4d5c;
  box-shadow: 0 0 0 1px rgba(255, 77, 92, 0.16);
  cursor: pointer;
  transition: transform 140ms ease, box-shadow 140ms ease, background 140ms ease;
}

.update-board__cell.is-active:hover,
.update-board__cell.is-active:focus-visible {
  background: #ff6673;
  box-shadow: 0 0 0 1px rgba(255, 102, 115, 0.22);
  transform: translateY(-1px);
  outline: none;
}

.update-board__legend {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.56);
  font-size: 0.82rem;
}

.update-board__legend-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.update-board__legend-swatch {
  width: 11px;
  height: 11px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.10);
}

.update-board__legend-swatch.is-active {
  background: #ff4d5c;
}

.update-board__meta {
  margin-left: auto;
  color: rgba(255, 255, 255, 0.48);
}

.update-board__details {
  display: none;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.update-board.is-open .update-board__details {
  display: block;
}

.update-board__list {
  display: grid;
  gap: 14px;
}

.update-board__pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 18px;
}

.update-board__page-button {
  min-width: 92px;
  height: 38px;
  padding: 0 14px;
  color: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: color 160ms ease, border-color 160ms ease, background 160ms ease;
}

.update-board__page-button:hover:not(:disabled) {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.10);
}

.update-board__page-button:disabled {
  color: rgba(255, 255, 255, 0.32);
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.025);
}

.update-board__page-indicator {
  color: rgba(255, 255, 255, 0.56);
  font-size: 0.84rem;
  letter-spacing: 0.08em;
}

.update-board__entry {
  display: grid;
  gap: 6px;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.035);
}

.update-board__entry.is-highlighted {
  border-color: rgba(255, 128, 138, 0.42);
  background:
    linear-gradient(180deg, rgba(255, 92, 107, 0.12), rgba(255, 255, 255, 0.04)),
    rgba(255, 255, 255, 0.04);
  box-shadow: 0 0 0 1px rgba(255, 92, 107, 0.14);
}

.update-board__entry time {
  color: rgba(255, 255, 255, 0.56);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
}

.update-board__entry p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.75;
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

  .update-board {
    margin-top: 34px;
    padding: 22px 18px;
  }

  .update-board__head {
    display: block;
  }

  .update-board__toggle {
    margin-top: 16px;
  }

  .update-board__meta {
    margin-left: 0;
  }

  .update-board__pagination {
    justify-content: space-between;
    gap: 8px;
  }

  .update-board__page-button {
    min-width: 0;
    flex: 1 1 0;
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

  .hero-panel {
    top: 92px;
    width: 220px;
  }

  .hero-panel--right {
    right: 14px;
    left: auto;
  }

  .hero-panel--left {
    left: 14px;
    right: auto;
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

  .hero-panel {
    top: 92px;
    width: 260px;
  }

  .update-board {
    padding: 24px;
  }

  .hero-panel--right {
    right: 24px;
    left: auto;
  }

  .hero-panel--left {
    left: 24px;
    right: auto;
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
        </div>
      </div>
    </aside>

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
        <a href="https://www.xiaohongshu.com/user/profile/62e6a1d1000000001f016185">
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
            <li>明明是黑板，内容却要在.md文件中修改，看起来真的很诡异，也许应该做一个在线修改的功能。</li>
          </ul>
        </div>
      </div>
    </aside>
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
          <p><a href="https://www.xiaohongshu.com/user/profile/62e6a1d1000000001f016185">去小红书主页看看</a></p>
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

    <section class="update-board" id="update-board" aria-label="主页更新记录">
      <div class="update-board__button" id="update-board-toggle" role="button" tabindex="0" aria-expanded="false" aria-controls="update-board-details">
        <div class="update-board__head">
          <div>
            <h2 class="update-board__title">Recent Updates / 最近更新</h2>
          </div>
          <span class="update-board__toggle" aria-hidden="true">+</span>
        </div>
        <div class="update-board__grid" id="update-board-grid" aria-hidden="true"></div>
        <div class="update-board__legend">
          <span class="update-board__legend-item"><span class="update-board__legend-swatch"></span>无更新</span>
          <span class="update-board__legend-item"><span class="update-board__legend-swatch is-active"></span>有更新</span>
          <span class="update-board__meta" id="update-board-meta">正在整理更新记录...</span>
        </div>
      </div>
      <div class="update-board__details" id="update-board-details">
        <div class="update-board__list" id="update-board-list"></div>
        <div class="update-board__pagination" id="update-board-pagination"></div>
      </div>
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

<div id="music-player" aria-label="首页音乐播放器"></div>

<div class="detail-lightbox" id="detail-lightbox" aria-hidden="true">
    <button class="detail-lightbox-close" type="button" aria-label="关闭大图">×</button>
    <div class="detail-lightbox-panel" id="detail-lightbox-panel">IMAGE / NOTE</div>
  </div>

<script>
let activeAboutCard = null;
let detailCloseTimer = null;
const aboutSectionsPath = "assets/about-sections.json";
const visitCalendarKey = "greenflower-homepage-visits";
const dailyBoardPath = "assets/daily-board.json";
const playlistPath = "assets/playlist.json";
const studyListPath = "assets/study-list.json";
const readListPath = "assets/read-list.json";
const watchListPath = "assets/watch-list.json";
const panelStateKeyPrefix = "hero-panel:";
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
const homepageUpdateNotes = [
{% assign homepage_updates = site.updates | sort: "date" | reverse %}
{% for update in homepage_updates %}
  {
    date: {{ update.date | date: "%Y-%m-%d" | jsonify }},
    summary: {{ update.summary | default: "" | jsonify }}
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
    const detailList = items.map((item) => {
      const commentText = normalizeAboutText(item.comment);
      return `
      <li>
        <h4>${escapeHtml(item.name)}</h4>
        <p>${escapeHtml(item.description)}</p>
        <p class="about-comment">我的评价：${escapeHtml(commentText)}</p>
      </li>
    `;
    }).join("");

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
    coverLabel: title,
    blogUrl: normalizeAboutText(entry.id) ? `blog.html#${encodeURIComponent(normalizeAboutText(entry.id))}` : ""
  };
}

const normalizedAboutBlogEntries = aboutBlogEntries
  .map(normalizeAboutBlogEntry)
  .filter(Boolean)
  .sort((left, right) => String(right.date).localeCompare(String(left.date)));

let normalizedStudyEntries = [];
let normalizedReadEntries = [];
let normalizedWatchEntries = [];
let normalizedPlaylistEntries = [];
const normalizedHomepageUpdateNotes = homepageUpdateNotes
  .map((entry) => ({
    date: normalizeAboutText(entry.date),
    summary: normalizeAboutText(entry.summary)
  }))
  .filter((entry) => /^\d{4}-\d{2}-\d{2}$/.test(entry.date));

function normalizeUpdateDate(value) {
  const text = normalizeAboutText(value);
  return /^\d{4}-\d{2}-\d{2}$/.test(text) ? text : "";
}

function formatUpdateDateLabel(value) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function createHomepageUpdateMap(playlist) {
  const updatesByDate = new Map();

  function ensureEntry(date) {
    if (!date) return null;
    if (!updatesByDate.has(date)) {
      updatesByDate.set(date, {
        date,
        hasUpdate: false,
        summary: "",
        sources: {
          blog: false,
          music: false,
          manual: false
        }
      });
    }
    return updatesByDate.get(date);
  }

  aboutBlogEntries.forEach((entry) => {
    const date = normalizeUpdateDate(entry.date);
    if (!date) return;
    const target = ensureEntry(date);
    if (!target) return;
    target.hasUpdate = true;
    target.sources.blog = true;
  });

  if (Array.isArray(playlist)) {
    playlist.forEach((track) => {
      const date = normalizeUpdateDate(track?.addedDate);
      if (!date) return;
      const target = ensureEntry(date);
      if (!target) return;
      target.hasUpdate = true;
      target.sources.music = true;
    });
  }

  normalizedHomepageUpdateNotes.forEach((entry) => {
    const date = normalizeUpdateDate(entry.date);
    if (!date) return;
    const target = ensureEntry(date);
    if (!target) return;
    target.sources.manual = true;
    if (entry.summary) {
      target.summary = entry.summary;
    }
  });

  return [...updatesByDate.values()]
    .filter((entry) => entry.hasUpdate || entry.sources.manual)
    .map((entry) => ({
      ...entry,
      summary: entry.summary || "更新了内容"
    }))
    .sort((left, right) => String(right.date).localeCompare(String(left.date)));
}

function renderUpdateBoard(playlist) {
  const board = document.getElementById("update-board");
  const grid = document.getElementById("update-board-grid");
  const list = document.getElementById("update-board-list");
  const pagination = document.getElementById("update-board-pagination");
  const meta = document.getElementById("update-board-meta");
  const toggle = document.getElementById("update-board-toggle");
  const toggleIcon = board?.querySelector(".update-board__toggle");
  if (!board || !grid || !list || !pagination || !meta || !toggle || !toggleIcon) return;

  const allUpdates = createHomepageUpdateMap(playlist);
  const pageSize = 5;
  let currentUpdatePage = 1;
  let highlightedUpdateDate = "";
  const totalPages = Math.max(1, Math.ceil(allUpdates.length / pageSize));
  const pageByDate = new Map(
    allUpdates.map((entry, index) => [entry.date, Math.floor(index / pageSize) + 1])
  );
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setDate(start.getDate() - 364);
  const heatmapStartKey = formatVisitDate(start);
  const updateDateSet = new Set(
    allUpdates
      .filter((entry) => entry.date >= heatmapStartKey)
      .map((entry) => entry.date)
  );

  function setExpanded(expanded) {
    board.classList.toggle("is-open", expanded);
    toggle.setAttribute("aria-expanded", String(expanded));
    toggleIcon.textContent = expanded ? "−" : "+";
  }

  function renderCurrentPage() {
    const safePage = Math.min(Math.max(currentUpdatePage, 1), totalPages);
    currentUpdatePage = safePage;
    const startIndex = (safePage - 1) * pageSize;
    const pageItems = allUpdates.slice(startIndex, startIndex + pageSize);

    list.innerHTML = pageItems.length
      ? pageItems.map((entry) => `
          <article class="update-board__entry${entry.date === highlightedUpdateDate ? " is-highlighted" : ""}" data-update-date="${escapeHtml(entry.date)}">
            <time datetime="${escapeHtml(entry.date)}">${escapeHtml(formatUpdateDateLabel(entry.date))}</time>
            <p>${escapeHtml(entry.summary)}</p>
          </article>
        `).join("")
      : '<article class="update-board__entry"><p>最近还没有可显示的更新记录。</p></article>';

    if (allUpdates.length <= pageSize) {
      pagination.innerHTML = "";
      return;
    }

    pagination.innerHTML = `
      <button class="update-board__page-button" type="button" data-page-action="prev" ${safePage === 1 ? "disabled" : ""}>上一页</button>
      <span class="update-board__page-indicator">第 ${safePage} / ${totalPages} 页</span>
      <button class="update-board__page-button" type="button" data-page-action="next" ${safePage === totalPages ? "disabled" : ""}>下一页</button>
    `;

    pagination.querySelectorAll("[data-page-action]").forEach((button) => {
      button.addEventListener("click", () => {
        highlightedUpdateDate = "";
        currentUpdatePage += button.dataset.pageAction === "prev" ? -1 : 1;
        renderCurrentPage();
      });
    });
  }

  grid.innerHTML = "";
  for (let offset = 0; offset < 365; offset += 1) {
    const date = new Date(start);
    date.setDate(start.getDate() + offset);
    const key = formatVisitDate(date);
    const isActive = updateDateSet.has(key);
    const cell = document.createElement(isActive ? "button" : "span");
    cell.className = "update-board__cell";
    if (isActive) {
      cell.classList.add("is-active");
      cell.type = "button";
      cell.dataset.date = key;
      cell.dataset.page = String(pageByDate.get(key) || 1);
      cell.setAttribute("aria-label", `${key} 有更新`);
      cell.addEventListener("click", (event) => {
        event.stopPropagation();
        highlightedUpdateDate = key;
        currentUpdatePage = pageByDate.get(key) || 1;
        setExpanded(true);
        renderCurrentPage();
      });
    }
    cell.setAttribute("title", key);
    grid.appendChild(cell);
  }

  meta.textContent = `近 365 天高亮 ${updateDateSet.size} 天 / 历史共 ${allUpdates.length} 条`;
  renderCurrentPage();

  if (!toggle.dataset.bound) {
    const handleToggle = () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      setExpanded(!expanded);
    };

    toggle.addEventListener("click", handleToggle);
    toggle.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      handleToggle();
    });
    toggle.dataset.bound = "true";
  }
}

function normalizeOrderedAboutEntry(entry, aboutSection) {
  const id = normalizeAboutText(entry.id);
  const title = normalizeAboutText(entry.title);
  if (!id || !title) return null;
  const blogEntryId = normalizeAboutText(entry.blogEntryId);
  const description = [normalizeAboutText(entry.description), normalizeAboutText(entry.artist), normalizeAboutText(entry.duration)]
    .filter(Boolean)
    .join(" / ");

  return {
    id,
    order: Number(entry.order),
    blogEntryId,
    aboutSection,
    name: title,
    description,
    comment: normalizeAboutText(entry.comment),
    cover: normalizeAboutText(entry.coverSrc),
    coverLabel: normalizeAboutText(entry.coverLabel) || title,
    blogUrl: blogEntryId ? `blog.html#${encodeURIComponent(blogEntryId)}` : ""
  };
}

function normalizeStudyEntry(entry) {
  return normalizeOrderedAboutEntry(entry, "study");
}

function normalizeReadEntry(entry) {
  return normalizeOrderedAboutEntry(entry, "read");
}

function normalizeWatchEntry(entry) {
  return normalizeOrderedAboutEntry(entry, "watch");
}

function normalizePlaylistEntry(entry) {
  const normalized = normalizeOrderedAboutEntry(entry, "listen");
  if (!normalized) return null;
  return {
    ...normalized,
    comment: normalized.comment || "和首页左下角播放器共用同一份歌单数据。"
  };
}

function normalizeEntryOrder(entry) {
  const value = Number(entry.order);
  return Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
}

function sortEntriesByOrder(entries) {
  return entries.slice().sort((left, right) => normalizeEntryOrder(left) - normalizeEntryOrder(right));
}

function createEmptyAboutItems() {
  return {
    previewItems: Array.from({ length: 4 }, () => ({
      name: emptyAboutTitle,
      description: emptyAboutDescription,
      comment: emptyAboutComment,
      cover: "",
      coverLabel: emptyAboutCoverLabel,
      blogUrl: ""
    })),
    detailItems: [{
      name: emptyAboutTitle,
      description: emptyAboutDescription,
      comment: emptyAboutComment,
      cover: "",
      coverLabel: emptyAboutCoverLabel,
      blogUrl: ""
    }]
  };
}

function createPlaceholderPreviewItems(count) {
  return Array.from({ length: count }, () => ({
    name: emptyAboutTitle,
    description: emptyAboutDescription,
    comment: emptyAboutComment,
    cover: "",
    coverLabel: emptyAboutCoverLabel,
    blogUrl: ""
  }));
}

function getAboutItemsForSection(sectionId) {
  const jsonBackedSections = {
    study: normalizedStudyEntries,
    read: normalizedReadEntries,
    watch: normalizedWatchEntries,
    listen: normalizedPlaylistEntries
  };
  const sourceEntries = jsonBackedSections[sectionId] || normalizedAboutBlogEntries;

  const allItems = sourceEntries.filter((entry) => entry.aboutSection === sectionId);

  if (allItems.length) {
    const previewItems = allItems.slice(0, 4);
    const placeholderCount = Math.max(0, 4 - previewItems.length);
    return {
      previewItems: previewItems.concat(createPlaceholderPreviewItems(placeholderCount)),
      detailItems: allItems
    };
  }

  return createEmptyAboutItems();
}

function buildAboutCoverButton(item) {
  const hasCover = Boolean(normalizeAboutText(item.cover));
  const hasBlogUrl = Boolean(normalizeAboutText(item.blogUrl));
  const label = escapeHtml(item.coverLabel || item.name || emptyAboutCoverLabel);
  const lightboxTitle = escapeHtml(item.name || emptyAboutTitle);
  const lightboxImage = hasCover ? ` data-lightbox-image="${escapeHtml(item.cover)}"` : "";
  const className = hasCover ? "about-detail-media has-cover" : "about-detail-media is-placeholder";
  const style = hasCover
    ? ` style="background-image: linear-gradient(180deg, transparent 18%, rgba(9, 10, 12, 0.72)), url('${escapeHtml(item.cover)}');"`
    : "";
  const disabledMarkup = hasBlogUrl || hasCover ? "" : " disabled aria-disabled=\"true\"";

  return `
    <button class="${className}" type="button" data-lightbox-title="${lightboxTitle}"${lightboxImage}${style}${disabledMarkup}>
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
    const detailList = detailItems.map((item) => {
      const commentText = normalizeAboutText(item.comment);
      return `
      <li>
        <h4>${escapeHtml(item.name)}</h4>
        <p>${escapeHtml(item.description)}</p>
        <p class="about-comment">我的评价：${escapeHtml(commentText)}</p>
        ${item.blogUrl ? `<a class="about-blog-link" href="${escapeHtml(item.blogUrl)}">前往这篇 Blog</a>` : ""}
      </li>
    `;
    }).join("");

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

  function fetchJsonList(path) {
    return fetch(path).then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${path}`);
      return response.json();
    }).catch(() => []);
  }

  Promise.all([
    fetch(aboutSectionsPath).then((response) => {
      if (!response.ok) throw new Error("About data request failed");
      return response.json();
    }),
    fetchJsonList(studyListPath),
    fetchJsonList(readListPath),
    fetchJsonList(watchListPath),
    fetchJsonList(playlistPath)
  ])
    .then(([sections, studyList, readList, watchList, playlist]) => {
      if (!Array.isArray(sections)) throw new Error("About data is not an array");
      normalizedStudyEntries = Array.isArray(studyList)
        ? sortEntriesByOrder(studyList.map(normalizeStudyEntry).filter(Boolean))
        : [];
      normalizedReadEntries = Array.isArray(readList)
        ? sortEntriesByOrder(readList.map(normalizeReadEntry).filter(Boolean))
        : [];
      normalizedWatchEntries = Array.isArray(watchList)
        ? sortEntriesByOrder(watchList.map(normalizeWatchEntry).filter(Boolean))
        : [];
      normalizedPlaylistEntries = Array.isArray(playlist)
        ? sortEntriesByOrder(playlist.map(normalizePlaylistEntry).filter(Boolean))
        : [];
      renderUpdateBoard(Array.isArray(playlist) ? playlist : []);
      renderBlogLinkedAboutSections(sections);
    })
    .catch(() => {
      renderUpdateBoard([]);
      showAboutLoadError();
    });
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

function renderDailyBoard(boardData) {
  const boardNode = document.querySelector(".daily-board");
  if (!boardNode || !boardData || typeof boardData !== "object") return;

  const items = Array.isArray(boardData.items)
    ? boardData.items.map((item) => String(item ?? "").trim()).filter(Boolean)
    : [];

  const timeNode = boardNode.querySelector("time");
  const listNode = boardNode.querySelector("ul");

  if (timeNode && boardData.label) {
    timeNode.textContent = String(boardData.label);
  }

  if (listNode && items.length) {
    listNode.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }
}

function loadDailyBoard() {
  fetch(dailyBoardPath)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load daily board");
      return response.json();
    })
    .then((data) => {
      renderDailyBoard(data);
    })
    .catch(() => {
      // Keep inline markup as a fallback if the JSON cannot be loaded.
    });
}

function restorePanelState(panelName, fallbackExpanded = true) {
  try {
    const value = localStorage.getItem(`${panelStateKeyPrefix}${panelName}`);
    if (value === "collapsed") return false;
    if (value === "expanded") return true;
  } catch {}
  return fallbackExpanded;
}

function savePanelState(panelName, expanded) {
  try {
    localStorage.setItem(`${panelStateKeyPrefix}${panelName}`, expanded ? "expanded" : "collapsed");
  } catch {}
}

function syncPanelState(panel, expanded) {
  if (!panel) return;
  panel.classList.toggle("is-collapsed", !expanded);
  const toggle = panel.querySelector(".panel-toggle");
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(expanded));
    const expandedLabel = toggle.dataset.expandedLabel || "收起面板";
    const hiddenLabel = toggle.dataset.hiddenLabel || "展开面板";
    const activeLabel = expanded ? expandedLabel : hiddenLabel;
    toggle.setAttribute("aria-label", activeLabel);
    toggle.setAttribute("title", activeLabel);
  }
}

function initHeroPanel(panelName, selector) {
  const panel = document.querySelector(selector);
  if (!panel) return;

  let expanded = restorePanelState(panelName, true);
  syncPanelState(panel, expanded);

  const toggle = panel.querySelector(".panel-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    expanded = !expanded;
    syncPanelState(panel, expanded);
    savePanelState(panelName, expanded);
  });
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
loadDailyBoard();

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
initHeroPanel("calendar", ".hero-panel--left");
initHeroPanel("board", ".hero-panel--right");
setInterval(updateProfileTime, 1000);
</script>
<script src="assets/music-player.js"></script>
<script src="assets/pet-cat.js"></script>
