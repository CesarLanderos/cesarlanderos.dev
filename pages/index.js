import { Component } from "react";
import Link from "next/link";
import sample from "lodash/sample";
import MainLayout from "../layouts/main";
import Section from "../components/section";

const titles = [
  "I like building stuff.",
  "I want to change the world, one new JS library at a time.",
  "I owe my whole career to jQuery, I hope I never have to use it again.",
  "This is a simple text based webpage, and I wanted to build it using React, you're welcome.",
  "AngularJS was amazing, let's never do that again."
];

export default class Home extends Component {
  static getInitialProps() {
    return { title: sample(titles) };
  }

  render() {
    return (
      <MainLayout>
        <section className="hero">
          <div class="hero-body">
            <div class="container">
              <h1 className="title">{this.props.title}</h1>
              <p className="subtitle">My name is César Landeros.</p>
            </div>
          </div>
        </section>

        <Section>
          <h2 className="title is-4">Featured posts</h2>
          <Link href="/posts/first-post-hello-world">
            <a>First post, hello world</a>
          </Link>
        </Section>
      </MainLayout>
    );
  }
}
