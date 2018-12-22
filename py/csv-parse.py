#!/usr/bin/python
import csv
import json
import time
import sys

epoch_time = int(time.time())
csv_rows = []
header_row = []
log_body = []
payload = []

with open('../data/ap-log.csv', 'rb') as csv_file:
	csv_reader = csv.reader(csv_file, delimiter=',')
	row_count = 0
	for row in csv_reader:
		if (row_count == 0):
			row_count += 1
			header_row.append(row)
	epoch_time +=100
	r = str(epoch_time)+","
	r += (', '.join(row))
	this_row = r.split(",")
	log_body.append(this_row)
	row_count += 1

#print csv_rows
#print header_row
#print log_body

for log_item in log_body:
	print log_item


#payload = '{"metric":"sys.cpu.nice","timestamp":'.$TS.',"value":'.$value.',"tags":{ "host": "ericstevenson.com" } }';
