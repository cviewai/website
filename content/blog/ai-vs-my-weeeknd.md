---
title: "AI vs. My Weekend Plans: A Controller’s Story"
date: "2025-10-12"
author: "Jay Swaminathan"
excerpt: "A story about how a non-profit controller saved their weekend by using AI to build custom reports in QuickBooks."
slug: "ai-vs-my-weekend"
---

**AI vs. My Weekend Plans: A Controller’s Story**

**The One Where AI Saved My Weekend**

As the interim controller at a non-profit, my job isn’t always glamorous — especially when it comes to building custom reports in QuickBooks. We track different grants by class, and that includes both revenue and expenses. It’s a bit more involved than your typical for-profit setup where you’re just slicing SG\&A by department. Grants add an extra layer of complexity, and sometimes that layer feels about a mile thick.

Last week, I was given a task that sounded straightforward: build a multi-period P\&L that shows **revenue by class**, but with a twist — Grants for services will require bifurcation into two groups viz homeless services and mobile services. Additionally, donations and other income needed to be grouped separately, not under any class. And while revenue needed that level of detail, expenses could just be grouped together — no class breakdown required.

Seems simple enough, right? Right… until you try doing it in QuickBooks.

**The Usual Way (A.K.A. Spreadsheet Purgatory)**

Normally, I’d approach this by:

1. Exporting 8 or 9 P\&L by Class reports — one for each period — either through Excel or the Google Sheets plugin
2. Then I’d build a master sheet using a web of INDEX/MATCH or XLOOKUP formulas, stitching all those reports together like Frankenstein’s monster
3. And of course, I’d have to double- and triple-check every number to make sure nothing slipped through the cracks.

I estimated it would take me **five hours**, minimum. And because of deadlines, that meant sacrificing a chunk of my weekend.

**Enter: AI (Because I Like My Weekends)**

Before diving into spreadsheets, I paused and thought: Why not let AI try first? I’ve been using [Vision](https://vision.crystalview.ai) with Gemini Pro, and it’s been surprisingly capable with structured data and logic-heavy tasks. _To truly understand what I mean, I encourage you to experience Vision by CrystalView for yourself._

Well \- I gave it a shot.

I prompted it to combine revenue based on the starting class name — basically, using the parent class structure. (QuickBooks stores class names as _Parent: Class_, which makes grouping a little tricky unless you're super specific)

I also explained the formatting needs — how to handle Donations and Other Income separately, and to skip class-based expense reporting altogether.

**The First Draft: Almost There**

The AI came back with a result. I noticed something was off in one of the class summaries. The number just didn’t add up.

I couldn’t immediately spot the issue, so I asked the AI to explain its steps — how it arrived at that total. It responded that it had used the **Sales by Customer Summary** report to pull revenue by class. That made me pause.

Given how we abuse the Credit Memo transaction internally, I realized that ‘Sales by Customer Summary’ was skewed.

I could’ve fixed the underlying transactions, but honestly I would prefer to future proof myself by connecting AI to the most comprehensive report than to use a band aid one time solution. So instead, I asked the AI to use the **P\&L by Class** report— which is what we would’ve defaulted to manually anyway.

**The Second Draft: Closer… But Still Off**

The AI reworked the report using the new source and sent me the updated numbers.

This time, it was close — but still off by about **$10K** for a specific period and class. Not huge, but enough to matter.

So I nudged it again, pointing out the exact discrepancy. It responded (politely, as always) with an apology and explained that it had used the **total income** amount instead of pulling from a **specific revenue account**.

It adjusted its logic, reran the calculations, and finally — everything tied out.

**Lessons Learned**

What would’ve been five hours of tedious spreadsheet work turned into maybe **30 minutes** of interactive debugging with an AI assistant. Sure, it wasn’t perfect out of the gate — but neither am I. The difference is, the AI doesn’t complain, and it learns fast.

And perhaps most importantly: I got to keep my weekend.

I liked the output, copied it and created my final output. I also asked it to summarize the whole discussion into a prompt that I can use in the future and it gave me this.

**Final Conclusion**

**Time spent on adjustments and getting the final result:** 30 minutes

**Time saved – a good 4 hours**

**Is validation still required each time?** Yes

**What could have been improved?** Perhaps asking the model to validate the final numbers right from the initial prompt.

**Is it making my day better?** Absolutely, yes.
