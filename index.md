---
layout: home
title: 首页
---

<style>
body {
  color: rgba(255, 255, 255, 0.82);
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.12), transparent 28%),
    radial-gradient(circle at 12% 42%, rgba(106, 118, 134, 0.16), transparent 30%),
    linear-gradient(180deg, #111 0%, #1d1f21 48%, #0b0d0f 100%) !important;
}

.site-header,
.site-footer {
  display: none;
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
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 42%),
    radial-gradient(circle at 50% 22%, rgba(255, 255, 255, 0.08), transparent 24%),
    linear-gradient(180deg, #141414 0%, #202224 46%, #0d0f12 100%);
}

.profile-hero {
  padding: 118px 24px 86px;
  text-align: center;
}

.profile-avatar {
  width: 82px;
  height: 82px;
  object-fit: cover;
  border: 4px solid #f2f2f2;
  border-radius: 50%;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.36),
    0 22px 58px rgba(0, 0, 0, 0.42);
}

.profile-title {
  margin: 18px 0 8px;
  color: #fff;
  font-size: 2.35rem;
  font-weight: 800;
  line-height: 1.15;
  text-align: center;
}

.profile-subtitle {
  margin: 0 auto 20px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.95rem;
  letter-spacing: 0.18em;
  text-align: center;
}

.profile-divider {
  width: min(480px, 88vw);
  height: 1px;
  margin: 0 auto 38px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.26), transparent);
}

.profile-nav {
  display: grid;
  grid-template-columns: repeat(5, minmax(72px, 1fr));
  width: min(520px, 92vw);
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
}

.profile-nav a {
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  border-left: 1px solid rgba(255, 255, 255, 0.14);
  transition: color 160ms ease, background 160ms ease;
}

.profile-nav a:last-child {
  border-right: 1px solid rgba(255, 255, 255, 0.14);
}

.profile-nav a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.07);
}

.profile-nav-icon {
  font-size: 1.15rem;
  line-height: 1;
}

.profile-nav-label {
  font-size: 0.92rem;
}

.profile-content {
  width: min(760px, calc(100% - 40px));
  margin: 0 auto;
  padding: 0 0 96px;
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
  .profile-hero {
    padding: 78px 16px 60px;
  }

  .profile-title {
    font-size: 1.9rem;
  }

  .profile-nav {
    grid-template-columns: repeat(5, 1fr);
  }

  .profile-nav a {
    min-height: 66px;
  }

  .profile-nav-label {
    font-size: 0.76rem;
  }
}
</style>

<div class="profile-page">
  <section class="profile-hero">
    <img class="profile-avatar" src="https://avatars.githubusercontent.com/u/93895894?v=4" alt="干煸双鲜的头像">
    <h1 class="profile-title">干煸双鲜</h1>
    <p class="profile-subtitle">·谁能送我只猫啊·</p>
    <div class="profile-divider"></div>
    <nav class="profile-nav" aria-label="个人主页导航">
      <a href="#blog"><span class="profile-nav-icon">✎</span><span class="profile-nav-label">Blog</span></a>
      <a href="#about"><span class="profile-nav-icon">⌁</span><span class="profile-nav-label">About</span></a>
      <a href="#weibo"><span class="profile-nav-icon">◎</span><span class="profile-nav-label">Weibo</span></a>
      <a href="#gallery"><span class="profile-nav-icon">▣</span><span class="profile-nav-label">Gallery</span></a>
      <a href="#thinking"><span class="profile-nav-icon">☼</span><span class="profile-nav-label">Thinking</span></a>
    </nav>
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

    <h2><span id="weibo">微博</span></h2>

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
