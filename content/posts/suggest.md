---
title: "Suggest"
date: 2016-12-11T00:00:00-08:00
---

A simple commandline tool to provide auto suggestions via [Bing Autosuggest API](https://www.microsoft.com/cognitive-services/en-us/bing-autosuggest-api).

The [Github](https://github.com/DevinCarr/Suggest) if you would like to try it out!

#### Inspiration

I found something similar the other day on HackerNews, but it used Google's auto-complete API. Since I will be joining the Bing team soon, I decided to see if Bing has an open API that can do the same thing. [Microsoft Cognitive Services](https://www.microsoft.com/cognitive-services) ended up having an Autosuggest API interface to. Thankfully it also provided a really simple JSON API to communicate with.

I recently needed to do some JSON parsing in C++ and found a wonderful library by [nlohmann](https://github.com/nlohmann/json). Thankfully it supported C++11 and was a simple drop-in header file.

This was also a great opportunity to learn how to make HTTP calls with a C++ library. Previously, I only had experience opening sockets and making TCP read/write operations. I decided to go with cURL since the I needed the ability to change the headers for the API call for the security token. Thankfully cURL has an "Easy Interface" and plenty of good examples.

#### Example
```shell
$ s hello world
Suggest (v1):
"hello world"
"hello world java"
"hello world history"
"hello world c++"
"hello world example"
"hello world baby"
"hello world lyrics"
"helloworld inc"
```