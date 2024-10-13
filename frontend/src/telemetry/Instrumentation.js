// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

const opentelemetry = require("@opentelemetry/sdk-node");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-grpc");
const {
  OTLPMetricExporter,
} = require("@opentelemetry/exporter-metrics-otlp-grpc");
const { PeriodicExportingMetricReader } = require("@opentelemetry/sdk-metrics");

const {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
  WebTracerProvider,
} = require("@opentelemetry/sdk-trace-web");
const { ZoneContextManager } = require("@opentelemetry/context-zone");
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const {
  containerDetector,
} = require("@opentelemetry/resource-detector-container");
const {
  envDetector,
  hostDetector,
  osDetector,
  processDetector,
} = require("@opentelemetry/resources");

const provider = new WebTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

provider.register({
  contextManager: new ZoneContextManager(),
});

const sdk = new opentelemetry.NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: "http://otel-collector:4317",
  }),
  instrumentations: [
    getNodeAutoInstrumentations({
      // disable fs instrumentation to reduce noise
      "@opentelemetry/instrumentation-fs": {
        enabled: false,
      },
    }),
  ],
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: "http://otel-collector:4317",
    }),
  }),
  resourceDetectors: [
    containerDetector,
    envDetector,
    hostDetector,
    osDetector,
    processDetector,
  ],
  provider,
});

sdk.start();
