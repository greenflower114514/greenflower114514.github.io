---
layout: home
title: 个人主页
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
  width: min(1180px, calc(100% - 64px));
  margin: 0 auto;
  padding: 46px 0 124px;
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
  gap: 26px;
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
  min-height: 220px;
  padding: 34px 38px;
  overflow: visible;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.about-card:hover {
  transform: translateX(6px);
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
  max-width: 58%;
}

.about-detail {
  position: absolute;
  top: 24px;
  right: 24px;
  bottom: 24px;
  width: min(420px, 36%);
  padding: 22px;
  opacity: 0;
  transform: translateX(18px);
  color: rgba(255, 255, 255, 0.74);
  border-left: 1px solid rgba(255, 255, 255, 0.14);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.025)),
    rgba(255, 255, 255, 0.03);
  pointer-events: none;
  transition: opacity 180ms ease, transform 180ms ease;
}

.about-card:hover .about-detail {
  opacity: 1;
  transform: translateX(0);
}

.about-detail strong {
  display: block;
  margin-bottom: 10px;
  color: #fff;
}

.about-detail p {
  margin: 0;
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
    margin-top: 18px;
    padding: 16px 0 0;
    opacity: 1;
    transform: none;
    border-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    background: transparent;
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
    <h2 class="about-title">这里暂时收留一些代码、想法和奇怪的自我介绍。</h2>
    <p class="about-intro">这不是一份正经到会自己打领带的简历，更像是一个慢慢装修中的个人空间。会放一点学习记录，一点项目折腾，一点日常碎片，以及一些“以后一定会填坑”的郑重承诺。</p>

    <section class="about-grid" aria-label="关于我的卡片">
      <article class="about-card">
        <h3>关于我</h3>
        <p>你好，我是干煸双鲜。这里是我的 GitHub 个人主页，也是一个用来展示近况、记录想法、顺便证明我确实在努力的地方。</p>
        <div class="about-detail">
          <strong>更多一点</strong>
          <p>这个主页会慢慢变成一个个人档案馆：有学习痕迹，有奇怪想法，也会有一些阶段性成果。不是一次装修完，而是边走边补。</p>
        </div>
      </article>

      <article class="about-card">
        <h3>当前状态</h3>
        <p>正在把个人主页从“能看”慢慢改造成“有点东西”。学习、项目、表达能力都在施工中，偶尔还会和 CSS 进行友好切磋。</p>
        <div class="about-detail">
          <strong>施工现场</strong>
          <p>当前重点是把页面结构、内容分区和个人表达先搭起来。等地基稳了，再继续补博客、小红书、相册和思考页面。</p>
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
          <strong>风格偏好</strong>
          <p>偏好暗色、克制、有一点神秘感的视觉风格。内容可以认真，但不要太端着，最好能让访客感觉这里确实住着一个人。</p>
        </div>
      </article>

      <article class="about-card">
        <h3>技术方向</h3>
        <p>目前关注编程学习、项目实践、GitHub Pages 和个人站点搭建。技能树还在长，枝杈有点随缘，但根应该是认真在扎。</p>
        <div class="about-detail">
          <strong>正在生长</strong>
          <p>这里之后可以继续扩展为技能地图：前端、图形、工具链、项目经验都能放进来，不急着吹满，先让它真实一点。</p>
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
          <strong>近期目标</strong>
          <p>先把每个导航页面做成可用状态，再逐步补内容。等内容多起来，这里就不只是首页，而是一个真正能回看的个人索引。</p>
        </div>
      </article>

      <article class="about-card">
        <h3>联系入口</h3>
        <p>目前先保留 GitHub 作为公开入口：<a href="https://github.com/greenflower114514">greenflower114514</a>。其他联系方式等我想好怎么优雅出现再说。</p>
        <div class="about-detail">
          <strong>公开入口</strong>
          <p>先用 GitHub 做唯一公开入口，既够用，也不会把私人信息散得到处都是。需要更多联系方式时，再单独设计一个更漂亮的出现方式。</p>
        </div>
      </article>
    </section>

    <section class="about-timeline" aria-label="人生时间线">
      <div class="timeline-heading">
        <h2>Timeline / 人生节点</h2>
        <span>按时间顺序记录一些重要节点</span>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <article class="timeline-card">
            <span class="timeline-year">2023</span>
            <div class="timeline-copy">
              <h3 class="timeline-title">本科入学</h3>
              <p>正式进入新的学习阶段，开始积累专业基础，也开始给未来的自己挖一些看起来很有前途的坑。</p>
            </div>
          </article>
        </li>

        <li class="timeline-item">
          <article class="timeline-card">
            <span class="timeline-year">2026</span>
            <div class="timeline-copy">
              <h3 class="timeline-title">研究生入学</h3>
              <p>计划进入研究生阶段，继续扩展学习和研究方向。这个节点先放在这里，算是给未来提前占个座。</p>
            </div>
          </article>
        </li>
      </ol>
    </section>
  </main>
</div>

<script>
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
