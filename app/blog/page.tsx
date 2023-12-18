import Link from "next/link";
import Section from "../../components/section";

function Blog() {
  return (
    <Section>
      <h1 className="title">Latests posts</h1>
      <Link href="/blog/first-post-hello-world">First post, hello world</Link>
    </Section>
  );
}

export default Blog;
