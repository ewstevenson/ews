#!/bin/bash

TS=`date +%s`
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"metric":"sys.cpu.nice","timestamp":'$TS',"value":18,"tags":{ "host": "ericstevenson.com" } }' \
  http://ericstevenson.com:8025/api/put?details
