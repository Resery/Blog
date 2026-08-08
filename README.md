# Resery Blog

A minimal bilingual blog built with Astro and based on Dante. English is the default language; Chinese pages live under `/zh/`.

## Writing

English posts go in `src/content/blog/resery/en/` and Chinese posts go in `src/content/blog/resery/zh/`.

Pair translations with the same `translationKey`. Keep filenames unique across languages and use `permalink` for the public URL.

```yaml
---
title: Post title
permalink: post-url
lang: en
translationKey: shared-post-key
excerpt: Short description
publishDate: 2026-08-08
tags: [Notes]
---
```

## Video

MDX posts can import the included components:

```mdx
import Video from '../../../../components/Video.astro';
import Bilibili from '../../../../components/Bilibili.astro';

<Video src="https://example.com/video.mp4" poster="/Blog/images/poster.jpg" />
<Bilibili bvid="BVxxxxxxxx" />
```

## Development

```sh
npm install
npm run dev
npm run build
```

Pushes to `main` are deployed to GitHub Pages automatically.
