import type { AppProps } from "next/app";
import "bulma/css/bulma.css";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
