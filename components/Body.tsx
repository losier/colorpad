import React from "react";
import styles from "../styles/body.module.css";

// importing components
import Form from "./Form";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <main className={styles.main}>
        <Form />
        <Footer />
      </main>
    </div>
  );
};

export default Body;
