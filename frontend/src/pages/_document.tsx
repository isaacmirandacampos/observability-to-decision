import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { context, propagation } from "@opentelemetry/api";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const baggage = propagation.getBaggage(context.active());
    const isSyntheticRequest =
      baggage?.getEntry("synthetic_request")?.value === "true";

    const otlpTracesEndpoint = `http://otel-collector:4318/v1/traces`;

    const envString = `
         window.ENV = {
           NEXT_PUBLIC_OTEL_SERVICE_NAME: 'frontend-nextjs',
           NEXT_PUBLIC_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: '${otlpTracesEndpoint}',
           IS_SYNTHETIC_REQUEST: '${isSyntheticRequest}',
         };`;
    return {
      ...initialProps,
      envString,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
