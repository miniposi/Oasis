import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import theme from "@/styles/theme";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
