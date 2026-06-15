# personal website

my personal website with blogs and details. I write as I build.

it's a "personal terminal" with a cassette futurism / amber CRT look: an ASCII
cat, channels, and a tape deck for a chassis. posts are where I work things out
in public, mostly Rust, Solana, web3, and the occasional essay.

## stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- plain CSS in `app/globals.css` (ported from the cassette design comp, no Tailwind in the app)
- MDX via [`next-mdx-remote/rsc`](https://github.com/hashicorp/next-mdx-remote) with `remark-gfm`, `rehype-slug`, and `rehype-pretty-code` (Shiki, custom amber-CRT theme)
- `gray-matter` for frontmatter, `date-fns` for dates
- [Resend](https://resend.com) + [react-email](https://react.email) for the newsletter
- pnpm

## run it

```bash
pnpm install
pnpm dev          # next dev, http://localhost:3000
pnpm build        # production build
pnpm start        # serve the build
pnpm lint         # eslint
pnpm email:dev    # preview email templates
```

the newsletter needs `RESEND_API_KEY` (and the audience id) in `.env.local`.

## layout

```
app/              routes: / (home terminal), /blog/[slug], /about, /media, /meow, /publications
  actions/        server actions (newsletter subscribe)
  globals.css     the whole cassette-futurism stylesheet
components/        chassis, transmissions list, subscribe CRT, copy button, etc.
content/posts/    blog posts as flat .mdx files (slug = filename)
emails/           react-email templates
lib/              posts.ts, mdx.ts, blog-data.ts, publications.ts, site.ts
public/media/     post assets, referenced as /media/<slug>/<file>
```

## writing a post

drop an `.mdx` file in `content/posts/`. the filename becomes the slug
(`/blog/<slug>`). frontmatter:

```yaml
---
title: "post title"
description: "one-line summary for cards + meta"
date: 2026-06-15
category: project        # project | essay | ...
type: posts
tags: [rust, ai]
fav: true                # surface it as a favorite
author: meowy
---
```

JSX works inside posts (`className`, `style={{}}`, raw `<video>` / `<iframe>`).
for images, put assets in `public/media/<slug>/` and reference
`/media/<slug>/<file>`. convert big gifs to mp4 and use
`<video autoPlay loop muted playsInline>`.
