# greenflower114514.github.io

Personal homepage built with GitHub Pages and Jekyll.

## Local preview

1. Install Ruby and Bundler if they are not available yet.
2. Run `bundle install`.
3. Run `bundle exec jekyll serve`.
4. Open `http://127.0.0.1:4000/`.

## Writing blog posts

- Blog posts live in `_blog/`.
- Create one Markdown file per entry, for example `2026-05-27-my-entry.md`.
- Put metadata in front matter: `title`, `date`, `type`, and `excerpt`; gate fields are optional.
- `type` is the category name used by the left sidebar filter in `blog.html`.
- Add `aboutSection` only when the post should also appear in a homepage About card. The card title and description come from `title` and `excerpt`, so they do not need to be repeated.
- Write the body in Markdown so images and layout are easy to preview locally.
- Store blog images under `assets/blog/` and reference them with root-relative paths such as `/assets/blog/2026-05-27-my-entry/photo-01.png`.
- Blog body images can use `png`, `jpg/jpeg`, `webp`, `gif`, or `svg`.

Example:

```md
---
title: 今天的日记
date: 2026-10-09
type: 碎碎念
excerpt: 记录今天的一些想法。
aboutSection: building
---

正文从这里开始。没有 `aboutSection` 的文章仍会显示在 Blog，只是不关联到首页 About 卡片。
```

## Writing thoughts

- Thought entries live in `_thoughts/`, one Markdown file per thought.
- The Thinking page automatically lists them newest first. Each card shows its title, date, and cover; opening a card shows its own detail view.
- Use a `cover` path for a custom background image. If omitted, the homepage hero background is used.
- To place images inside the thought body, save them under `assets/thinking/` and insert a Markdown image at the desired position. Images are responsive and centered in the detail view.
- Use `YYYY-MM-DD-short-title.md` filenames and fill in `title`, `date`, and a short `excerpt`.

```md
---
title: 一个想法
date: 2026-10-09
excerpt: 用一句话概括这条思考。
cover: /assets/thinking/my-thought.svg
---

把思考正文写在这里。支持 Markdown 标题、列表、引用和图片。

这段文字后面显示图片：

![图片说明](/assets/thinking/my-photo.jpg)

图片后面继续写正文。
```

## Gate example

```md
---
title: My gated post
date: 2026-05-27
type: diary
excerpt: A short summary
gateEnabled: true
gateQuestion: What is the answer?
gateAnswer: correct answer
gateHint: Optional hint
gateVersion: 1
---
```

## Main files

- `_config.yml`: Jekyll site config and collections
- `index.md`: homepage
- `blog.md`: blog reader page
- `_blog/`: Markdown source entries for the blog
- `_thoughts/`: Markdown source entries for Thinking
- `thinking.md`: Thinking index and detail view
- `assets/thinking/`: covers for thought entries
- `assets/blog/`: blog images
- `assets/daily-board.json`: shared content for the daily board on every page

## Shared daily board

- Edit `assets/daily-board.json` when you want to update the "今日黑板" content everywhere.
- `label` controls the small line under the title.
- `items` is the shared bullet list shown on `index.html`, `blog.html`, `gallery.html`, `redbook.html`, and `thinking.html`.

Example:

```json
{
  "label": "Today / 正在做",
  "items": [
    "整理新的 blog 分类。",
    "补一篇带图片的日记。",
    "检查 GitHub Pages 展示效果。"
  ]
}
```
