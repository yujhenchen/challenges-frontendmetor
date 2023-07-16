import Head from "next/head";
import Content from "~/components/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor Challenges</title>
        <meta
          name="description"
          content="My solutions for Frontend Mentor Challenges"
        />
        <link rel="icon" href="/" />
      </Head>
      <Content />
      <footer></footer>
    </>
  );
}
