import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Percy</title>
        <meta name="description" content="Home of Percy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2> Home Works </h2>
      </main>
    </div>
  );
};

export default Home;
