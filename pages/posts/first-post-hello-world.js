import MainLayout from "../../layouts/main";
import Section from "../../components/section";

function Home() {
  return (
    <MainLayout>
      <Section>
        <h1 className="title">First post, hello world.</h1>
        <div>Yes, I did it.</div>
      </Section>
    </MainLayout>
  );
}

export default Home;
