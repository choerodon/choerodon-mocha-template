#!/bin/sh
npm run test -- --reporter mochawesome --reporter-options reportDir=./${RESULTPATH},reportFilename=${RESULTNAME} --slow ${SLOW} -t ${TIMEOUT}
cd ${RESULTPATH}
tar -czvf ${RESULTNAME}.tar.gz ${RESULTNAME}.json
curl -v -X POST ${RESULTGATEWAY}/test/v1/automation/import/report/mocha?releaseName=${RELEASENAME} -F "file=@${RESULTNAME}.tar.gz"