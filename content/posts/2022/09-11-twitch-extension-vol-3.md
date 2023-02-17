---
title: How to change your life with Twitch and StarCraft (vol. 3)
description: Long and happy story of my most important side project to date, volume 3.
date: 2022-09-11
tags:
  - personal
  - twitch
  - twitch extensions
  - side projects
  - starcraft
---

In case it wasn't obvious from the previous parts ([first](/how-to-change-your-life-with-twitch-and-starcraft-vol-1/), [second](/how-to-change-your-life-with-twitch-and-starcraft-vol-2/)), the story of my side project is in fact a story of my job hunting. Yes, It started with a video game I loved and a desire to bring something of value to its community, but the true goal was to impress a very limited number of powerful people. Everything else was an optional objective.

Looking back at the whole story, I'm convinced it wasn't exactly about growing my technical skills. Getting into the right frame of mind and regaining self-confidence was the game changer.

Somewhere at the beginning of 2022 I had a technical interview with another developer. He was one of few interviewers who took time to read my resume carefully and ask deep questions about it. At some point we started discussing my Twitch extension. When I explained the technical side of it, he noticed I was a front-end developer and I still managed to build a backend of my project on my own and use a database to store data. 'To me this screams you're good enough for us', he said.

A few weeks later that company offered me a job. I happily accepted. A few months later I submitted my termination because they didn't pay me well enough. That's not something I'd imagine doing back in 2020 or 2021.

But let's get back to the project.

## 2022

2022 marked four years since I released the first version of the extension. Not only my job situation changed. Everything else changed as well.

I stopped playing StarCraft II altogether and I gradually lost interest in watching it on Twitch. I switched to a MacBook and retired my old gaming peripherals. I picked up Nintendo Switch and my interest in PC gaming declined dramatically. Even if I wanted to come back, my PC started showing signs of age and I didn't want to buy a new one yet.

My morale as a developer of a thing revolving around StarCraft II wasn't great either. At some point StarCraft II was marked by Blizzard as a 'legacy' game, with no new content being added and maintenance effort limited to bare minimum. At a roughly similar time Activision-Blizzard was surfing between one controversy and another, with poor work conditions, accusations of sexual harrassment, Diablo: Immortal and many, many others. All that negativity got into my head and I started to ask myself uncomfortable questions.

Also, the Twitch extension was suffering a lot due to lack of necessary maintenance. Blizzard APIs were often timing out, resulting in incomplete responses. I didn't know how to handle those cases. The backend was riddled with edge cases that would cause the extension to show 'No StarCraft II profiles found!' error nearly all the time.

When I finally sat down to triage all the problems, I quickly realized I was no longer capable of getting the project to start on my own computer. I couldn't upgrade dependencies or reproduce most burning issues. My own code became legacy code with all the horror of that fact.

But I still wanted to bring it back to life.

## Version 3, here we go

In the meantime, I completed a course on NestJS, a neat backend framework for Node.js. In just a few weeks I ported two main microservices to NestJS and I started rewriting the backend. Even though the scope of the whole endeavor was quite wide (upgrading the backend, getting frontend to work, modernizing the deployment process with Docker and Compose files), everything looked bright.

After February 2022 seemingly unrelated yet unexpected things started happening. War in Ukraine and the economic situation in my country led to a massive inflation. My mortgage increased by nearly 100% compared to the previous year. While I do consider myself privileged to earn a very comfortable living with unimaginable job security, even I eventually started cutting costs from my budget.

The extension was generating costs while bringing no income. In good times that was fine. In worse times, when some months would require me to burn savings, it started to raise questions.

And I was still not done with version 3. Lots of work had to be done to materialize it.

Let's be honest. As of 2022 the project fulfilled its purpose. I was in a completely different place than in 2017. I no longer needed any side project to prove my technical competency. I was still hungry and eager to build new things in the evenings, but I wanted to build bigger things. Most importantly, I wanted to build things that would be attractive products rather than some non-commercial fan content targeted at a small group of people.

So in August 2022 my Twitch extension for StarCraft II finally went down. The era ended.

I was left with plenty of server space and a massive feeling of void in my life. But I still considered it a happy end.

