# How to Template

This is the template for the Publishig Lab How To's!  
Below you'll find options for this template and custom html-injections that you can use.


# This is a H1 Header
## This is a H2 Sub-header
### This is a H3 Paragraph header

Headers are created using the pound symbol (\#). A single # will create a header 1 (H1), 2 ## will create a header 2 (H2) and so on until H6. 

This is a paragraph in markdown, it is simply text. Unlike html it has no tags like \<p> to show it is a paragraph. By adding * characters I can make this word *italic* and this **bold**.
Markdown is a simple language that is easily converted to different outputs, which is why we use it in the hybrid publishing workflow.

Footnotes look like this: \[^fn-sample_footnote]

Clicking this number[^fn-sample_footnote] will lead you to a footnote.

Images are inserted like this:
\!\[](./lib/placeholder.jpg)
See example to the right:

![](./lib/placeholder.jpg)

You can find more markdown syntax on the <a href="https://daringfireball.net/projects/markdown/syntax">daringfireball site</a>.

# Expert options

## Markup for expert:

	<div class="difficulty-level expert"></div>

Result: <div class="difficulty-level expert"></div>

## Markup for moderate:

	<div class="difficulty-level moderate"></div>

Result: <div class="difficulty-level moderate"></div>

## Markup for easy:

	<div class="difficulty-level easy"></div>

Result: <div class="difficulty-level easy"></div>

<div class="links">

# This is a H1 Header

Markup for Link/Resources (blue background).
The Link/Resources lists will always appear outside any block/section.
Wrap the area in a 'div' with the class 'links'.
Example below:

	<div class='links'>
		# Your link/resource header
		Your link/resource content
	</div>
</div>


# Custom Header title

To add a your how to title to the header you have to add following div with content anywhere to your markdown file.
Example below:

	<div class='htmlTitle'>
		Your How To Title
	</div>
	
<div class='htmlTitle'>
	Your How To Title
</div>