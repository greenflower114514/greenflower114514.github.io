---
title: 带图片的 Blog 示例
date: 2026-05-27
type: 图片测试
excerpt: 这是一篇专门用来预览图片展示效果的示例文章，包含封面图和正文内插图。
cover: /assets/blog/2026-05-27-photo-demo/window-note.svg
aboutSection: study
aboutTitle: 图文写作预览
aboutDescription: 现在文章正文、封面图和摘要都能直接在 Markdown 里一起维护，写起来更顺手。
aboutComment: 把图片和正文放回同一个文件之后，预览效果终于直观很多了。
---

这篇文章是专门放进站点里给你看效果的。现在 blog 已经从 `JSON` 迁到 `Markdown`，所以以后写文章的时候，正文、标题、摘要和图片都可以放在一篇独立的文章文件里处理。

## 现在插图会怎么显示

正文里的图片可以直接用标准 Markdown 语法写进去，比如这样：

```md
![窗边的桌面](/assets/blog/2026-05-27-photo-demo/window-note.svg)
```

渲染出来之后，会和正文一起出现在阅读区域里，不需要再绕回 `JSON` 去拼字段。

![窗边的桌面](/assets/blog/2026-05-27-photo-demo/window-note.svg)

这类写法最适合记录日常、贴截图、放灵感参考图，或者把项目过程图塞进文章里。你之后如果想发一篇更完整的图文 blog，可以继续在正文里穿插多张图片、列表、小标题和强调文字。

## 以后你可以怎么写

- 图片文件放到 `assets/blog/文章目录/`
- 文章文件放到 `_blog/`
- 正文直接写 Markdown

如果你愿意，下一步我还可以继续帮你做一篇“多张图片 + 小标题 + 列表 + 引用块”的更完整示例，让你更接近真实写作场景。
