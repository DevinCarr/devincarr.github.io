---
title: "xtr: Cross-Traceroute"
date: 2022-02-07T00:00:00-08:00
---

Given the current state of IPv6 adoption and IPv4 market rates, does my ISP (and subsequent routers along the path) provide similar routes for IPv4 and IPv6 traffic? Are there any routers along a path that have both a A and AAAA address associated for it?

I had these questions recently when I was thinking back to some of my learnings from my college networking class. I remember learning about traceroute and the beautiful realization that your path along the internet can be visualized (in some capacity). The explicit visualization of what happens to the latency from packets once they begin the travel along the bottom of the ocean to cross continents is really eye-opening. In the end it is just a friendly reminder that physics really still does have us beat.

In an effort to learn (re-learn) more about some of the lower level networking concepts, that I have had the pleasure in the past 5 years generally ignoring in my business application service job. I broke out a new language and some RFCs to tackle the questions above.

Starting back into Go was fraught with frequent googling for things like: "golang map", "golang range", "golang channels". I know about most of things but more in the abstract way that I know they exist and what they might be used for. I still hadn't had the experience in-place to provide me with the requisite skills for typing them out correctly every time. I'm still working on that, but I know that knowledge only comes after reading good code, getting your code reviewed by someone who knows the language, and additionally many thousands of lines written.

Once I had wrapped my head around the ICMP package that the golang team provides here: [golang.org/x/net/icmp](https://pkg.go.dev/golang.org/x/net/icmp) along with the [RFC 4443](https://datatracker.ietf.org/doc/html/rfc4443) in hand, I followed the example to send a ICMPv6 echo packet out. Thankfully that was really quite easy to follow and understand and was written in a way that I could easy convert the code over to handle the ICMPv4 ([RFC 792](https://datatracker.ietf.org/doc/html/rfc792)) packets as well.

Once I had effectively copied the basic functionality of traceroute, I began the process of storing the routes, running reverse dns lookups on the IPs found, and comparing them against each other. This process wasn't too difficult, but I did run into some basic gotchas from Go that I had to grok before I could continue. I'll maybe layout those in another post some other day to properly force myself to remember their usage with some examples. In the meantime, I recommend [https://gobyexample.com/](https://gobyexample.com/) for any quick and basic explanations for go features.

At the end of comparing the results, I was able to conclude that I have at least on router in my route to most internet backbones that advertises both A and AAAA endpoints.

```shell
$ ./xtr devincarr.com
v4: 104.21.34.245
 1: 10.0.0.1
 2: <omitted for privacy>
 3: <omitted for privacy>
 4: be-232-rar01.santaclara.ca.sfba.comcast.net. (162.151.78.253)
 5: be-39911-cs01.sunnyvale.ca.ibone.comcast.net. (96.110.41.113)
 6: be-1112-cr12.sunnyvale.ca.ibone.comcast.net. (96.110.46.6)
 7: be-302-cr12.9greatoaks.ca.ibone.comcast.net. (96.110.37.174)
 8: be-1412-cs04.9greatoaks.ca.ibone.comcast.net. (68.86.166.169)
 9: be-1411-cr11.9greatoaks.ca.ibone.comcast.net. (68.86.166.166)
10: be-303-cr11.losangeles.ca.ibone.comcast.net. (96.110.36.153)
11: be-1211-cs02.losangeles.ca.ibone.comcast.net. (96.110.45.169)
12: be-3211-pe11.600wseventh.ca.ibone.comcast.net. (96.110.33.54)
13: 50.242.151.226
14: 172.70.212.2
15: 104.21.34.245

v6: 2606:4700:3030::6815:22f5
 1: <omitted for privacy>
 2: <omitted for privacy>
 3: <omitted for privacy>
 4: be-1-rur01.santaclara.ca.sfba.comcast.net. (2001:558:80:402::1)
 5: be-232-rar01.santaclara.ca.sfba.comcast.net. (2001:558:80:213::1)
 6: *
 7: *
 8: *
 9: *
10: *
11: 2001:559::2e6
12: 2606:4700:3030::6815:22f5

xtr: 1
be-232-rar01.santaclara.ca.sfba.comcast.net. (162.151.78.253) (2001:558:80:213::1)
```

In the above example, the `be-232-rar01.santaclara.ca.sfba.comcast.net` hostname is both A (162.151.78.253) and AAAA (2001:558:80:213::1) addresses along the route to the final destination `devincarr.com`.

In my experimenting (between routers dropping my ICMP packets), the routes are typically similar in length, and I never saw any more than a 3-4 hop difference between IPv4 and IPv6 routes. Granted my experiment set was quite small. Adding durations to help also check to see if IPv4 or IPv6 provides the faster route could also be a fun feature for the program. I know the [Happy Eyeballs algorithm](https://en.wikipedia.org/wiki/Happy_Eyeballs) does this already in most modern web browsers, but it is still an interesting experiment since each domain can have a different route depending on the global nature of the service owner and not all protocols implement it yet.

I also did the above example for a few other domains and I was able to continually hit that same shared router. So for my personal network, it seems that large router connects to many other internet exchanges in the comcast network (my current ISP). I'll likely try this experiment every so often from my own network and other networks that I could setup in other regions to see how they fare.

If you want to try this experiment yourself, I have provided the Go code here: [https://github.com/DevinCarr/xtr](https://github.com/DevinCarr/xtr).