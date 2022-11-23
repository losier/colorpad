import Head from "next/head";
import styles from "../styles/Home.module.css";

// importing components
import Body from "../components/Body";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Color Pad</title>
        <meta
          name="description"
          content="A simple web app to play with colors"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body />

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
