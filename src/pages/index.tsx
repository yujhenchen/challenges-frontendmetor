import Head from "next/head";
import Layout from "~/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenges</title>
        <meta
          name="description"
          content="My solutions for Frontend Mentor Challenges"
        />
        <meta
          name="keywords"
          content="HTML, Tailwind CSS, TypeScript, React, Create T3 App"
        />
        <meta name="author" content="Jen Chen" />
        <meta property="og:image" content="./layout.png" />
        <link rel="icon" href="./logo.svg" />
      </Head>
      <Layout />
      <footer></footer>
    </>
  );
}
