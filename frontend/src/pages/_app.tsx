import { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import RootLayout from "@/components/templates/layout";

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
