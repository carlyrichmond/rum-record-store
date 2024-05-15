# WARNING: Async-profiler 1.x does not work on Apple silicon for this agent

# Using a environment variable manager such as direnv
# Ensure the following variables exist:
#   ELASTIC_APM_SERVICE_NAME=record-store-server-java-elastic
#   ELASTIC_APM_APPLICATION_PACKAGES=com.rum.records.store.server.rumrecordsstore
#   ELASTIC_APM_SERVER_URL="https://my-elastic-apm:port"
#   ELASTIC_APM_SERVICE_VERSION=record-store-server-java
#   ELASTIC_APM_SECRET_TOKEN="myRandomToken"
#   ELASTIC_APM_ENVIRONMENT=dev // optional
#   ELASTIC_APM_ENABLE_EXPERIMENTAL_INSTRUMENTATIONS=true // optional

direnv allow

# Start application using downloaded Elastic Java OTel Distro agent jar

mvn spring-boot:run -Dspring-boot.run.jvmArguments="-javaagent:src/main/resources/elastic-apm/elastic-apm-agent-1.49.0.jar"
