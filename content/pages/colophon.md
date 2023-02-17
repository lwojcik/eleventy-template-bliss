---
title: Colophon
description: This is a collection of various information about this site in case you wanted to ask.
---

This is a collection of various information about this site in case you wanted to ask.

## Content creation / generation

{{ siteConfig.site.title }} is powered [Eleventy](https://www.11ty.dev/) with a bespoke self-built theme. The theme is not available for download but you can [check out the GitHub repo]({{ siteConfig.site.github }}) for its source code.

I write my posts in Markdown. I occasionally use HTML if Markdown fails to offer specific features I need.

## Typography

I use a mix of serif and sans-serif web-safe typefaces available with leading operating systems. I decided against using custom web fonts. Instead, I based my typography choices on popular font families listed on [CSS Font Stack](https://www.cssfontstack.com/), effectively saving myself from the analysis paralysis while browsing custom fonts online.

## Styling

I use SASS / SCSS under the hood. Apart from [normalize.css](https://github.com/necolas/normalize.css) by [Nicolas Gallagher](https://github.com/necolas), there is no third-party code, fancy tooling or CSS framework being used here.

## Accessibility

This site has a modest set of accessibility features:

- semantic HTML is used wherever possible,
- each and every link can be navigated to and activated with keyboard,
- link outline is visible while using keyboard for navigation,
- it's possible to jump straight to content with a special skip-link at the beginning of each page,
- small amount of ARIA attributes is used whenever needed,
- content language is marked with appropriate HTML properties whenever possible.

I tested the site with Apple VoiceOver screen reader on MacOS. I am vaguely familiar with WCAG guidelines but I do not claim compliance or declare any specific accessibility level.

## Code / website hosting / infrastructure

Source code of the site is [available on GitHub]({{ siteConfig.site.github }}).

I use [Netlify](https://netlify.com/) to host the site. I don't use any Netlify-specific features though to avoid vendor lock-in.

The domain is registered via OVH and DNS zone is hosted by Netlify. While I do not consider this setup optimal in case of failure (failure of one party brings two services down at once), having migrated from Cloudflare I am yet to find a decent provider of DNS zone hosting.

Since this site is essentially a set of pre-built text files, this setup allows me to use virtually any hosting provider. If Netlify ever fails on me, I am capable of migrating between providers with very little downtime. I can also downgrade to old-school SFTP-based static hosting.

## Inspiration

The site design was inspired by many other sites on the web. Multiple resources influenced design my decisions behind it. Notable mentions include:

- [eleventy-chirpy-blog-template](https://github.com/muenzpraeger/eleventy-chirpy-blog-template) - I used it on this site before switching to the current. I borrowed a lot of ideas and code snippets from that theme.
- [https://paulmcbride.com/](https://paulmcbride.com/)
- [https://blog.logrocket.com/](https://blog.logrocket.com/)
- [https://anthonyhobday.com/sideprojects/saferules/](https://anthonyhobday.com/sideprojects/saferules/)

## Licensing

Unless specified otherwise, all textual and visual content on the site is licensed as [{{ siteConfig.site.license.name }}]({{ siteConfig.site.license.url }}).

Unless specified otherwise, both code powering the site and code included in its content is [licensed as MIT]({{ siteConfig.site.codeLicense }}).

## Legal

This site is not authored, affiliated or endorsed by any company I may be personally affiliated with (such as my employer).

Any and all opinions listed here are my own and not representative of my employers; future, past and present.

All trademarks, logos and brand names are the property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names,trademarks and brands does not imply endorsement.
