import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import RootLayout from "@/components/templates/layout";
import { getCookie } from "cookies-next";
import FrontendTracer from "../telemetry/FrontendTracer";
import SessionGateway from "@/gateways/Session.gateway";
declare global {
  interface Window {
    ENV: {
      NEXT_PUBLIC_PLATFORM?: string;
      NEXT_PUBLIC_OTEL_SERVICE_NAME?: string;
      NEXT_PUBLIC_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT?: string;
      IS_SYNTHETIC_REQUEST?: string;
    };
  }
}

if (typeof window !== "undefined") {
  const collector = getCookie("otelCollectorUrl")?.toString() || "";
  FrontendTracer(collector);
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Techoffee</title>
        <meta
          name="description"
          content="Calculator the price of your service provisions"
        />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default App;
