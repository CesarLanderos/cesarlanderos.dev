import Head from "../components/head";
import Header from "../components/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Head />
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
