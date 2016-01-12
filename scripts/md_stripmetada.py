#!/usr/bin/env python

"""
Script removes YAML metadata from markdown files

(C) 2015 Andre Castro
(C) 2015 rewritten by Gottfried Haider (PublishingLab)

License: [GPL3](http://www.gnu.org/copyleft/gpl.html)
"""

import os, sys

input_filename = os.path.abspath(sys.argv[1])

# U enables "universal newlines", handy for odd-formated files
with open(input_filename, 'rU') as f:
	lines = f.readlines()

i = 0
start = False
while i < len(lines):
	if (lines[i].startswith('---') or lines[i].startswith('...')) and len(lines[i]) is 4:
		if start is False:
			start = i
		else:
			del lines[start:(i+1)]
			i -= (i-start)+1
			start = False
	i += 1

text = ''.join(lines)
print text
