---
title: How to change your life with Twitch and StarCraft (vol. 1)
description: Long and happy story of my most important side project to date.
date: 2022-08-23
tags:
  - personal
  - starcraft
  - side projects
  - twitch
  - twitch extensions
---

In 2017 I failed two job interviews for React developer positions. Normally that isn't much of a news by itself, but it all happened at a time when I was incredibly frustrated and I badly wanted something new. After receiving devastating feedback from my interview rounds, I needed a few years to rebuild my professional self-confidence. Things went very, very wrong back then and they would keep going wrong over and over again for a while. That's how it all started and it didn't feel romantic at all.

React is a popular framework created by a developer team at Facebook to speed up building modern web applications. It wasn't the first nor the last attempt to revolutionize the way to do things, but it was done by a big brand that probably knew what they were doing. Alongside Angular, another similar tool created by Google, it paved a way to a sensible, yet quite sophisticated approach to building things on the internet. What five years earlier would take me a few days and two programming languages to build, I could now build in a single evening using one language. And it felt like building things out of Lego blocks.

After years of doing boring things for a boring company I really wanted to jump into that train and do exciting things again.

## Me, myself, video, video games and I

And there was Twitch, that huge video streaming service owned by Amazon I've been enamored with since 2014 or so. Watching it in the evenings was my way of making dull times a little more interesting. Unlike YouTube or other social platforms, there was something refreshing about the idea of watching a real human live on a video feed and interacting with them through a text-based chat.

Until then, I was used to various text-based modes of communication, like chatrooms, instant messengers and blogs. But Twitch was something different in my book.

I never got into streaming on Twitch as seriously as I could I struggle with the idea of being a content creator. I was born a craftsman and I am not used to doing things while having audience behind my back. It is on my list, but whether it happens this year, next year, or at all, is yet to be determined.

But I digress.

Oh. And I almost forgot.

## StarCraft II

Around 2014 my flatmate showed me a single player campaign of Wings of Liberty, first installment of StarCraft II trilogy. The game looked interesting to me because it reminded me of dozens of hours spent in WarCraft 2 back in 1990s. I never got into StarCraft even though I knew it was a thing. It was easier for me to find friends to play arena shooters than strategy games. And StarCraft was never aired on TV in prime time like in South Korea.

I bought my own copy of StarCraft II soon after and we would spend hours learning strategies, playing team games or just fooling around. With help of Twitch, I discovered a vibrant community gathered around the game. Everything was there: esports tournaments, players of all kinds of skill, an elusive group of young pros earning real money, and a huge game studio taking care of the game that revolutionized the industry and legitimized the phenomenon of nerds watching other nerds playing games on the internets.

When Legacy of the Void - the third and final installment of StarCraft II campaign trilogy - came out in November 2015, I bought it on day one. At that time I have been playing the game fairly competitively (though I would never get out of silver league due to lack of patience). I was hooked to it for good.

## September 2017

