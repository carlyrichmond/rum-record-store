# Access env variables using a manager such as direnv
direnv allow

export OTEL_SERVICE_NAME="record-store-server-node-js"
export OTEL_RESOURCE_ATTRIBUTES="service.version=1,deployment.environment=dev"
export OTEL_EXPORTER_OTLP_ENDPOINT="https://my-elastic-apm-server:port"
export OTEL_EXPORTER_OTLP_HEADERS="Authorization=Bearer My$3cr3tT0k3n"
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_METRICS_EXPORTER="otlp"
export OTEL_LOGS_EXPORTER="otlp"
export OTEL_NODE_RESOURCE_DETECTORS="all"
export NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"

npm run start