# Access env variables using a manager such as direnv
direnv allow

export OTEL_SERVICE_NAME="record-store-server-node-js"
export NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"

npm run start