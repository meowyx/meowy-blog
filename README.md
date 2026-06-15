# personal website

my personal website and blog. I write as I build, mostly Rust, Solana, and web3.
cassette-futurism / amber-CRT look.

## writing a post

drop an `.mdx` file in `content/posts/` (filename = slug). frontmatter:

```yaml
---
title: "post title"
date: 2026-06-15
category: project
tags: [rust, ai]
---
```

JSX works inside posts. for images, drop assets in `public/media/<slug>/` and
reference `/media/<slug>/<file>`.
