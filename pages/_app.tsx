import type { AppProps } from "next/app";
import { Sono } from "next/font/google";
import "bulma/css/bulma.css";

const sono = Sono({
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
  variable: "--font-sono",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sono.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
