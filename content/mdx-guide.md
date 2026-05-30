# MDX components guide

Quick reference for the custom components usable inside any post in `content/posts/*.mdx`.
Components are defined in `components/`, registered in `lib/mdx-components.tsx`, and
styled in `app/globals.css`. Styling is CRT amber and adapts to the green-phosphor
theme automatically (it reads the `--amber-*` CSS variables).

## Gotcha: props must be strings, not `{expressions}`

This rendering setup (`next-mdx-remote/rsc`) silently drops JSX **expression**
attributes like `n={2}`. They arrive at the component as `undefined` and fall back
to the default. So always pass props as **quoted strings**:

```mdx
<Divider n="2" />     ✅ works
<Divider n={2} />     ❌ silently becomes the default (n=1)
```

Boolean attributes with no value (like `big` on `<Bold>`) are fine.

---

## Bold

Chunky extruded "stamp" text in VT323 (the pixel chrome font). Two modes.

**Inline punch word** (sits in a sentence):

```mdx
calling the model turned out to be <Bold>one line of code</Bold>, basically.
```

**Big display block** (centered, uppercased, opens or closes a section). Add the
`big` flag:

```mdx
<Bold big>which is the whole point</Bold>
```

Notes:
- Inline `<Bold>` scales with surrounding text (1.25em); the big one uses a `clamp()`
  so it shrinks on mobile.
- `big` auto-uppercases via CSS, so write it in normal case.
- Use sparingly. One inline punch per section and at most one big stamp per post.

---

## Divider

Section break for long posts. One prop, `n`, picks the center glyph. Values `"1"`
through `"5"`:

```mdx
<Divider n="3" />
```

| n   | look                        |
|-----|-----------------------------|
| "1" | ◆ diamond                   |
| "2" | ● filled dot                |
| "3" | │ │ │ cassette ridge        |
| "4" | ● dot on a dotted rule      |
| "5" | ○ hollow circle             |

Defaults to `"1"` if omitted. Pick one variant and reuse it for consistency, or vary
per break. The ridge (`n="3"`) matches the cassette/tape aesthetic best.

---

## Collapsible

Expandable `<details>` block. Good for asides or long code you want folded by default.

```mdx
<Collapsible title="show the full config">

Any markdown or code goes here, including fenced code blocks.

</Collapsible>
```

Leave a blank line after the opening tag and before the closing tag so the inner
markdown parses.

---

## Standard markdown that also works

- **Tables** render (GitHub-flavored, via remark-gfm). Use the compact `|---|` form.
- **Fenced code blocks** get the CRT theme + a copy button automatically. Ligatures
  are disabled, so literal sequences like `<|im_start|>` or `|>` show as typed.
  Use a language tag (` ```ts `, ` ```text `) for highlighting.
- **`## ` and `### ` headings** get auto-generated anchor links (hover shows a `#`).
- **Links, lists, blockquotes, inline `code`** all styled to match the screen.

## Adding a new component

1. Create it in `components/your-thing.tsx`.
2. Import and add it to the map in `lib/mdx-components.tsx`.
3. Style it in `app/globals.css` using the `--amber-*` variables so it themes correctly.
4. Remember the string-prop rule above when it takes props.
