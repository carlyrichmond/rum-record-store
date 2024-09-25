# npm install @opentelemetry/api @opentelemetry/auto-instrumentations-node

export OTEL_RESOURCE_ATTRIBUTES=service.version=1,deployment.environment=dev
export OTEL_SERVICE_NAME=record-store-server-js
export OTEL_EXPORTER_OTLP_ENDPOINT=https://my-elastic-deployment:port
export OTEL_EXPORTER_OTLP_HEADERS="Authorization=Bearer my-token"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os,process"

export OTEL_TRACES_EXPORTER=otlp

# Currently only traces are supported for env variable configuration, metrics need to be manually exported
export OTEL_METRICS_EXPORTER=otlp

# Logs currently under development
export OTEL_LOGS_EXPORTER=otlp

export NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"

# EDOT alternative 
# npm install @elastic/opentelemetry-node
# export NODE_OPTIONS="--require @elastic/opentelemetry-node"

npm run start