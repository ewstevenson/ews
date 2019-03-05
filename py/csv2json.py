#!/usr/bin/python

import csv
import json
import sys

csvfile = open('../data/ap-log.csv', 'r')
row_count = 0

with open('../data/ap-log.csv', 'rb') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    row_count = 0
    for row in csv_reader:
        if (row_count == 0):
    	  header_row = ', '.join(row)
          reader = csv.DictReader( csvfile, header_row)

for rows in csv.DictReader(csvfile):
  json.dump(rows, sys.stdout)
  sys.stdout.write('\n')

