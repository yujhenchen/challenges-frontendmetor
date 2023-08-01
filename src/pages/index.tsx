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
        <link rel="icon" href="/" />
      </Head>
      <Layout />
      <footer></footer>
    </>
  );
}