The time has finally come to look back at my 2017 self and say 'heh'.

Heh.

<div class="video-embed">
   <video controls="controls" src="/video/extension.mp4">
      Your browser does not support the HTML5 Video element.
   </video>
</div>

## How much did it all cost?

I suspect it might be an interesting question to answer. Yes, there was plenty of room for optimization in this department. Yes, it can be done much, much cheaper, but that wasn't always the point.

1. **Server.** The extension was running on a single Debian VPS - the cheapest one from OVH. I typically buy servers for extended periods of time and I often look for sales, so this cost may not be super accurate. Typically it was between 3 and 5 Euro a month. To me that was the least painful position in the project budget because I always need a server or two to build stuff.

2. **MongoDB database.** My extension was a typical full-stack application and I wanted to avoid the additional complexity of maintaining my own database. I used MongoDB Atlas. About 12 euro a month for a production-ready plan with high availability. Much more than I really needed. In 2022, when I finally figured out how to use Docker, I'd rather host my own instance.

3. **Web domain.** This cost was absolutely optional and served mostly as a convenience. Having a separate domain gives plenty of flexibility and independence of other projects of mine. A neat landing page makes a slightly better impression than a plain old link to GitHub. Around 7 euro a year for the .eu domain.

4. **Graphic design.** Lex designed two versions of the extension as well as accompanying assets. To her I was just another paying customer. For various reasons I'm not comfortable disclosing the exact sum paid in this department. But the price was fair and the quality of service was outstanding.

5. **Development time.** Lots of beer, lots of watched streams, lots of conversations with the community. I was coding in the evenings, so I had to find my own intrinsic motivation to keep going, as well as make it a little more fun so that it didn't feel like work. I typically don't do commercial work in the evenings, but if I did, my working hours would cost a lot. Sadly, I didn't track time.

While I don't regret any minute or any money spent on the extension, in 2022 I no longer have time and space for building projects this small on such a complex infrastructure. I don't mind building things that take a lot of time to finalize, but I expect them to solve much bigger problems.

Yes, it was an overkill to pay this much money to fund a project like that. But as I said earlier, the primary purpose of it was to help me land a better job. My future employers will cover all of these costs without knowing.

## Things that never happened

1. **Translations.** Looking at statistics, Russian, Spanish and Korean were first candidates. I have numerous friends from various countries as well as access to Crowdin, so it was perfectly doable.

2. **Overlay version of the extension.** Graphic design was ready. It was supposed to reuse the same backend.

3. **Transition to configuration service provided by Twitch**. When the extension first came out, Twitch didn't offer such feature yet. Offloading configuration object storage to Twitch would have eliminated MongoDB from the picture, thus saving a lot of money.

4. **Getting [featured by Twitch in their showcase](https://dev.twitch.tv/showcase/).** The extension was never as successful as many other projects. Well, I was operating in a very specific niche and there wasn't much I could do.

5. **Forks of the project ported to other games.** I identified one more popular game and I even reached out to its developer to confirm they're okay with a project like that (they were). I won't say which one it was, but the catalog of games that expose data of their users via APIs is rather limited. Take it as your homework.

6. **Monetization.** It could have saved the project from going down, even if maintenance costs weren't covered in full. The sole existence of some sort of financial support would have turned things around. However, I found it highly inappropriate to ask for money for a thing that was simply a nice and totally optional toy for a limited target group. Also, game companies typically prohibit monetizing fan-made content directly, so it would definitely have been a gray area. That doesn't mean I'm not a fan of asking the community for money. I want to offer something useful first.

7. **Userbase feedback.** I sent thank-you emails that to big streamers that were using the extension but I never received any replies. I was aware of a few big names that knew the project existed, but that didn't lead anywhere. I also neglected the most numerous portion of the userbase - small streamers. Hearing back from them would have moved the project in new directions.

## Interesting numbers

- **80** - number of active streamers on a single day that used the extension as of August 2020.

- **1582** - confirmed installations on the day of closing the extension.

- **4 GB** - the highest amount of transferred data I've ever seen on a single day. About 80% of this traffic was generated by viewers of one streamer.

Not bad.

This is where the story of my Twitch extension ends for good. Bonus part is coming soon.
