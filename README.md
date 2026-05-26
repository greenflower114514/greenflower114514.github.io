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
- Put metadata in front matter: `title`, `date`, `type`, `excerpt`, and optional gate fields.
- `type` is the category name used by the left sidebar filter in `blog.html`.
- Write the body in Markdown so images and layout are easy to preview locally.
- Store blog images under `assets/blog/` and reference them with root-relative paths such as `/assets/blog/2026-05-27-my-entry/photo-01.png`.
- Blog body images can use `png`, `jpg/jpeg`, `webp`, `gif`, or `svg`.

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
