# greenflower114514.github.io

使用 GitHub Pages 和 Jekyll 构建的个人主页。

## 本地预览

1. 安装 Ruby 和 Bundler。
2. 在仓库目录运行 `bundle install` 安装依赖。
3. 运行 `bundle exec jekyll serve` 启动本地预览。
4. 浏览器打开 `http://127.0.0.1:4000/`。

## 撰写博客日记

- 博客文章保存在 `_blog/`，每篇文章单独一个 Markdown 文件，例如 `2026-10-09-my-entry.md`。
- 文件开头的 YAML 区域填写标题 `title`、日期 `date`、分类 `type` 和摘要 `excerpt`。需要答题门时再添加对应字段。
- `type` 是博客页面左侧的分类名称。
- 只有希望文章同时出现在首页 About 卡片时，才填写 `aboutSection`。卡片标题和说明会直接使用文章的标题与摘要，无需重复填写。
- 正文使用 Markdown 编写。文章图片放在 `assets/blog/`，并使用从网站根目录开始的路径引用，例如 `/assets/blog/2026-10-09-my-entry/photo-01.png`。
- 正文图片支持 PNG、JPG/JPEG、WebP、GIF 和 SVG。

示例：

```md
---
title: 今天的日记
date: 2026-10-09
type: 碎碎念
excerpt: 记录今天的一些想法。
aboutSection: building
---

正文从这里开始。不填写 `aboutSection` 的文章仍会显示在博客中，只是不关联到首页 About 卡片。
```

## 撰写思考

- 思考文章保存在 `_thoughts/`，每条思考单独一个 Markdown 文件。
- Thinking 页面会按日期从新到旧自动显示文章卡片。卡片展示标题、日期和背景图；点击卡片可阅读该条思考的详情。
- 文件名建议使用 `年-月-日-简短主题.md`，并填写 `title`、`date` 和简短摘要 `excerpt`。
- 可用 `cover` 指定卡片和详情页顶部的背景图；省略时使用主页默认背景。
- 想在正文中插入图片时，将图片放入 `assets/thinking/`，并在正文对应位置写 Markdown 图片语法。详情页会自适应图片宽度并居中显示。

示例：

```md
---
title: 一个想法
date: 2026-10-09
excerpt: 用一句话概括这条思考。
cover: /assets/thinking/my-thought.svg
---

先写一段正文。

![图片说明](/assets/thinking/my-photo.jpg)

图片后继续写正文。
```

## 答题门字段示例

```md
---
title: 一篇需要答题才能阅读的文章
date: 2026-10-09
type: 碎碎念
excerpt: 一段简短摘要。
gateEnabled: true
gateQuestion: 问题内容
gateAnswer: 正确答案
gateHint: 可选提示
gateVersion: 1
---
```

## 主要文件和目录

- `_config.yml`：Jekyll 站点配置和内容集合配置。
- `index.md`：个人主页首页。
- `blog.md`：博客阅读页面。
- `_blog/`：博客文章 Markdown 文件。
- `_thoughts/`：思考文章 Markdown 文件。
- `thinking.md`：思考列表和详情页面模板。
- `assets/blog/`：博客文章图片。
- `assets/thinking/`：思考卡片背景图和正文图片。
- `assets/daily-board.json`：所有页面共用的“今日黑板”数据。

## 更新今日黑板

编辑 `assets/daily-board.json` 即可更新各页面共用的“今日黑板”。`label` 是标题下方的小字，`items` 是事项列表。

示例：

```json
{
  "label": "今天 / 正在做",
  "items": [
    "整理新的博客分类。",
    "补一篇带图片的日记。",
    "检查 GitHub Pages 展示效果。"
  ]
}
```