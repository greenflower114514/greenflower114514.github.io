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

.profile-status {
  position: relative;
  z-index: 1;
  display: flex;
  width: min(560px, 94vw);
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto 58px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
}

.profile-time {
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(8, 9, 10, 0.30);
  backdrop-filter: blur(14px);
  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.24);
}

.profile-time {
  padding: 0 14px;
  font-variant-numeric: tabular-nums;
}

.profile-hero {
  position: relative;
  min-height: min(680px, 78vh);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 72px 24px 86px;
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
  height: 120px;
  content: "";
  background: linear-gradient(180deg, transparent, #202326 78%);
  pointer-events: none;
}

.profile-hero-inner {
  position: relative;
  z-index: 1;
  width: min(680px, 94vw);
  transform: translateY(-12px);
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
  width: min(760px, calc(100% - 40px));
  margin: 0 auto;
  padding: 58px 0 104px;
}

.profile-content > p:first-child {
  margin-top: 0;
  margin-bottom: 44px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.02rem;
}

.profile-content h2,
.profile-content h3 {
  color: #fff;
}

.profile-content h2 {
  margin-top: 48px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.profile-content h3 {
  margin-top: 28px;
}

.profile-content p,
.profile-content li {
  color: rgba(255, 255, 255, 0.76);
}

.profile-content a {
  color: #d8e2ff;
}

.profile-content hr {
  margin: 48px 0 24px;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}

@media (max-width: 640px) {
  .profile-status {
    width: min(520px, 96vw);
    margin-bottom: 38px;
    font-size: 0.72rem;
  }

  .profile-time {
    min-height: 30px;
    padding: 0 10px;
  }

  .profile-hero {
    min-height: 590px;
    padding: 64px 14px 72px;
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
    padding-top: 42px;
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
    <div class="profile-hero-inner">
      <div class="profile-status" aria-label="页面状态">
        <time class="profile-time" id="profile-time">Loading time...</time>
      </div>

      <img class="profile-avatar" src="https://avatars.githubusercontent.com/u/93895894?v=4" alt="干煸双鲜的头像">
      <h1 class="profile-title">干煸双鲜</h1>
      <p class="profile-subtitle">·谁能送我只猫啊·</p>
      <div class="profile-divider"></div>
      <nav class="profile-nav" aria-label="个人主页导航">
        <a href="#blog">
          <span class="profile-nav-icon">✎</span>
          <span class="profile-nav-en">Blog</span>
          <span class="profile-nav-cn">博客</span>
        </a>
        <a href="#about">
          <span class="profile-nav-icon">⌁</span>
          <span class="profile-nav-en">About</span>
          <span class="profile-nav-cn">关于</span>
        </a>
        <a href="#redbook">
          <span class="profile-nav-icon">◎</span>
          <span class="profile-nav-en">RedBook</span>
          <span class="profile-nav-cn">小红书</span>
        </a>
        <a href="#gallery">
          <span class="profile-nav-icon">▣</span>
          <span class="profile-nav-en">Gallery</span>
          <span class="profile-nav-cn">相册</span>
        </a>
        <a href="#thinking">
          <span class="profile-nav-icon">☼</span>
          <span class="profile-nav-en">Thinking</span>
          <span class="profile-nav-cn">思考</span>
        </a>
      </nav>
    </div>
  </section>

  <main class="profile-content">
    <p>这里是我的个人主页。</p>

    <h2><span id="about">关于我</span></h2>

    <p>你可以在这里写一段简短的自我介绍。</p>

    <h2>我在做什么</h2>

    <ul>
      <li>方向 1</li>
      <li>方向 2</li>
      <li>方向 3</li>
    </ul>

    <h2>项目</h2>

    <h3>项目名称 A</h3>

    <p>用 2 到 4 句话介绍这个项目做了什么、你负责了什么、结果如何。</p>

    <h3>项目名称 B</h3>

    <p>继续用相同格式补充。</p>

    <h2><span id="blog">文章或笔记</span></h2>

    <ul>
      <li><a href="#">文章标题 1</a></li>
      <li><a href="#">文章标题 2</a></li>
    </ul>

    <h2><span id="redbook">小红书</span></h2>

    <p>待补充。</p>

    <h2><span id="gallery">相册</span></h2>

    <p>待补充。</p>

    <h2><span id="thinking">思考</span></h2>

    <p>待补充。</p>

    <h2>联系方式</h2>

    <ul>
      <li>GitHub: <a href="https://github.com/greenflower114514">greenflower114514</a></li>
      <li>Email: your-email@example.com</li>
    </ul>

    <hr>

    <p>这页内容完全用 Markdown 编写。以后你主要修改这个文件就可以了。</p>
  </main>
</div>

<script>
function updateProfileTime() {
  const timeNode = document.getElementById("profile-time");
  if (!timeNode) return;

  const now = new Date();
  const formatted = new Intl.DateTimeFormat("zh-CN", {
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
