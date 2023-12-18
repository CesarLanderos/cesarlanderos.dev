"use client";

import Link from "next/link";
import sample from "lodash/sample";
import MainLayout from "../layouts/main";
import Section from "../components/section";
import { useEffect, useState } from "react";

const phrases = [
  "I like building stuff.",
  "I want to change the world, one new JS library at a time.",
  "I owe my whole career to jQuery, I hope I never have to use it again.",
  "This is a simple text based webpage, and I wanted to build it using React, you're welcome.",
  "AngularJS was amazing, let's never do that again.",
  "Unpopular opinion: PHP is a great languaje, I mean it!.",
];

const Home = () => {
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    setPhrase(sample(phrases));
  }, []);

  return (
    <MainLayout>
      <section className="hero">
        <div className="hero-body">
          <h1 className="title">Hi!, My name is César Landeros. test 5</h1>
          <p className="subtitle">{phrase}</p>
        </div>
      </section>

      <Section>
        <h2 className="title is-4">Featured posts</h2>
        <Link href="/posts/first-post-hello-world">
          First post, hello world
        </Link>
      </Section>
    </MainLayout>
  );
};

export default Home;
