#!/bin/bash
set -o nounset
set -o errexit
set -o pipefail

TSDB_CMD="../../../wwwOnNas/opentsdb/opentsdb/build/tsdb"
START_TIME="1y-ago"
END_TIME="21d-ago"
SLEEP=10

METRICS=$( $TSDB_CMD uid grep . | grep -a ^metrics | awk '{print $2}' | sed 's/\:$//g' )
for METRIC in ${METRICS}; do
  CMD="${TSDB_CMD} scan --delete ${START_TIME} ${END_TIME} sum ${METRIC}"
  echo "RUNNING: ${CMD}"
  ${CMD} > /dev/null
  sleep ${SLEEP}
done
