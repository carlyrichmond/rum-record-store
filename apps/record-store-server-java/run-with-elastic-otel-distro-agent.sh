# WARNING: Async-profiler 1.x does not work on Apple silicon for this agent

# Using a environment variable manager such as direnv
# Ensure the following variables exist:
#   OTEL_SERVICE_NAME=record-store-server-java
#   OTEL_RESOURCE_ATTRIBUTES=service.version=1,deployment.environment=dev
#   OTEL_EXPORTER_OTLP_ENDPOINT="https://my-elastic-apm:port"
#   OTEL_EXPORTER_OTLP_HEADERS=Authorization=Bearer $ELASTIC_APM_AUTH_TOKEN
#   OTEL_TRACES_EXPORTER="otlp"
#   OTEL_METRICS_EXPORTER="otlp"
#   OTEL_LOGS_EXPORTER="otlp"

direnv allow

# Start application using downloaded Elastic Java OTel Distro agent jar

mvn spring-boot:run -Dspring-boot.run.jvmArguments="-javaagent:src/main/resources/otel/elastic-otel-javaagent-0.3.2.jar"
