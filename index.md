---
layout: home
title: 首页
---

<style>
.profile-hero {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: -32px;
  padding: 120px 24px 92px;
  color: #f7f7f7;
  text-align: center;
  background:
    radial-gradient(circle at 50% 42%, rgba(255, 255, 255, 0.08), transparent 28%),
    linear-gradient(180deg, #111 0%, #202020 48%, #101010 100%);
}

.profile-avatar {
  width: 82px;
  height: 82px;
  object-fit: cover;
  border: 4px solid #f2f2f2;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.35);
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
  background: rgba(255, 255, 255, 0.18);
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
}

.profile-nav a:last-child {
  border-right: 1px solid rgba(255, 255, 255, 0.14);
}

.profile-nav a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

.profile-nav-icon {
  font-size: 1.15rem;
  line-height: 1;
}

.profile-nav-label {
  font-size: 0.92rem;
}

@media (max-width: 640px) {
  .profile-hero {
    padding: 78px 16px 62px;
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

这里是我的个人主页。

## <span id="about">关于我</span>

你可以在这里写一段简短的自我介绍。

## 我在做什么

- 方向 1
- 方向 2
- 方向 3

## 项目

### 项目名称 A

用 2 到 4 句话介绍这个项目做了什么、你负责了什么、结果如何。

### 项目名称 B

继续用相同格式补充。

## <span id="blog">文章或笔记</span>

- [文章标题 1](#)
- [文章标题 2](#)

## <span id="weibo">微博</span>

待补充。

## <span id="gallery">相册</span>

待补充。

## <span id="thinking">思考</span>

待补充。

## 联系方式

- GitHub: [greenflower114514](https://github.com/greenflower114514)
- Email: your-email@example.com

---

这页内容完全用 Markdown 编写。以后你主要修改这个文件就可以了。
