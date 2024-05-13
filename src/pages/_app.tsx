import { GlobalStyle } from "@/styles/globals";
import { Theme } from "@/styles/themeStylesGlobal";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import type { AppProps } from "next/app";
import { GlobalProvider } from "../provider/Global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portifolio</title>
      </Head>
      <GlobalProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalProvider>
    </>
  );
}
