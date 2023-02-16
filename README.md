# Portfolio

- [Next.js](https://nextjs.org) + [TypeScript](http://typescriptlang.org) (React front-end framework)
- [Tailwind CSS](https://taiwindcss.com) (Styling library)
- [Vercel](https://vercel.com) (Deployment)
- [Contentlayer](https://www.contentlayer.dev) + [MDX](https://github.com/mdx-js/mdx) (Content Management)

## Project Structure

```
.
├── public
│   └── images
├── src
│   ├── components
│   |   └── ui
│   ├── config
│   |   └── site.ts
│   ├── content
│   │   ├── blog
│   |   └── pages
│   ├── lib
│   |   ├── utils.ts
│   |   └── vscode-theme.json
│   ├── pages
│   │   ├── blog
│   |   |   ├── [slug].tsx
│   │   │   └── index.tsx
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── 404.tsx
│   │   ├── index.tsx
│   │   └── uses.tsx
│   └── styles
│       ├── base.css
│       ├── main.css
│       └── mdx.css
├── contentlayer.config.js
├── next.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── ...
```

| Path                     | Description                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| `public/*`               | Static assets including favicon and images.                                                               |
| `src/components/*`       | Building blocks of the app.                                                                               |
| `src/config/*`           | App configuration.                                                                                        |
| `src/content/*`          | MDX data that is used for blog entries and uses page.                                                     |
| `src/lib/*`              | Short for 'library', a collection of helpful utilities or code for external services.                     |
| `src/pages/blog/*`       | Static pre-rendered blog pages using MDX.                                                                 |
| `src/pages/*`            | All other static pages. More on the pages directory [here](https://nextjs.org/docs/basic-features/pages). |
| `src/styles/*`           | Mostly Talwind CSS styles.                                                                                |
| `contentlayer.config.js` | Configuration file for Contentlayer.js.                                                                   |
| `next.config.mjs`        | [Configuration](https://nextjs.org/docs/api-reference/next.config.js/introduction) file for Next.js.      |
| `tailwind.config.js`     | [Configuration](https://tailwindcss.com/docs/configuration) file for Tailwind CSS.                        |

## Getting Started

```bash
pnpm install
pnpm dev
```
