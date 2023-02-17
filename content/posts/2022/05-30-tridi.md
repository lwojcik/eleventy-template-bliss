---
title: That tiny JavaScript library that couldn't
description: Short and unhappy story of a certain image viewer library.
date: 2022-05-30
tags:
  - web development
  - side projects
---

In 2019 I was working for this well-known local equivalent of Initech from The Office Space, building and maintaining dozens of landing pages designed to sell entertainment services to millions of people. Apart from tight deadlines, delivering magic as ASAP as possible and bazillions of legacy code my work was slow and devoid of any adrenaline. It was so bad I had to invent my own ways of injecting fun to dull days in the office.

Since I like building things, and my job was mostly patching existing things, I once decided to build a new thing.

What I didn't expect was that thing would haunt me every time I would look at my GitHub profile.

The year 2019, apart from being the last year of 'the old normal', was another year of agony of Adobe Flash. Since we're discussing codebases with decades of history, millions of commits in SVN repos and no budget for refactoring, finding old Flash creations in weird places wasn't much of a surprise to me. It was all good as long as it was animated banners that should have been deleted years ago.

Then this particular Jira ticket arrived. The presentational component on one of the landing pages stopped working. Since the page was related to a flagship product, it needed a fix. Preferably here and now.

The component in question was a 360-degree product viewer. Using a series of images shot from all angles, it would create an illusion of movement on user interaction. Very neat concept and fairly easy to code with modern JavaScript.

But until modern JavaScript arrived, fancy presentational features had to be built, well, somehow. In dark pre-jQuery times, that 'somehow' was probably Flash. And that's what happened on our landing page. The image viewer in question was a commercial Flash-based plugin provisioned by an external contractor in early 2010s. No chance to get it upgraded.

Searching Google and GitHub yielded only one interesting result. Rough at edges, lacking some specific configuration options, but fully functional. And that's where this story should have ended. But we're far from a happy end.

I forked the script, rebuilt it in TypeScript, polished the interface and added extra options I needed. Since I sunk too much time into this project and 99% of it was spent outside of my working hours, I added documentation and put it on GitHub to see if it can be useful to someone else.

And boom, Tridi was born. Tridi. You know, like three-dee. 3D. Man, I'm so good at product naming.

I posted a link to Tridi on Reddit and Hacker News. I was super scared of this as I'm not a frequent submitter to either of these sites. Needlessly. The project didn't gather much interest except a few comments and stars on GitHub. Well, that happens. I solved the problem, marked the Jira issue as resolved and moved on.

Four days later I was lazily scrolling through Hacker News when one link grabbed my attention. Well, someone built a script that addressed the same problem as I had. While it wasn't a direct copy of Tridi, it worked in a very similar way. Submitted from an account just as no-name as me.

But we weren't equal.

The difference? 87 points and 28 comments catapulted that project to the front page of Hacker News. A few days later I saw it in super-duper popular email newsletters I was subscribed to. The GitHub repository amassed hundreds of stars and tons of attention.

It hit me like a train.

Don't get me wrong, I wasn't jealous. Okay, maybe a tiny bit confused. But most of all, I regretted putting time, heart and ambition on solving an issue somebody else, somewhere else in the world, was tackling at the exact same time with the exact purpose of sharing it freely. What were the odds of that happening?

Tridi eventually got its share of attention after all. Some people did use the project. I saw a handful of forks and stars from very well-known companies. Bug reports, feature requests and project inquiries appeared. Someone else ported Tridi to React.

It didn't change the fact this whole story left me in an awkward state. It's like this piece of art I've been anxious to show to the world, only to learn somebody else did a similar one and rendered mine irrelevant. Nobody cares about also-rans.

It's May 2022 and someone just commented on a feature request I had received back in 2021 and never bothered to touch it. 57 pull requests with unmerged dependency updates are waiting. The codebase could use some refreshing.

Technically, Tridi outlived its purpose. In 2022 I'm working somewhere else and my GitHub profile helped me a lot. I no longer need to amuse myself in stupid ways to have fun at work.

I guess it's time to end this once and for all.

Yes GitHub, I know this repository will become read-only. I understand the consequences. Copy-paste the repository name to confirm. Click that red button.

[And boom, done](https://github.com/tridijs/tridi).
