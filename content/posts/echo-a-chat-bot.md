---
title: "Echo: A Twitch.tv Chat Bot"
date: 2016-08-10T00:00:00-08:00
---

When I first thought up the idea for echo, I proposed it to a good friend of mine. He cautioned me, mentioning that, "it could be used for good or for evil." He wasn't wrong..

Echo is just your average irc connected chat bot hooked up to the ever growing Twitch.tv community. Echo mainly focuses on fast analysis of chat messages to process and correlate the text in the messages.

#### Analysis

The bot will collect about 20 messages in a vector and then perform a simple [Longest Common Substring Analysis](https://en.wikipedia.org/wiki/Longest_common_substring_problem). This will check the messages for similar text in previous messages within the group of 20. This is performed in an attempt to look for spam messages that are spammed throughout the chat with slight differences in an attempt to avoid spam detection bots that also exist in the channels. Common bots such as [Nightbot](https://beta.nightbot.tv/) and [R9K](https://blog.xkcd.com/2008/01/14/robot9000-and-xkcd-signal-attacking-noise-in-chat/) sit in the chat doing a similar analysis to look for more specific spam patterns: ASCII spam, ALL CAPS, etc.

Echo is unique in the fact that it has no purpose beyond discovery of spam messages. Of which, it can pull out the root spam message even if a user provides an extra period or number at the end to provide a unique string everytime. Echo is able to pull away the extra numbers and characters and provide just the root message that is attempting (and usually succeeding) to be spammed.

#### The Dilemma

This is where my friend chimed in as I was explaining the idea to him. As I had not provided a moderation mechanism in the bot, it could technically be used to add in the continuous spammed messages.

For now, Echo justs sits dormant on my Github. It is written in C++ and is probably my biggest Open Source project that I have made with C++. Since we use it at University for most assignments, I feel the most comfortable with it. If Echo interests you, [have a look](https://github.com/devincarr/echo).