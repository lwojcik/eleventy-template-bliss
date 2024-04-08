# Bliss - Blog Theme For Eleventy

**Bliss** is a single-column blog template for [Eleventy static site generator](https://11ty.dev) with strong focus on simplicity without sacrificing functionality.

It is a modified and improved version of the theme running [my personal blog](https://blog.lukaszwojcik.net/).

## Features

- **light / dark mode switcher** + honoring browser color scheme preference
- **sharing buttons for popular social media** (including Mastodon!) + copying post URL to clipboard
- **Mastodon integration:** generating `.well-known/webfinger` file + automatic generation of `<link rel="me">` tags for site ownership verification
- **translation ready** (support for custom language tags + separate file with static phrases)
- **manifest file** for PWA
- **automatic OpenGraph image generation**
- **code syntax highlighting** with PrismJS using [Eleventy syntax highlighting plugin](https://www.11ty.dev/docs/plugins/syntaxhighlight/)
- **HTML, JS, JSON, CSS** optimizations
- **RSS, JSON, Twtxt.txt** feeds + JSON-LD data
- **accessibility** features
- **HSL color palette** and CSS variables for straightforward personalization
- modular CSS augmented with SASS
- custom disclaimers alongside post content
- and more

## Live demo

https://eleventy-bliss.lkmt.us/

## Setup

```bash
git clone https://github.com/lwojcik/eleventy-template-bliss
cd eleventy-template-bliss
npm install
npm run dev # to launch the project for modifications
npm run build # to build production version
```

## Instant deploy

Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lwojcik/eleventy-template-bliss)

Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lwojcik/eleventy-template-bliss)

Render:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/lwojcik/eleventy-template-bliss)

## Deploy to GitHub Pages

Follow the steps below:

1. Fork the repository to your GitHub account.
2. In `package.json`, find the following line:

```json
{
  "scripts": {
    // ...
    "build-gh-pages": "npm run build:sass; npm run build:eleventy -- --pathprefix=/eleventy-template-bliss/",
    //...
  }
}
```

Replace `eleventy-template-bliss` with the name of your repository.

3. In your repository, make sure GitHub Pages are set up in the _Pages_ tab of your repository settings:
   - **Source** - should be set up to _GitHub Actions_
4. In `Actions > General` section of your repository's settings, under the _Workflow permissions_ sub-section, select `Read and write permissions`
5. Go to `Actions` tabs of your repository. From the list of actions select `Build and deploy to GitHub Pages`
6. Click `Run workflow`.
7. If the workflow runs successfully, your page will be available at `https://yourusername.github.io/your-repo-name`.

By default, the GitHub action workflow for publishing on GitHub Pages is set to be run manually. If you want it to run on each push to `main` branch, open `.github/workflows/build-to-gh-pages.yml` and edit `on` section as follows:

```yaml
on:
  workflow_dispatch: # This enables the action to be launched manually from GitHub Actions tab
  push:
    branches: ['main'] # This makes the action run on each push to main branch
```

## Configuration

See [`siteConfig.js`](./content/_data/siteConfig.js). Inline documentation is available in the file.

## Translation file

See [`phrases.js`](./content/_data/phrases.js) for the list of translatable static phrases.

## Personalization checklist

Non-exhaustive list of steps to make the template **your own**. Some of them are optional, others are highly recommended:

- [ ] Fill in all relevant information in [`siteConfig.js`](./content/_data/siteConfig.js) - site title, description, custom logo, author information, etc.
- [ ] Modify production URL - either by hardcoding it in [`siteConfig.js`](./content/_data/siteConfig.js) or via `process.env.URL` environment variable
- [ ] Replace site logo or remove the existing one to use site title as text in your header
- [ ] Modify color palette to your liking - edit relevant variables in [`_variables.scss`](./src/styles/_variables.scss)
- [ ] If you changed the color palette - modify theme color and background color for PWA manifest - see [`siteConfig.js`](./content/_data/siteConfig.js)
- [ ] If you changed the color palette - modify base color for RSS XSL stylesheet - see [`siteConfig.js`](./content/_data/siteConfig.js)
- [ ] Enable automatic OpenGraph image generation - note that they only work for pages and posts
- [ ] Add your own posts - use the existing placeholder posts as a reference
- [ ] If you use post disclaimers at the beginning of your posts - consider using the built-in disclaimer feature - see [`06-10-sample-post-33-disclaimer.md`](./content/posts/2023/06-10-sample-post-33-disclaimer.md) or [`05-31-sample-post-32-linked-disclaimer.md`](./content/posts/2023/05-31-sample-post-32-linked-disclaimer.md) for reference
- [ ] Add your own pages - use one of the existing placeholder pages as a reference
- [ ] Add / remove meta pages in the footer - see [`siteConfig.js`](./content/_data/siteConfig.js)
- [ ] Replace favicon files (`favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`) with your own
- [ ] Update `manifest.webmanifest` file with data relevant to your site
- [ ] Replace OpenGraph images with ones relevant to your site
- [ ] Decide if you want to use automated OpenGraph image generation + consider modifying their appearance to suit your taste (see `siteConfig.js` for more info)
- [ ] Copy your existing static assets to `assets` folder. Note that the top of `assets` folder corresponds to the _root directory_ of your site (`_site`)
- [ ] Modify anything else you don't like about the theme to match your preferences
- [ ] Enjoy! 😊

## Optional customizations

### Make titles optional + use file slugs for permalinks

By default, the template assumes each post and each page to have a title and generates a permalink out using a `slugify` function. In other words, it converts `A title like this!` into `a-title-like-this`.

If you want your posts to have no title, open `content/posts/posts.json` file and modify the following line:

```json
  "permalink": "{% if customPermalink %}{{ customPermalink }}{% else %}/{{ title | slugify }}/{% endif %}",
```

into the following:

```json
  "permalink": "{% if customPermalink %}{{ customPermalink }}{% else %}/{{ page.fileSlug }}/{% endif %}",
```

You can do the same for pages by modifying `content/pages/pages.json` file.

### Automatic favicon generation

Until version 2.4.0 Bliss was bundled with a [favicon generation plugin](https://www.npmjs.com/package/eleventy-plugin-gen-favicons). Due to unresolved bugs this plugin is no longer included with the template.

If you want to reimplement it yourself, change history from [this pull request](https://github.com/lwojcik/eleventy-template-bliss/pull/99) may be helpful.

## Contributions

Contributions of the following kind are welcome:

- bug reports / fixes
- documentation improvements
- improvements of existing features

I consider the project complete and apart from specific exceptions, no new features are planned.

Before contributing be sure to read [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

Licensed under the [MIT license](./LICENSE).
