#!/usr/bin/python

import csv
import json
import time
import sys
import requests
import re

epoch_time = int(time.time())
csv_rows = []
header_row = []
log_body = []
payload = []
post_url = 'http://ericstevenson.com:8025/api/put?details';

with open('../data/ap-log.csv', 'rb') as csv_file:
	csv_reader = csv.reader(csv_file, delimiter=',')
	row_count = 0
	for row in csv_reader:
		if (row_count == 0):
			row_count += 1
			header_row = row
		log_body.append(row)
		row_count += 1

#print csv_rows
#print header_row
#print log_body

epoch_i = epoch_time
for log_item in log_body:
	n = 0
	epoch_i += 100000
	for i in log_item:
		h = re.sub(r'[^\w\s"]','',str(header_row[n]).replace(" ","_"))
		metric_name = "customer_id.log.ap_logs.log_id."+re.sub(r'[^\w\s"]','',h) 
		payload_item = '{ "metric":"'+metric_name+'","timestamp":'+str(epoch_i)+',"value":'+str(i)+',"tags":{ "logs": "ap-logs"}}'
		payload.append(payload_item)
		n += 1
#print payload

#metric_name = 'python.test_metric.csv'
#test_payload = '{"metric":"'+metric_name+'","timestamp":'+str(epoch_i)+',"value":'+str(i)+',"tags":{ "logs": "ap-logs" } }'
#test_payload = '{"metric":"sys.cpu.nice","timestamp":1545498162 ,"value":2,"tags":{ "host": "ericstevenson.com" } }'

for p in payload:
	print p
	request = requests.post(post_url, data=p)
	print(request.status_code, request.reason)
