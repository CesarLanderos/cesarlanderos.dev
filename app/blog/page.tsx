import Link from "next/link";

function Blog() {
  return (
    <section className="section">
      <h1 className="title">Latests posts</h1>
      <Link href="/blog/first-post-hello-world">First post, hello world</Link>
    </section>
  );
}

export default Blog;
