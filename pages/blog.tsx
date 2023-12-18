import Link from "next/link";
import MainLayout from "../layouts/main";
import Section from "../components/section";

function Blog() {
  return (
    <MainLayout>
      <Section>
        <h1 className="title">Latests posts</h1>
        <Link href="/posts/first-post-hello-world">
          First post, hello world
        </Link>
      </Section>
    </MainLayout>
  );
}

export default Blog;
