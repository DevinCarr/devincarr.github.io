---
title: "Knowledge Transfers"
date: 2021-11-02T22:04:54-07:00
---

Knowledge transfers are rough. Thankfully there are at least two people involved in a knowledge transfer but sometimes inequal effort is put forth from each. Sometimes the knowledge owner is leaving and their mind is already thinking on their next opportunity which leaves their transfer lacking. As a new owner, it is vital that you capture as much information as possible from the previous owner. New owners will struggle with what to question since each project/feature/system is unique and has it's own history or problems it shelters. Following is a short compiled list that: owners should help provide; and initiates should inquire upon.

# How to have a fruitful transfer of knowledge

## 1. Document everything

There __needs__ to be a document that contains all the information conveyed.

## 2. Diagrams and Figures

Diagrams are great to help convey communication patterns or complicated state machine behavior.

## 3. Current issues and recurrent problems

Every project or feature has a history, be it short or long. An overview of current open issues or problems can help prepare the new owner for any future investigations.

## 4. Historical Architecture Decisions

Make sure to capture any large decisions however they were concluded to help convey previous context at the beginning of the feature's life. This helps emensely when reviewing foreign code and coming across the: "What the heck is this done this way?" problem.

## 5. Points of Contact

Gather points of contact if the feature area or system interacts with external systems (e.g. Databases, APIs).

## 6. Transfer session/meeting

Have a knowledge transfer session to provide a simple and approachable forum for the new owner. Even if this session is short, it lowers the barrier for a possibly hesitant new owner to easily approach with questions.

## 6a. Q&A Documented

Any questions outlined during the knowledge transfer session can be documented as a Q&A section in the document. This helps any other future owners and improves the document in a quick-and-easy fashion.

# Bonus points

## Small change/improvement

Encourage the new owner to work through a small improvement in the new area. This is a great opportunity for the old owner to still be available for support while providing hands-on growth in the new area. Sometimes this is difficult if a knowledge transfer is from a departing employee, since they typically don't have the time to assist in a more prolonged transfer.

# Other options

## Code walkthroughs

I'm on the fence about this type of context conveyance. On one hand, if the code is well designed and terse, a walkthrough can be of value. Other times, the feature area may be densely intermingled with other features or be a shared core component which is spread out across the repository. In this case, it may become too much of an overload to easily encapsulate how the component is utilized or which areas to begin an investigation.

