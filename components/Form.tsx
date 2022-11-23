import React, { useState } from "react";
import styles from "../styles/form.module.css";

const Form = () => {
  const [color, setColor] = useState("#000000");
  const [h, setH] = useState("");
  const [s, setS] = useState("");
  const [l, setL] = useState("");
  const [r, setR] = useState("");
  const [g, setG] = useState("");
  const [b, setB] = useState("");

  return (
    <div style={{ backgroundColor: color }}>
      <div className={styles.color_container}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      {/* HEX  */}
      <div className={styles.hex}>
        <article>
          <input type="number" onChange={(e) => setH(e.target.value)} />
          <h1>H</h1>
        </article>
        <article>
          <input type="number" onChange={(e) => setS(e.target.value)} />
          <h1>S</h1>
        </article>
        <article>
          <input type="number" onChange={(e) => setL(e.target.value)} />
          <h1>L</h1>
        </article>
      </div>

      {/* RGB  */}
      <div className={styles.rgb}>
        <article>
          <input type="number" onChange={(e) => setR(e.target.value)} />
          <h1>R</h1>
        </article>
        <article>
          <input type="number" onChange={(e) => setG(e.target.value)} />
          <h1>G</h1>
        </article>
        <article>
          <input type="number" onChange={(e) => setB(e.target.value)} />
          <h1>B</h1>
        </article>
      </div>
    </div>
  );
};

export default Form;
