#!/usr/bin/python
import csv
import json


with open('../data/ap-log.csv', 'rb') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    row_count = 0
    for row in csv_reader:
        if (row_count == 0):
	  print("eric")
	  row_count += 1
	  header_row = ', '.join(row)
        print(', '.join(row))
        row_count += 1
