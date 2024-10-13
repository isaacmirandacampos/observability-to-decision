# Use the official OpenTelemetry Collector image as the base
FROM otel/opentelemetry-collector-contrib:latest

# Copy your OpenTelemetry Collector configuration into the image
COPY otel-collector-config.yaml /etc/otel-collector-config.yaml

# Command to run the collector using your custom configuration
CMD ["--config=/etc/otel-collector-config.yaml"]
