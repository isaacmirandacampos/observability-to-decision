import {
  CompositePropagator,
  W3CBaggagePropagator,
  W3CTraceContextPropagator,
} from "@opentelemetry/core";
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { getWebAutoInstrumentations } from "@opentelemetry/auto-instrumentations-web";
import { Resource, browserDetector } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { SessionIdProcessor } from "./SessionIdProcessor";
import { detectResourcesSync } from "@opentelemetry/resources/build/src/detect-resources";
import { ZoneContextManager } from "@opentelemetry/context-zone";

const {
  NEXT_PUBLIC_OTEL_SERVICE_NAME = "frontend-service",
  NEXT_PUBLIC_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT = "",
  IS_SYNTHETIC_REQUEST = "",
} = {};

const FrontendTracer = (collectorString: string) => {
  let resource = new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: NEXT_PUBLIC_OTEL_SERVICE_NAME,
  });

  const detectedResources = detectResourcesSync({
    detectors: [browserDetector],
  });
  resource = resource.merge(detectedResources);
  const provider = new WebTracerProvider({ resource });

  provider.addSpanProcessor(new SessionIdProcessor());

  provider.addSpanProcessor(
    new BatchSpanProcessor(
      new OTLPTraceExporter({
        url:
          NEXT_PUBLIC_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT ||
          collectorString ||
          "http://otel-collector:4318/v1/traces",
      }),
      {
        scheduledDelayMillis: 500,
      },
    ),
  );

  const contextManager = new ZoneContextManager();

  provider.register({
    contextManager,
    propagator: new CompositePropagator({
      propagators: [
        new W3CBaggagePropagator(),
        new W3CTraceContextPropagator(),
      ],
    }),
  });

  registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [
      getWebAutoInstrumentations({
        "@opentelemetry/instrumentation-fetch": {
          propagateTraceHeaderCorsUrls: /.*/,
          clearTimingResources: true,
          applyCustomAttributesOnSpan(span) {
            span.setAttribute("app.synthetic_request", IS_SYNTHETIC_REQUEST);
          },
        },
      }),
    ],
  });
};

export default FrontendTracer;
