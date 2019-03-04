import Head from "../components/head";
import Header from "../components/header";

export default function MainLayout({ children }) {
  return (
    <>
      <Head />
      <Header />
      {children}
    </>
  );
}
