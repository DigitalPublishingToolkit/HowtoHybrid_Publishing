<div class="pagetitle">How To Standard Title</div>

# How to: Design Solutions for Digital Publishing

## Introduction

What are the visual options for artistic digital publications?

### What can you find in this How To?

This site shows you how to create an epub - it is part of the Hybrid Publishing Workflow for creating multiple publications from one source file (including eBooks as ePub3 files).

For more information about the Workflow and creating output for print files, visit the PublishingLab <a href="http://www.publishinglab.nl/resources/hybrid-publishing-workflow-faq/">site</a>.

You will find instructions & a template for making an ePub3, use css
styles to modify your layout, and learn about the pros & cons of a fixed
layout ePub. Finally, we look at what some other current options are for
digital publishing.

Sections:

1\. How to create an ePub  
2\. Styling ePubs  
3\. Fixed layout ePubs  
4\. Other digital publishing options

<div class="infobox">

### Who is this How To for?

Small publishers, arts publishers, designers and developers creating
digital publications.

</div>

<div class="linkbox">

### Colophon

**Author:** Jess van Zyl

**Editorial support:** Miriam Rasch

**Design:** Lasse van den Bosch & Marlon Harder (<a
href="http://template01.info">Template</a>)

**With thanks to:** Hackers&Designers, Institute of Network Cultures, Torque, Silvio Lorusso,
Andre Castro, Gottfried Haider, Michael Murtaugh and the DPT collective.

</div>

# How to create an ePub

## Intro

The Hybrid Publishing Toolkit provides two methods of creating an ePub.

**Method 1** builds on chapter 6 of the Hybrid Publishing Toolkit book, it relies on a makefile and using the command line.

**Method 2:** The latest option is to use our platform created by Gottfried Haider,
this eliminates the need for command line and simplifies the setup on
GitHub. You can find it <a
href="http://hpt.publishinglab.org/">here</a>.


### Technical considerations

Before you begin you will need:

- your text (in Word .docx format) and image files (jpg
or png).

- <a href="https://desktop.github.com/">GitHub Desktop</a> (for working collaboratively)

- <a href="http://macdown.uranusjr.com/">MacDown</a> or XCode (to edit your sourcefile which is written in markdown)

- <a
href="http://calibre-ebook.com/download">Calibre</a> (to view/edit ebooks)

If you are using Method 1, you will also need to:

- install <a href="http://pandoc.org/installing.html">Pandoc</a>

- you will need to familiarise yourself with the command line (terminal
on Mac or go to the Start menu on Windows and type cmd into search/run -
more <a
href="http://www.computerhope.com/issues/chusedos.htm">here</a>)


## How: Instructions for Creating an ePub

### Method 1

Andre Castro prepared an excellent workshop, based on an updated version
of the Hybrid Publishing Toolkit Workflow <a
href="https://github.com/DigitalPublishingToolkit/workshop-going\_hybrid/wiki">here</a>.

Below are some simplified steps:

Step 1
Once you've installed the programs listed above, visit the PublishingLab <a href="https://github.com/DigitalPublishingToolkit/Hybrid-Publishing-Resources">Resources</a> page on GitHub.

Step 2
Clone or save this resource repository to your computer
It will include several folders as well as the makefile.

Step 3
Rename this folder to your book title

Step 4
Make sure your manuscript(s) are saved as .docx files and move them to the docx folder, replacing the Test-chapter.docx file.

Step 5
Open command line (terminal on Mac)

Step 6
Use the command line to navigate to the Resources folder (that you renamed). You will need some knowledge of using the command line, you can find help with this <a
href="http://en.flossmanuals.net/command-line/getting-started/">here</a>.

Step 7
Check you have pandoc installed correctly
do this by typing 'pandoc --version' in command line

Step 8
Create the source file(s) for your ebook by typing 'make markdowns' in command line

Step 9
Now that you have markdown files, you can create an epub! type 'make epub' in command line

Step 10
Check the resources folder to see your book.epub file, which you can open with Calibre or iBooks.

If you get an error message, there is a useful resource section <a href="http://www.publishinglab.nl/resources/hybrid-publishing-workflow-faq/">here</a> to help you.

