# Makefile for INC hybrid publications

## Issues:
# * why can't i make icmls before making markdowns ??

# Spaces and colons in filenames are a problem
# http://stackoverflow.com/questions/13963563/using-makefile-wildcard-command-for-file-names-with-spaces/13963859#13963859
alldocx=$(wildcard docx/*.docx)
allmarkdown=$(filter-out md/book.md, $(shell ls md/*.md)) # TODO: add if, so that if no md is present no error: "ls: cannot access md/*.md: No such file or directory"
markdowns_compound=compound_src.md
epub=book.epub
icmls=$(wildcard icml/*.icml)


test: $(allmarkdown)
	echo "start" ; 
	echo $(allmarkdown) ; 
	echo "end" ;

folders:
	mkdir docx/ ; \
	mkdir md/ ; \
	mkdir md/imgs/ ; \
	mkdir icml/ ; \
	mkdir lib/ ; \
	mkdir html/ ; \
	mkdir scribus_html/ ;

markdowns:$(alldocx) # convert docx to md
	for i in $(alldocx) ; \
	do md=md/`basename $$i .docx`.md ; \
	pandoc $$i title.txt \
	       	--from=docx \
		--to=markdown \
	       	--atx-headers \
		--template=essay.md.template \
		-o $$md ; \
	done



icmls: $(allmarkdown)
	for i in $(allmarkdown) ; \
	do icml=icml/`basename $$i .md`.icml ; \
	./scripts/md_stripmetada.py $$i > md/tmp.md ; \
	pandoc md/tmp.md \
		--from=markdown \
		--to=icml \
		--self-contained \
		-o $$icml ; \
	rm -f md/tmp.md ; \
	done

#pandoc -f markdown -t html5 --template=scribus.html.template md/1_2-Berardi.md
scribus: $(allmarkdown)
	for i in $(allmarkdown) ; \
	do html=`basename $$i .md`.html ; \
	./scripts/md_stripmetada.py $$i > md/tmp.md ; \
	pandoc md/tmp.md \
		--from=markdown \
		--to=html5 \
		--template=scribus.html.template \
		-o scribus_html/$$html ; \
	done

html: book.md
	cd md && pandoc --include-in-header=../html/ext-scripts-and-styles.html --include-in-header=../html/scripts.html.js --include-in-header=../html/style.html.css -s --section-divs --from markdown --to html -o ../book.html book.md

book.md: clean $(allmarkdown)
	for i in $(allmarkdown) ; \
	do ./scripts/md_stripmetada.py $$i >> md/book.md ; \
	done
#Note: md_urlize.py script requires Django to be installed


# # GH: see https://github.com/jgm/pandoc/issues/1939
# book.epub: clean $(allmarkdown) book.md epub/metadata.xml epub/styles.epub.css epub/cover.jpg
# 	cd md && pandoc \
# 		--from markdown \
# 		--to epub3 \
# 		--self-contained \
# 		--epub-chapter-level=1 \
# 		--epub-stylesheet=../epub/styles.epub.css \
# 		--epub-cover-image=../epub/cover.jpg \
# 		--epub-metadata=../epub/metadata.xml \
# 		--default-image-extension png \
# 		--toc-depth=1 \
# 		--epub-embed-font=../lib/OpenSans-Light.otf \
# 		--epub-embed-font=../lib/OpenSans-LightItalic.otf \
# 		--epub-embed-font=../lib/VAGRoundedStd-Black.otf \
# 		--epub-embed-font=../lib/VAGRoundedStd-Bold.otf \
# 		--epub-embed-font=../lib/OpenSans-Semibold.otf \
# 		-o ../book.epub \
# 		book.md && \
# 		cd ..

book.epub: clean $(allmarkdown) book.md epub/metadata.xml epub/styles.epub.css epub/cover.jpg
	pandoc \
		--from markdown \
		--to epub3 \
		--self-contained \
		--epub-chapter-level=1 \
		--epub-stylesheet=epub/styles.epub.css \
		--epub-cover-image=epub/cover.jpg \
		--epub-metadata=epub/metadata.xml \
		--default-image-extension png \
		--toc-depth=1 \
		--epub-embed-font=lib/OpenSans-Light.otf \
		--epub-embed-font=lib/OpenSans-LightItalic.otf \
		--epub-embed-font=lib/VAGRoundedStd-Black.otf \
		--epub-embed-font=lib/VAGRoundedStd-Bold.otf \
		--epub-embed-font=lib/OpenSans-Semibold.otf \
		-o ./book.epub \
		md/book.md

clean:  # remove outputs
	rm -f md/book.md  
	rm -f *~ */*~  #emacs files
# improve rule: rm if file exits

all: icmls html book.epub clean
