import type { AppProps } from "next/app";
import { Sono } from "@next/font/google";
import "bulma/css/bulma.css";

const sono = Sono({
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={sono.className}>
      <Component {...pageProps} />
    </main>
  );
}
