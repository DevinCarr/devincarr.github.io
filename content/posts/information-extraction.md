---
title: "Information Extraction on Research Papers"
date: 2015-04-26T00:00:00-08:00
---

Research papers provide a wonderful data set to work with as they provide a diverse set of terms and complex abstraction of common knowledge. I was interested in trying to relate a large set of research papers by their concepts as an easy form of tagging/indexing. I wished to be able to have database that could be searched by a particular topic and then be able to see related papers that share similar concepts.

Having only done some basic tokenization and parsing at school while learning Haskell; I was at square one. I went to the internet to learn about the field of Information Extraction and conceptual-based relationships. I found a few articles in particular which both referenced back to a paper by Jerry R. Hobbs called [The Generic Information Extraction System](http://dl.acm.org/citation.cfm?id=1072029). This paper goes over a basic information extraction system using multiple modules in sequence to gather relationships and structure from the text.

With modularization and tokenization as the premise for conceptual tagging, I went back to find some tools to help me with the text tokenization and parsing. I found out that [Wolfram|Alpha](http://www.wolframalpha.com/) and its Mathematica language provide some simple tools to filter and parse text to provide word count, “uncommon words”, and much more. I also found that [IBM’s Alchemy API](http://www.alchemyapi.com/products/alchemylanguage) has a textual analysis service that provides concept tagging on documents with a percentage-based relevance. Together with Wolfram|Alpha and IBM’s Alchemy API, I decided to develop a concept-based extraction method with research documents as my data set.

#### Developing Conceptual Relationships on (Novel) Data Sets

A few notable things about research papers is that many concepts that researchers develop and create, have different names based on who discovered it. Most research papers are brand new developments and discoveries in new fields of research, and as such terms evolve independently in some cases. So one goal of constructing conceptual relationships is to be able to look a level higher and view the similar (but different) terms as related concepts.

Starting out, noting the most commonly used words provides an easy method to draft concepts of a research paper. After indexing all of the words and analyzing the top five most commonly used words, this can provide a draft of the baseline for the subjects of the paper. Next, I draw some conclusions from the “uncommon words” that Wolfram|Alpha provides. These, “uncommon words” are words that Wolfram|Alpha finds within the provided text that it finds are not used in common English vernacular. Lastly, looking to what the Alchemy API’s subject prediction provides, a percentage-based tolerance can be set to finalize the core concepts of the paper.

After completing all of the parsing steps, the final results should be at least five concepts that the paper covers with a correlated percentage showing how accurate/confident that the results are. Then with a provided baseline percentage, the concepts will be then be finalized as conclusive to the research paper.

One key factor that should be mentioned about the relationships of concepts is that to improve the accuracy of identifying concepts is to understand and map out a rough relationship between concepts. By constructing a relationship of concepts that either encapsulate each other or share similar ideologies, this can provide a more accurate concept deduction method. For example, if a paper is concluded to have concepts of graph theory, networking, security, and then biology. Clearly this paper is either quite a broad reach of study or the parser may have collected a bad result. So in the case that biology has a relevance percentage of 50% at the final step of parsing, the final filter can deduct a level of percentage from the concept that seems irrelevant based off of the provided relationship mapping. That way when it goes through the final filter and every concept will need at least a 70% relevance (again, just an example), the biology concept will not meet the requirements to be a concept of the paper.

Keep in mind that all of these metrics are simply just to show the how the modules would relate in deducing concepts.

_EDIT (2016): I have left this project behind in favor of helping a professor out with his new curriculum._