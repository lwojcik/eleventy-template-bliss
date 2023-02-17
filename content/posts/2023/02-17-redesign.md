---
title: New year, new me, new blog
description: I changed the design of my blog for the third time since its start in 2020.
date: 2023-02-17
tags:
  - meta
  - tech
  - eleventy
  - web development
  - web design
---

I changed the design of my blog for the third time since its start in 2020. In normal circumstances that isn’t that much of a news. However, if a quick and straightforward redesign takes two weeks and generates 80 tasks on the GitHub kanban board, we need to discuss this.

## Where it all started

Until recently, I used [Chirpy Eleventy template](https://github.com/muenzpraeger/eleventy-chirpy-blog-template) by Rene Winkelmeyer. It’s a very aesthetic theme with interesting features. I loved it at the very first sight.

However, one day I woke up and realized this was not the kind of design I liked to see on other blogs.

I like simple, minimalistic designs with solid typography, preferably using a single column to present content. Chirpy, with its wide text column and two sidebars, didn’t feel right for larger chunks of text.

But why do I have this kind of preference? Because that’s what seems to be prevailing in the part of the web I see around. And what I see around is variations around typographic-heavy styling as seen on Medium, Substack or dev.to.

Creative design that intentionally breaks the rules isn’t dead. I enjoy looking at sites that reflect crazy personalities of their owners. But that is not something I wanted to do, as I wasn’t sure if I would have executed it well. I’m okay with my blog looking like another Substack without the benefits of being on Substack. I want this blog to compete on content rather than design.

This new theme may not look like much, but it has more personal touch than it seems on the surface. Let’s see behind the scenes.

## First and foremost, a love letter to Eleventy

[Eleventy](https://www.11ty.dev/) is a JavaScript static site generator that powers this site. I discovered it in 2019 when I contributed a Polish translation of [Katie Sylor’s Git troubleshooting site](https://ohshitgit.com/).

In 2023 I run a few other Eleventy-powered websites, I still have plans for more and I’m slowly getting into [developing Eleventy plugins](https://github.com/lukemnet/eleventy-plugin-pwa-v2). It is currently on top of my favorite tech things unrelated to daily work that I enjoy.

Eleventy reminds me a lot of my early days with WordPress back in 2000s and 2010s. Unlike WordPress, it’s free of the annoyance of databases, security or the craziness of the programming language doubling as a template engine. In my mind, Eleventy resides on the verge of two worlds: websites as a bunch of HTML files that have to be diligently maintained and edited by hand, as well as fully-fledged content management systems that combine a lot of different concerns in a single package.

When I was releasing this article, version 2.0.0 of Eleventy landed just a few weeks earlier. With my new theme, I used some new features, such as [new base plugin](https://www.11ty.dev/docs/plugins/html-base/).

## SCSS, CSS variables, semantic HTML

This redesign is my first project in a very long time that uses modern web features and isn’t a React application or a project based on a popular CSS library.

I’ve been in the industry long enough to remember constant struggles with Internet Explorer, CSS hacks and other suboptimal techniques for fixing simple layout problems. In 2023 the situation is different. Nothing stops me from using CSS variables, flexbox, relative units or HSL color palette. And there are more features on the way, like native CSS nesting, container queries, and many more.

I refused the temptation of using Tailwind CSS, as the idea of it feels very strange to me for many reasons. I may revisit it someday, but for now I keep using SASS. I like splitting my stylesheets into small component-scoped chunks that merge into one during the build process.

## Design rules and typography

While I was building the theme, Anthony Hobday released an excellent [rundown of design rules that are safe to follow every time](https://anthonyhobday.com/sideprojects/saferules/). It was a tremendous help for a guy like me - a passionate developer hopeless at design. Never before have I built anything in such a slow and deliberate way, focusing on _why_ rather than _how_.

Also, this is the first time in this decade I felt comfortable using a serif typeface for text in a while. Old-fashioned Georgia typeface looks gorgeous on contemporary displays. Using a typeface that is present on many operating systems saved me from analysis paralysis while trying to choose a custom typeface. And I don’t have to struggle with [FOUT problem](https://fonts.google.com/knowledge/glossary/fout), which is something I never manage to get right.

## EPUB and PDF

If you’re reading this article from a PDF or EPUB file, this is the moment it started.

Back in 2010s I stumbled upon [Rachel Kroll’s blog](https://rachelbythebay.com/w/). I found it a very entertaining read but as a latecomer I was greeted with a vast archive of texts that wasn’t super convenient to read in a single sitting on any computer (I didn’t have a tablet back then). Conveniently, Rachel published some of her older writing as [ebooks available on Amazon](https://rachelbythebay.com/store/). I distinctly remember how different it felt to read her blog archive on Kindle. It didn’t feel like a blog at all. It felt like a book with short chapters. Easy to digest in small chunks.

I encounter interesting blogs all the time. But if they have hundreds of texts in the archives, I struggle to read them all, even though I’d love to. The web would be much better if more blog owners repackaged their archives as ebooks or PDF files.

I practice what I preach. You can jump to [Read offline section](/offline/) and read this blog on your Kindle or anything that opens PDF files. My archive is yet to grow, but I intend this project to last.

As for how I repackage my content into PDF and EPUB files - I’ll get back to it in a different article. Meanwhile, you can check [the Git repository](https://github.com/offbeatbits/offbeatbits) for implementation details.

## Accessibility

Having been a [heavy tooter in the fediverse](https://masto.ai/@lukem) I think a lot about accessibility. Years ago I read ‘Dive into Accessibility’ by Mark Pilgrim. In 2010s I was implementing accessibility fixes on a giant legacy website that was legally obliged to provide them for their visitors. So much fun implementing contrast switchers on subpages that were using inline styles and `!important` clauses.

As for the theme, I don’t have enough audacity to claim compliance with existing accessibility standards, but I tried to get close to it. I made friends with VoiceOver on MacOS and I tried to navigate the new theme with my keyboard. I installed browser extensions for measuring color contrast. I am a little better at recognizing WCAG-AAA-compliant color combos than I used to. Some areas of the site aren’t perfect, but that’s fine for now.

## Polish translations of wise words

I accidentally discovered I enjoy reading and translating valuable articles written by other people, especially those coming from entirely different backgrounds than me. It is an occasion for me to dive deeper into what I read and sharpen my saw in the foreign language department. But most importantly, I take this as an opportunity to amplify voices of people I deeply respect.

All of the texts I wrote in Polish and my translations of texts by other people are now easily accessible on a [separate section of the site](/pl/).

I do not publish translated texts in EPUB / PDF files and I have no plans to change that. Doing so would introduce licensing nuances and makes it more difficult for original authors to exercise their ownership rights.

## Sharing is caring

Finally, I am confident about what I built here, so I will make this theme available as an Eleventy starter template for others to download and use. It’s still work in progress and I will edit this part once it happens.

The starter template will be slightly different from the one used on the site. Some particular features won’t make it to the ‘general’ version of the theme, but I will consider writing separate articles on them.

## The fun begins again

A new blog theme certainly wasn’t a part of my agenda for 2023, but it reignited my interest in numerous things I wasn’t paying attention to and I am happy with that. It feels different from what I do at work these days and therefore refreshing.

Expect more stuff happening here, maybe very soon.
