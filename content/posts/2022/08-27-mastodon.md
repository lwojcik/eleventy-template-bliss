---
title: Self-hosting Mastodon for the adventurous
description: A couple of tips for anyone who is interested in fediverse and would like to set up their own Mastodon server.
date: 2022-08-27
tags:
  - social media
  - fediverse
  - mastodon
  - self hosting
---

Somewhere in March 2021 I found time to give Mastodon a proper shot. The idea of decentralized social media based on a common protocol has been alluring me for a while. And to make it even more interesting I opted for a hard way: I launched my own Mastodon instance on a cheap VPS.

It was a fun time. I'd like to share some thoughts for anybody who would like to follow my path.

You have to know that Mastodon is NOT a lightweight toy. It can eat all of the available resources if not groomed properly and I've seen that happening. Obviously, I couldn't scale up my server to infinity and beyond. Even worse, with recent events I was forced to cut some costs from my personal budget. Self-hosted Mastodon instance was fun, but it had to go.

However, Mastodon on my VPS never failed me for any reason I couldn't explain. It was always there with acceptably high uptime. Invasive operations like upgrading software or restarting services never brought any destructive effects. If anything was going wrong, I was always able to figure out why.

At the moment of writing I no longer run anything related to social media in general. [I still toot elsewhere](https://masto.ai/@lukem) and I often spend more time on Mastodon than on Twitter. Nowadays I strongly prefer self-hosting my own projects rather than popular tools that can be easily accessible elsewhere, free or paid.

However, I figured I may not be the last human craving to satisfy their curiosity about owning their platform. So I decided to note down all of the stuff I learnt and share some resources I produced on the way.

I'm intentionally leaving this article vague because I want it to stand the test of time. I won't get deep into technical stuff. This kind of details may change any time and I cannot guarantee keeping this article up to date. General principles of craft stay timeless.

Also, I cannot stress this enough: I am specifically discussing running a Mastdodon instance for a single user (me, myself and I). Creating a thriving community on fediverse introduces a lot of additional responsibility and I am not competent enough to discuss it.

So, before you jump on and become an administrator of your own Mastodon instance, let me share some friendly advice with you so that you keep sleeping well at nights.

## Know your craft. Or at least try

Mastodon is a fairly mature project. It's well documented and it can be set up by following step-by-step tutorials. Container tools like Docker make the process even more streamlined. But there is still some barrier of entry and I am not saying it's all sunshine and rainbows along the way.

Be confident and know your tools at least a little before starting.

While I don't consider myself the greatest server administrator in the world, I am fairly comfortable with the Linux command line and I know how to harden my virtual servers based on online tutorials. I know how to edit text files on a server and copy / paste stuff. I know how to set up a basic firewall and open / close ports on a server. It was enough for me to successfully kick my instance off and keep it running for a while.

But I probably wouldn't have tried if I had never played with virtual servers or Linux at all. And I absolutely wasn't ready to open my instance to other people, even any of my friends. Being responsible for my content and only my content made my life a bit easier. My experience is probably insufficient to consider opening a public instance.

If you don't consider yourself comfortable with Linux and its command line, this is fine. Try to have some strategy to fall back on in case things go wrong. Backup critical files, be sure to always save your changes, use snapshots of your server if your provider offers them. There's no such thing as too much safety.

## It's gonna be costly at times

Learn how to monitor CPU and disk space usage. Sooner or later the cheapest VPS may not exactly cut it any more. Even if you enable periodic cleaning jobs, your Mastodon instance will still cache a lot of temporary content. One day you will have 50% disk space left, the second day you will be at 90%.

You will also face interesting moments you won't be able to predict early. One of those moments for me was Elon Musk announcing his will to buy Twitter. Following that news the whole Mastodon network had to deal with a massive spike in traffic as more and more new users would sign up. As a consequence, even my single-user instance was more stressed, as it had to cache more content and process more incoming requests.

Be aware that even a smallest Mastodon instance has to cache a lot of temporary files if it's supposed to communicate with other servers freely. You won't always see all of the cached content at all. If you can increase server capacity to have some buffer, do it.

But at the end of the day remember that your instance is expensive to run by design, as all of the cached content is consumed by a limited number of users (only you + other instances that communicate with you). That is the reason why it's more economical to join a sufficiently big instance that hosts a lot of active users at once, even a paid one.

I am not discussing cloud services like AWS or Azure here because my knowledge of them is limited and I'm on a budget. Cheap virtual servers are my way of hosting things if I'm not sure how much resources I will need in the long run.

## Think about a different tool. Mastodon isn't the whole fediverse

We talk a lot about Mastodon here, but in fact it is not the only option. The beauty of fediverse, compared to 'traditional' social media, is that various platforms can easily talk to each other using a common protocol.

There are two types of tools you want to have a look at: Mastodon forks and alternative tools that retain compatibility with each other.

Mastodon forks are simply modifications of official Mastodon distribution. They may solve a lot of problems of the original implementation, offer additional features and so on. At any given moment you should be able to search 'mastodon' on GitHub and find actively maintained projects.

Alternative tools, such as Misskey or Pleroma, offer better performance and full compatibility with Mastodon, but they may not offer all the features you got used to in Mastodon.

Some platforms are way better suited to host specific type of content. Bookwyrm works great as an alternative to Goodreads. Pixelfed shines as an image sharing service. WriteFreely is a neat long-form blogging platform.

Take your time to play with as many of them and make an informed choice.

## You don't have to run a dedicated domain but it makes sense to have one

I ran my Mastodon instance on a subdomain of one of my high-profile domains. I was fairly comfortable with Google indexing it. All was fine, but in hindsight it was far from a healthy practice.

As mentioned earlier, your Mastodon instance caches a lot of files and communicates with other servers. You may not be able to fully control it all the time. Bad news is that not everyone on the internet is nice.

Some servers on the fediverse emit questionable or illegal content. There are ways to block unwanted instances from communicating with yours. But you do not want to risk the reputation of your main domain in case Google indexes it.

Fixing error messages in Google search results is not a fun process at all. I've seen numerous cases when Google would yell at me in their Webmaster Tools but they wouldn't show me any of the affected URLs. It can be very infuriating when you don't know where to look.

Also, enterprise antiviruses and corporate security solutions can be annoyingly overzealous and you can't expect them to regularly update their databases. Malicious reputation of your Mastodon instance shouldn't bleed to any other assets of yours.

Therefore, make sure you use a dedicated domain for your Mastodon instance, or at least don't share it with other important projects of yours. Pick a domain name that will be easy to replace and cheap to renew.

## Have email delivery configured so you can recover your password

I used Mailgun, as it was easy to set up and offered a generous free plan. Other options exist as well.

You want to be able to recover your password in case you lose it or it gets compromised. Otherwise you'll have to manually reset it on a database level and that's not a fun process.

## Enable two-factor authentication

Two-factor authentication is important for many reasons and it's healthy to have it on. I used Yubikey and my MacBook as 2FA devices. Use anything you have available. An authenticator app on your phone (Authy or Google Authenticator) works fine as well.

You can also consider enabling two-factor authentication for SSH sessions, but using password-protected SSH keys and strong exchange algorithms is already a lot. And you shouldn't need to SSH into your server that often unless you host anything else alongside your Mastodon instance.

## Have backup strategy for your own content

In other words, backup your database. Preferably in an automatic fashion.

I'll be honest - I wasn't doing that. Fortunately nothing disastrous ever happened. But I was fully aware that if something went super wrong that would render my database unrecoverable, I'd have lost my content. It wouldn't be a major nuisance to me but I would be a little sad to start from scratch again.

Also, accidents happen. My VPS provider had their data centers going down due to fire. Fortunately none of my projects ever suffered, but hey, I may not be this lucky next time.

Dead serious - don't skip backups.

## Upgrade with caution. Know how to revert just in case

There were moments when upgrades were failing on me because of some forgotten detail. In those cases I'd either start over or revert to my older backup. The Mastodon application consists of numerous different services that utilize tech stack I'm not familiar with. Therefore I was strictly following the instructions and didn't allow myself much room for guessing.

Automate this process as much as you can. Use Docker, Ansible or plain old Bash scripts so that you can fire and forget. Don't perform repetitive tasks by copy-pasting commands because it gets old quickly and introduces room for errors.

My upgrading strategy was a bit wonky and my instance was often lagging one or two versions behind. For a single-user instance that isn't much of an issue.

## Follow administrators of other instances

Each well-known instance has administrators. And they're almost always prominent users of their platforms. Follow them to know what's going on in the wider picture. They may know and share stuff you as an administrator may need to know.

## Block instance domains at will

Once again, not everyone on the internet is nice. The horror of decentralized social media is that everyone can spin up their own server and it takes a bit to take them down. But the beauty of decentralized social media is that you have control over who your instance talks to and who your instance refuses to serve. You don't want certain stuff to be cached on your instance.

Mastodon makes it possible to block entire domains from federating with your instance. Exercise your freedom and use this option to save resources and keep your instance clean.

## Mind your cache settings

If you use a CDN provider such as Cloudflare, remember that your instance has to communicate with other instances. Like a lot. If needed, add firewall rules to ensure it's possible to hotlink images from your instance. Tweak caching settings to ensure your server load remains predictable.

## Have terms of service / code of conduct, even on a single-user instance

Much as it seems counterintuitive, even a single-user Mastodon instance should have some sort of code of conduct. Some Mastodon relays require subscriber instances to have one. I found it easier to write my own version rather than asking each and every relay owner if they'd accept me.

My way of dealing with this was that I acknowledged the existence of [Mastodon Server Covenant](https://joinmastodon.org/covenant) and made some promises I intended my instance to deliver.

See [my old Code of Conduct](https://github.com/lwojcik/mastodon-instance-leftovers/blob/master/terms.md) and feel free to reuse it if it fits your scenario.

## Subscribe to relays

As a single-user instance owner, you're a lone wolf. Discoverability of you and your server is limited by your own interactions with other users. Unlike Twitter, there's no algorithm that could make you famous overnight. It is widely perceived as an advantage but it can also slow down your growth by a lot.

Relays are an effective way of being visible to the rest of the fediverse with minimum effort. Consult terms of service of each relay and subscribe to each and every one that fits your thematic niche and speaks languages you understand in order to gain some boost to your visibility.

See the [list of relays my Mastodon instance was subscribed to](https://github.com/lwojcik/mastodon-instance-leftovers/blob/master/relays.txt). More up-to-date lists should be available online.

## Aaaaand that's it, I think

There's more to managing a Mastodon instance. There's definitely more knowledge I haven't discovered. But I believe all of the above is a good starting point. Don't cut corners and don't stress out too much and your instance will serve you well for years to come.