On the last day of August, 2017, [Twitch introduced Extensions](https://blog.twitch.tv/en/2017/08/31/introducing-extensions-a-streaming-revolution-c31762addcd9/). It happened after a period of closed testing on various popular channels. At that time most of my Twitch viewing happened on a desktop computer, so I quickly noticed those interesting dynamic panels on creators' channel pages, such as Amazon wishlists and other flashy stuff that couldn't be done with old text panels.

Early gallery of extensions included projects for many popular games at the time, such as League of Legends, Dota 2, World of WarCraft and many, many others. Streamers playing those games could quickly and easily install them on their channels.

Also, the process of building custom extension was very well documented, with tutorials and code samples widely available. Anyone with decent programming skills could start doing that immediately. A typical Twitch extension is in fact a small web application with logic to present data and keep configuration details saved by a creator. It was possible to build one's own extension with tools as streamlined as jQuery or plain JavaScript or as sophisticated as any popular framework of the time.

But I couldn't see one game being covered there. And I knew that game had great community APIs to consume. And I knew right off the bat that this idea was easy to build within a reasonable time.

StarCraft II, where art thou?

## 2017-2018: Let's get to work

I didn't think much. I registered a developer account on Twitch, went through a boring onboarding process involving tax information, created an extension skeleton and registered a client with Battle<span>.</span>net API to fetch player data. I created a very early prototype in a few weeks.

Since I decided to use React, I took my time to learn new tools and experiment with various approaches, hence it took more time than I expected. I was working in the evenings while watching other streamers, generally enjoying the journey rather than rushing myself. I had no deadline to meet. Lots of beer was drunk, lots of all-nighters were pulled.

![Prototype](/images/extension-proto.jpg)

I had no faint idea what the extension was supposed to look like and I didn't have many designers among my contacts that would understand the medium. But there was this StarCraft II streamer who was struggling a lot in the gold league at the time. And since she was streaming from Mexico in her morning hours, her streams aligned nicely with my boring afternoons at work.

Oh, and she was (still is) a graphic designer. Even better, a graphic designer that plays StarCraft II. What else could I ask for?

There, [Lex, the most excellent graphic designer I know](https://www.behance.net/lex_sc), was summoned to handle the visual side of the extension. She came up with a neat logo and nailed the user interface.

![First version of the extension as seen in promotional graphics](/images/extension-v1.jpg 'Damn, those devices aged a lot')

<p><small>Damn, those mobile devices from mid 2010s aged a bit.</small></p>

Meanwhile, I was this close from scraping the project altogether for the stupidest reason possible.

I had no idea how to authorize with Twitch so that the prototype would work inside a frame on a Twitch channel.

At the same time, another extension for StarCraft II appeared. Not the same idea as mine, but using Battle<span>.</span>net community APIs as well. It was built with jQuery, so its code was very easy to read for me. I checked it. One evening it finally clicked for me. What a damn fool I was to not understand the simple idea of invoking a callback after Twitch completed authorization on extension load. Well, not the last time.

In 2019 I put this critical line of code in a [reusable React component](https://github.com/lukemnet/react-twitch-ext-onauthorized) - initially as a render prop component, and since version 2 as a React hook. You may scoff at the idea of building npm packages out of single lines of code but you have no idea how much sweat, tears and distress hides behind them.

Since the development process was taking so long, I was sometimes approached by Twitch employees due to lack of visible progress on the project. They were nice enough to ask if there was anything they could help me with and they even offered exploratory calls. I politely declined and I never talked to any of them beyond that (after all, all I needed was more focus to get the thing done) but that was a really great moment. At that time Twitch was growing fast as a friendly platform to build cool things and they were improving tremendously in their support department, with developer-focused Discord server, web forums and community volunteers acting as a first line of support before engaging Twitch employees.

Real life was getting in the way as well. For majority of 2018 my dad's health has been deteriorating and in October 2018 he passed away. Much as I tried to get through this with strength and dignity, 2018 was still a very slow and devastating year for me. You can't do as much coding in the evenings as you want if your mind is elsewhere.

## 2018: All done. Here we go

Anyway, in August 2018 everything was ready. Debian-based virtual server installed and secured. Cloudflare configured. Extension backend in Node.js tested and deployed. MongoDB database ready. Frontend installed on Twitch. Jacked up and good to go. I invited 47 Twitch streamers for the closed testing stage of the project, mostly my followers from Twitter.

I was freaking out a lot about server performance and unnoticed bugs but it all went better than I expected. Watching a Twitch stream and looking at a stream of server logs in the meantime was a mesmerizing experience. Felt like the Matrix, not gonna lie.

In October 2018 the Twitch extension went live for everyone. But for me, that was not the end.

The journey had only barely begun. I once said this on Grizzly's website:

<blockquote>I like to think about this project as the beginning of a long personal journey. Like in Borderlands 2, someday I'd love to look back on this moment and be like, "heh".</blockquote>

We were still a few years away from that moment. In fact, I still had doubts whether it would ever happen at all.

[Jump to part 2 of the story &raquo;](/how-to-change-your-life-with-twitch-and-starcraft-vol-2/)
