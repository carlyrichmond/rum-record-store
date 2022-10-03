curl -X POST "https://my-deployment-9f9945.kb.eu-west-2.aws.cloud.es.io:9243/api/apm/sourcemaps" \
-H 'Content-Type: multipart/form-data' \
-H 'kbn-xsrf: true' \
-H 'Authorization: ApiKey SDY3R0lZTUJ3dmd3c3RjeWpsTXE6Qmk2R2N4YmVUREtfT1JUZEVTckdvQQ==' \
-F 'service_name="rum-records-react-ui"' \
-F 'service_version="1"' \
-F 'bundle_filepath="http://localhost:4200/main.d36a775bda6144fd.chunk.js"' \
-F 'sourcemap=@./main.d36a775bda6144fd.js.map'

curl -X POST "https://my-deployment-9f9945.kb.eu-west-2.aws.cloud.es.io:9243/api/apm/sourcemaps" \
-H 'Content-Type: multipart/form-data' \
-H 'kbn-xsrf: true' \
-H 'Authorization: ApiKey SDY3R0lZTUJ3dmd3c3RjeWpsTXE6Qmk2R2N4YmVUREtfT1JUZEVTckdvQQ==' \
-F 'service_name="rum-records-react-ui"' \
-F 'service_version="1"' \
-F 'bundle_filepath="http://localhost:4200/polyfills.2208b965bc926819.js"' \
-F 'sourcemap=@./polyfills.2208b965bc926819.js.map'

curl -X POST "https://my-deployment-9f9945.kb.eu-west-2.aws.cloud.es.io:9243/api/apm/sourcemaps" \
-H 'Content-Type: multipart/form-data' \
-H 'kbn-xsrf: true' \
-H 'Authorization: ApiKey SDY3R0lZTUJ3dmd3c3RjeWpsTXE6Qmk2R2N4YmVUREtfT1JUZEVTckdvQQ==' \
-F 'service_name="rum-records-react-ui"' \
-F 'service_version="1"' \
-F 'bundle_filepath="http://localhost:4200/runtime.fcb9dd166a3c6b84.js"' \
-F 'sourcemap=@./runtime.fcb9dd166a3c6b84.js.map'

curl -X GET "https://my-deployment-9f9945.kb.eu-west-2.aws.cloud.es.io:9243/api/apm/sourcemaps" \
-H 'Content-Type: application/json' \
-H 'kbn-xsrf: true'  \
-H "Authorization: ApiKey SDY3R0lZTUJ3dmd3c3RjeWpsTXE6Qmk2R2N4YmVUREtfT1JUZEVTckdvQQ==" 