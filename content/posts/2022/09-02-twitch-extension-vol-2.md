---
title: How to change your life with Twitch and StarCraft (vol. 2)
description: Long and happy story of my most important side project to date, volume 2.
date: 2022-09-02
tags:
  - personal
  - twitch
  - twitch extensions
  - side projects
  - starcraft
---

For the whole time [I was developing the extension](/how-to-change-your-life-with-twitch-and-starcraft-vol-1/), I was getting invitations to recruitment processes on a nearly constant basis. And I ignored pretty much all of them as I didn't want more disappointment to drive me insane. My way of thinking was that once my project was out, I'd use it to prove my expertise until I have got relevant work experience in desired fields. Anyone who wanted could see it in action or read source code if they knew where to look. And, uhm, it kinda worked.

## Kinda

Yup, kinda. At least not immediately.

It still didn't prevent recruiters from pulling a 'too long, didn't read' on my resume altogether and asking what my commercial experience in technology X or Y was. I didn't want to go through the humiliating path of proving that I was worth a shot. If my resume didn't stand out immediately, well, I didn't feel confident to fight. And I didn't want to start from the low ground.

I had a few interview rounds with companies that seemed genuinely interested in what I was doing but sooner or later they'd turn me down as well. Some of them rejected me for blatantly ingenuine reasons. It really felt like all those online articles about the value of open source work in my resume weren't true at all. I felt HR people were treating me like a filler to benchmark other candidates against.

I also had a few promising processes that were perfectly within my reach. I still botched them due to my historically low levels of self-esteem.

One day I had an interesting talk with a CEO of a certain software house. He listened to my story carefully and said something that would simultaneously bless and taint my job hunting:

<blockquote>You're transitioning from years of building websites to building web applications. And you're gonna struggle. For some companies you're gonna look like you are trying to switch careers.</blockquote>

He was right and wrong at the same time. Much as I disagreed, I couldn't argue with that logic. And he was nice enough to offer me a job that was exactly what I was looking for. I declined for a reason I'm not comfortable to share publicly. Buy me a drink and ask me in private and I'll tell you why.

On the verge of depression, completely demotivated, I was still in search of that one right door to knock.

[The 2020 pandemic](/lets-talk-some-pandemic/) slowed me down even further. Rumors of various companies cutting their stuff were circulating. I heard of cases when people would be turned down by their new companies right before the zero hour. I wasn't sure if I wanted to go through the same horror at such a pivotal point of my career. Fortunately, the position I was holding at the time survived. We had even more work to do.

## Gigabytes of excitement

But you want to read about that StarCraft thingy. No worries. I'm warmed up yet.

For starters, you have to know that my Twitch extension never employed any third-party statistics. There were a few reasons for that. Most importantly, I didn't know what to measure. There was no point to compromise viewers' privacy for numbers I wouldn't know what to do with. And I wasn't hiring a marketing person for an open source project without a clear business model. And I totally wasn't interested in chasing numbers for the sake of chasing numbers.

But there were two significant metrics I had access to and I treated them somewhat seriously.

First, the amount of data served by Cloudflare. I had fairly aggressive caching configured, so Cloudflare was standing between the user and the extension backend for 90% of the time. While it wasn't a particularly precise metric to draw useful conclusions, it was sufficient enough to answer many questions about the number of people seeing my project.

Second, the number of confirmed installations. Before Twitch introduced extension statistics on their end, I figured out I could check the number of user configuration objects in my database. 'Confirmed installation' didn't necessarily mean streamer was actually using the project. I had no idea how many of those installations were visible on streamers' channels for more than 30 seconds and I wasn't attempting to verify that. But I had something. And those numbers were impressive.

One day, while doing something else, I clicked into bandwidth statistics of the extension domain. My jaw dropped.

4 gigabytes of traffic served within a few days.

I wasn't used to seeing numbers like that in any of the things I ever produced online since the 2000s. That was insanely lots of traffic in a very short timespan.

I looked at Twitch and I quickly figured out what was going on.

That one popular StarCraft II streamer picked up my extension and put it on his channel. And since he was streaming for many hours every day in front of hundreds of viewers, I could see traffic from nearly all countries of the world in my project.

The consequence was that the project got massive exposure that quickly turned into dozens of new installations on smaller channels. I've seen streamers that would play StarCraft II more passionately than any popular content creator. People that would play team games with dozens of other people. Streamers from countries that spoke languages I didn't understand.

Another big name that I confirmed to use the project was an actual professional player.

Big things were happening and I felt I should do something to make use of all that energy that was gathering around me.

I decided to redesign the extension. It was meant to be bigger, better and more powerful, if an app inside a tiny frame on some other site could be anything like that.

## Version two point oh

So in mid 2019 I started working again.

It was quite a big deal, to put it nicely. The new version supported up to 3 profiles from any game region and showed MMR ratings for each individual league streamer would play in. It also presented cumulative statistics and recent match history.

From the technical standpoint, complexity of the project grew exponentially. More API endpoints were used, including ones marked by Blizzard as 'legacy'.

With version 1, particularly active streamers that were playing a lot of various types of games, even if their viewership was low, were putting quite a strain on the extension backend. Cloudflare and Redis made the experience much more tolerable at the cost of nearly real-time freshness of the data. After all, a typical StarCraft game would last anywhere between 5 minutes and 5 hours. Real time didn't matter.

And with version 2, more endpoints of Battle<span>.</span>net API had to be queried. Results from one endpoint would be sent to a few other endpoints. All of that had to happen without reaching hard limits on API usage. A lot of objects had to be cached in the process. Once the object was generated and cached, serving it was very cheap and efficient.

It was also an occasion to significantly upgrade the codebase. I started using TypeScript and refreshed various libraries I had developed on the way. Some of them, like [twitch-ebs-tools](https://github.com/lukemnet/twitch-ebs-tools), would get featured among [Twitch Community Coding Resources](https://dev.twitch.tv/code/). Others, like [BlizzAPI](https://github.com/blizzapi/blizzapi), would gain traction of their own and serve as a basis for numerous other projects such as Discord bots or clients for other games, with World of Warcraft being the most prominent representative of the category.

I also decided to split the project into independent microservices to mitigate the need for scaling up the backend. Rather than dealing with a fairly massive monolith that did many things at once, I had two tiny services ([bnet-auth-service](https://github.com/sc2pte/bnet-auth-service) and [sc2-api-service](https://github.com/sc2pte/sc2-api-service)) that would do just one thing and do it well.

As for the design, Lex once again delivered [something truly pleasant to interact with](https://www.behance.net/gallery/104488669/SCII-Profile-Extension-20).

![Second version of the extension as seen in promotional graphics](/images/screenshot.jpg)

In September 2020 version 2 was out.

And I had even more cool stories to tell during the job interviews if I ever decided to go through that mysery again.

## Are we there yet?

Almost.

Eventually, I managed to land a new job after way too many years in one place. Much to my surprise, it was a startup building another Twitch extension related to esports. It was a great pleasure to join a project where my unique experiences would be put to use immediately. I felt the curse from that software house CEO was finally broken. Someone asked the right questions and recognized my value.

Sadly, my startup career didn't last long due to financing problems on their end. But it marked a major turning point and I'm glad it happened. I felt the sun above me was finally kind enough to go out from behind the clouds.

[Jump to part 3 of the story &raquo;](/how-to-change-your-life-with-twitch-and-starcraft-vol-3/)
