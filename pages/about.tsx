import MainLayout from "../layouts/main";
import Section from "../components/section";

export default function Home() {
  return (
    <MainLayout>
      <Section>
        <h1 className="title">Hi!, I&apos;m César Landeros.</h1>
        <p>I&apos;m a software engineer currently working at DispatchHealth.</p>
        <br />
        <p>
          You can send me an email to:{" "}
          <a href="mailto:me@cesarlanderos.dev">me@cesarlanderos.dev</a>.
        </p>
      </Section>
    </MainLayout>
  );
}
