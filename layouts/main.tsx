import Head from "next/head";
import Header from "../components/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>César Landeros</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