<div class="difficulty-level moderate"></div>

### Method 2

Here's a quick video of how \*the Sausage Machine\* turns a Word
document into an ePub:

<video width="100%" height="80%" loop="loop" poster="">
    <source src="lib/samplevid.mp4" type="video/mp4"/>
</video>

Using *the Sausage Machine\* platform 

Step 1 
Drag and drop your text files <a href="http://hpt.publishinglab.org/">here</a>

Step 2
Choose an output: markdown, html or ePub from the drop down menu and click 'Update'

Step 3
Create your book project on GitHub (click 'Continue on GitHub) to keep track of your versions and work collaboratively with an editor or
designer.

Once you make changes to your source file, make sure to commit your
changes on GitHub and then sync. After a few minutes \*the Sausage
Machine\* will generate a new ePub/html file with the latest changes.

<div class="difficulty-level easy"></div>

### Avoiding Errors

make sure there are no spaces or unusual characters (like %) in file names

make sure you work with .docx files not .doc

put any images (.jpg or .png) in the 'imgs' folder inside the markdown folder except the cover*

*the cover.jpg image belongs in the epub folder


### Three key things an ePub developer needs to have right

A successful ePub has been visually styled (with css and a cover), correctly classified (with metadata), and validated.

The epub folder typically has 3 important components:
<ul>
the cover image (png or jpg) 
stylesheet
metadata file
</ul>

The final book needs to have the correct cover image obviously, but you also need to be sure the metadata file has the right information in it so that people can find your book. Talk to the editor to be sure you have the right metadata information, including the epub isbn number.
Here's more information about <a href="http://www.publishinglab.nl/blog/2015/09/25/metadata-schmetadata-whats-it-good-for/">metadata</a>.

The look of your book is controlled by the styles, you can get color values and typeface suggestions from the print designer. Make sure you embed the fonts you use by including them in the make file and in the lib folder.
Here's more information about <a href="http://www.publishinglab.nl/blog/2015/07/01/epub-typography/">type in epubs</a>.

Last, but not least, the developer needs to validate epub to make sure there are no errors that will cause it to be rejected from a retailer or not open correctly for readers.

### Validating your ePub file

Make sure you validate the ePub file before you send it out into the
world. If it isn't valid Google Play Books and other ePub readers may
not be able to open your new book, causing reader frustration!

You can use the <a href="http://validator.idpf.org/">online
validator</a> for smaller ePubs (under 10MB)

The validator will show you where the errors are in your book. See the example below:

![](lib/idpf-validator.png)

The error occurs in chapter ch002.xhtml, line 47, there's an explanation that a 'referenced resource is missing', but it helps a lot to edit the book in <a href="http://calibre-ebook.com/download">Calibre</a> and further diagnose that in this case an image is missing.

Then find the missing image(s) and then fix them in the source (markdown) file. It is important that you make the corrections in the markdown file because then you just do the work once and the changes are made to the epub as well as html or icml files for the print designer.

or install the validator on your Desktop from <a
href="https://github.com/idpf/epubcheck">GitHub</a>.

The idpf includes a useful wiki to help you understand
<a
href="https://github.com/IDPF/epubcheck/wiki/Errors">errors</a>.

when validating your ePub on your desktop, navigate to the folder with
the .jar file and copy this in your commandline:

java -jar epubcheck.jar file.epub

(Make sure to replace the generic file.epub with the location + name of
your own epub.)

### Example

The workflow below is a compilation of efforts from the Hybrid Publishing Toolkit, Andre Castro, Michael Murtaugh and others from the
DPT collective.

example: <a
href="http://networkcultures.org/blog/publication/from-print-to-ebooks-a-hybrid-publishing-toolkit-for-the-arts/">From
Print to eBooks: A Hybrid Publishing Toolkit for the Arts</a>

### Sources / list of inspiration

<a
href="http://networkcultures.org/digitalpublishing/2014/10/21/hybrid-workflow-how-to-making-automated-workflows-part-2/">Hybrid
Workflow</a> is a workflow developed to help art publishers create
digital versions of their publications, focused on an ePub3 output.

<a href="http://hpt.publishinglab.org/index.php?about">The Sausage
Machine platform</a> is based on Pandoc and designed to complement
and simplify the Hybrid Publishing workflow by ouputting the desired
formats and setting up a repository for you.

<a
href="http://en.flossmanuals.net/command-line/getting-started/"> A
good resource </a> for getting started with command line.

# Styling Reflowable ePubs 2/4

## Intro

Once you've created your ePub3 using the Hybrid Publishing Toolkit
method \[link to page 1/4\] or \*the Sausage Machine\* <a
href="http://hpt.publishinglab.org/index.php?about">platform</a>,
you can add your own style to it. This can be done with some changes to
the markdown file and mostly through the css stylesheet.

### Example

PublishingLab template file with test cover.

### technical considerations

To create and distribute your ePub you will need at least a basic
knowledge of css and some knowledge of the specifications of the idpf to
validate your book. Test the ePub on different ereader devices to know
which features are supported. Note: The control you have with css on
websites is much more limited in eBooks as of this writing (2016).

## How

Step 1
Once you have an .epub file from Method 1 or Method 2 above, you will need to open the epub folder to access the css.

Step 2
Open your epub with Calibre, and right click to edit book

Step 3
You can make changes to the stylesheet of your epub in Calibre and experiment visually because Calibre allows you to see the changes immediately. Once you decide on the styles you want to keep then change the .css file.

Step 4
open the styles.epub.css with a text editor (like Xcode or Sublime) and copy the styles that you chose from Calibre to the stylesheet.

**Remember**

Though you may take time choosing fonts and colors for your ePubs, they
can and will be changed by the human readers or by the devices.

As an example, this is the same book as seen on a mobile phone (Android
OS with Gitden reader):

and on a Nook e-reader:

Test the ebook on the device(s) your readers most commonly use, keeping
in mind that you do not have as much control in the ebook format as you
do in print or web.

### sources / list of inspiration

These publications were all created using the Hybrid Publishing method:

The publications series of the INC <a
href="http://networkcultures.org/publications/#epub">here</a>.

Knowledge Mile <a
href="http://www.publishinglab.nl/blog/publication/the-hackable-city-a-research-manifesto-and-design-toolkit/">series</a>

# Fixed Layout ePub 3/4

## Intro

A fixed layout epub (FXL) can be described as a hybrid of pdf & ePub;
combining the design control of a pdf with ePub’s searchability and the
ability to be sold on Amazon. A main disadvantage is the lack of
distribution opportunities (meaning not many ereaders will display
them). The other disadvantage is the format is not responsive - like a
.pdf it requires a lot of zooming to read on a mobile. You can see
examples <a
href="http://www.publishinglab.nl/blog/2015/11/09/fixed-layout-epubs-useful-or-backward/">here</a>.

### The pros

Distribution: while you can't currently sell .pdfs, you can sell ePubs
in iBookstore and on Amazon

Live text: all written content is searchable (for example, captions over
photos do not have to be part of the image)

Control over page design

Full-bleed images and backgrounds

The cons

Labor intensive: InDD CS5.5 and earlier do not support exporting fixed
layouts, so that means coding it by hand. Each page of a FXL has it's
own .xhtml file, unlike reflowable ePubs which have one .xhtml per
chapter

Limited distribution opportunities: very few readers support it at the
moment. Apple is the main re-seller and this may result in needing to
design 2 layouts (i.e. a tweaked version for Kobo)

The format doesn't scale for mobile reading.

### The controversy

<blockquote>

"I think they sound like a pointless step backward – a filetype with all
the rigidity of PDF but with none of the cross-platform support." - Ben
Hollingum
</blockquote>

The quote above epitomises the Digital Reader article's list of problems
with fixed layout books. Digital Reader proposes that eBook designers
should move away from trying to keep the printed book format as a
template for digital publishing. Craig Mod argues that the bond between
reader and text can be strengthened or broken by the container, I see
this as an affirmation that it needs serious consideration by designers
and developers. He sums up his concern below:

<blockquote>
Amazon and Apple are the paper‑makers, the typographers, the printers,
the binders and the distributors: if they don’t make a style of paper
you like, too bad. The boundaries of digital book design are beholden to
their whim. - Craig Mod
</blockquote>

Fixed layout books are often children's books, photography or cookbooks. But complex visual layouts with layers and transparencies won't export perfectly without some additional work, usually requiring flattened artwork.


To decide whether using fixed layout is right for a project, the
publisher needs a clear idea of what their reader's devices are - it
takes too much effort to create a layout that might work well in i-Books
and not at all on other readers. This problem of limited implementation
affects fixed layout ePubs as well as reflowable ePubs which often
support only a very few styling options. The IDPF cautions eBook
developers to be aware that reading systems typically restrict the
ability to modify body margins indicates this limitation. Which
essentially means designers are bound by the choices of distributors and
e-reader makers.

As epubsecrets caution: FXL epubs will not work at all on any Kindle devices and conversion to the KF8-FXL format will be difficult.

### The experiment(s)

To demonstrate, I created a fixed layout epub in InDD CC 2015. It didn't
take much time to file > export fixed layout, and the pros are that
it retains my weird text wrap, and the caption over the video. Since I
wrote about the display in the cons section above, I thought I'd also
show what it looks like - not just tell. When viewed in iBooks, changing
the width of the viewport (screen) does not change the size of the text
and it is only suitable for viewing on an ipad.

![](lib/iphone4s-300x230.jpg)

Fixed layout viewed on iPhone4s

### Reflowable vs Fixed Format

It's obvious that the reading experience is just as difficult on a
mobile where you have to zoom to read as it is reading pdfs. Another
difference between fixed and reflowable ePubs is shown below, see that
there are 3 pages in this book - and 3 corresponding xhtml files,
imagine if it had been 130 pages.

### Examples

Now that you've seen the rough-and ready test, here is an exciting
example of a hand-coded ePub3, <a
href="https://vimeo.com/25185473">Kadath</a>, by Walrus Studio,
which includes columns and an interactive map. This book is really
inspiring, but it's also custom-made - requiring a skilled developer and
robust budget.

### Additional Reading

For a really clear distinction between ePubs, PDFs and Apps see this
excellent article from Indesignsecrets

epubsecrets provides more in-depth information on exporting fixed layout epubs from InDesign <a href="http://epubsecrets.com/adobes-new-fxl-export.php">here</a>.

# Other Digital Publishing Options 4/4

## Intro

eBooks come in many forms, from native Apps to online reading
experiences that cross-over to print with the use of MediaWiki and the
newly developed htmltoprint workflow. The PublishingLab has spent part
of 2015 working on a custom App and an online reading reading
experience. Unlike creating ePubs, which can be done with the help of
Pandoc, both of these workflows required skilled developers.


### Example 1

Knowledge Matters - custom built App

The PublishingLab worked together with UNStudio to prototype a custom
App, in the form of an enhanced digital book that complemented their
print edition.

Read more about the project <a
href="http://www.publishinglab.nl/unstudio/">here</a>.

The team created a custom menu for the book:

![](lib/menu-UNStudio.jpg)

With rich media eBooks like this, it is possible to include more
interactive features. This chapter starts with a video scroll
introduction that the user controls by swiping down on the app.

![](lib/video-scroll.gif)

Since this App was specifically designed for an iPad, it could
capitalise on the built-in functions of the iPad, like swiping to the
next chapter.

<video width="100%" height="80%" loop="loop" poster="">
<source src="lib/samplevid.mp4" type="video/mp4" />
</video>

Format: Web App

<div class="difficulty-level expert"></div>

### Example 2:

Navigating Theory on Demand: an online reading experience of TOD17 GrayZones 

PublishingLab collaborated with the Institute of Network Cultures to create a web platform for reading
the latest Theory on Demand publication. 
The previous outputs for Theory on Demand has been print on demand and ePub formats, but the team saw an opportunity to improve the accessibility of the content and navigation design in html.

Their site layout included a Table of Contents and expandable tools panel.

![](lib/NavigatingTOD-cite.png)

They incorporated various functions to make it easier to search, highlight and cite the content of the book in the browser. See the citation function in the tools panel:

![](lib/NavigatingTOD-tools.png)

Read more about the project <a
href="http://www.publishinglab.nl/navigating-tod/">here</a>.

Format: Online reading, ePub3 & Print on Demand (POD)

<div class="difficulty-level expert"></div>


### technical considerations

The UNStudio App project was built as a WebApp and then bundled as a native App for IOS with the client specifying that it be designed for one platform: the iPad.

Navigating TOD was built with html, javascript and bootstrap using plugins for added functions like highlighting or adding dates to citation.

## How: iPad App & online reading

The UNStudio App was built with html, css and javascript by a team of 4 interns + a developer.

The INC project involved conversion of the manuscript using the HPT workflow to create html files from the Word documents. From there the team used javascript and plugins to build custom functions with some support from a developer.

### sources / list of inspiration

PublishingLab spoke to other makers and publishers about their digital publications. This is a short list of makers we found so far...

<a href="http://torquetorque.net/">Torque</a>, a UK based publisher created ePubs as well as developing a speed reading App for
their first book.

Format: App & ePub

<a href="http://hackersanddesigners.nl/#/">Hackers&Designers</a>
use MediaWiki and <a href="https://latex-project.org/intro.html">LaTeX</a> to create their latest book: About Bugs, Bots and Bytes.

Format: Online reading & print


Andre Castro used MediaWiki as well as css to create a printed version of the design magazine <a href="http://beyond-social.org/">Beyond Social</a> in partnership with the design studio <a
href="http://template01.info/">Template</a>.

Format: Online reading & print

<a href="http://beta.thepeoplesebook.net/">The People's
E-Book</a> is a super-simple online tool with an intuitive visual interface to allow anyone to make e-books quickly and for free.
You can find out more <a
href="http://networkcultures.org/outofink/2013/02/11/the-peoples-e-book/">here</a>.

Format: Platform & ePub3

Eric Gardner & The Getty
You can find out more about the extension Gardner is writing to create online books for academic publications <a href="http://egardner.github.io/posts/2015/building-books-with-middleman/">here</a>.

Format: Static website(s)


### The other possibilities...

What can be done about visual layouts in digital publications? The International Digital Publishing Forum (IDPF) is writing standards, however it is unclear whether these will be viable because the e-reader market is so varied in its adoption of standards.

Some critics claim that ebook development is 15 years behind the web in terms of development and standards being adopted by ereaders. The web has developed faster, in part due to the adoption of common standards between major brosers like Safari, Chrome & Firefox. The variety and lower financial imperative to adhere to and develop standards in ereaders may mean visual publications in ePub format remain limited.

With the rise of books online, like Ford's <a href="http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/">What is Code</a>, web might be a better format for arts publications than epub.

To see what is happening with epub and html, here are some interesting experiments and standards, starting with an example and how-to:

Adaptive layout <a href="http://sorotokin.com/adaptive-layout/">how-to </a>by Sorotokin

<a href="https://www.w3.org/TR/css3-page/">CSS Paged Media Module</a>, which has been a working draft since 2013 from the W3

Media Queries, which help text display on different devices by linking to a stylesheet relevant to the targeted device's capabilities. <a href="http://www.pigsgourdsandwikis.com/2012/01/media-queries-for-formatting-poetry-on.html">Liz Castro</a> shows how she used media queries to better display poetry across
devices.

The IDPF brought out a specification for ePub Adaptive Layout <a href="http://www.idpf.org/epub/pgt/">here</a>.

### Future

Ideally, artist books could incorporate the interactivity made possible with ePub3 with custom layouts which really reflect the unique visual quality of the work. It's not necessarily about copying the beautiful print spreads of art publishers, or following the highly-customised methods of an App, but looking for ways digital publishing visual books can be improved with the evolving tools avaliable.

<blockquote>
"With a proper API (an application programming interface, which allows
one authorised application to read and manipulate data in another),
entrepreneurs outside of Amazon or Apple could step in and offer more
beautiful, efficient, or innovative reading containers for our books,
leaving the bigger companies to do what they do best: payments and
infrastructure." - Craig Mod
</blockquote>

The PublishingLab is looking for, and creating new ways of publishing digital books. Please <a href="http://www.publishinglab.nl/contact/">contact</a> us if you have a project to share or want to partner with us.
