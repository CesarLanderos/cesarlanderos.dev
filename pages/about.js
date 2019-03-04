import Link from "next/link";
import MainLayout from "../layouts/main";
import Section from "../components/section";

export default function Home() {
  return (
    <MainLayout>
      <Section>
        <h1 className="title">Hi!, I'm César Landeros.</h1>
        <p>I'm a software engineer currently working at Wizeline.</p>
        <br />
        <p>
          You can send me an email to
          <a href="mailto:me@cesarlanderos.dev"> me@cesarlanderos.dev</a>.
        </p>
      </Section>
    </MainLayout>
  );
}
