import React, { useState } from "react";
import styles from "../styles/form.module.css";

const Form = () => {
  const [color, setColor] = useState("#f05600");
  const [h, setH] = useState("");
  const [s, setS] = useState("");
  const [l, setL] = useState("");
  const [r, setR] = useState("");
  const [g, setG] = useState("");
  const [b, setB] = useState("");

  const hexTOrgb = (hex: string) => {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);

    setR(`${r}`);
    setB(`${b}`);
    setG(`${g}`);
  };

  return (
    <div style={{ backgroundColor: color }} className={styles.main_container}>
      <div className={styles.color_container}>
        <input
          type="color"
          className={styles.color_picker}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          className={styles.color_input}
          onChange={(e) => {
            if (e.target.value.startsWith("#")) {
              setColor(e.target.value);
              hexTOrgb(color);
            }
            if (e.target.value.length === 0) {
              setColor("#000");
              hexTOrgb("#000000");
            }
          }}
        />
      </div>

      {/* HEX  */}
      <div className={styles.hsl}>
        <article>
          <input type="number" onChange={(e) => {}} value={h} />
          <h1>Hue</h1>
        </article>
        <article>
          <input type="number" onChange={(e) => setS(e.target.value)} />
          <h1>Saturation</h1>
        </article>
        <article>
          <input type="number" onChange={(e) => setL(e.target.value)} />
          <h1>Lightness</h1>
        </article>
      </div>

      {/* RGB  */}
      <div className={styles.rgb}>
        <article>
          <input
            type="number"
            onChange={(e) => setR(e.target.value)}
            value={r}
          />
          <h1>Red</h1>
        </article>
        <article>
          <input
            type="number"
            onChange={(e) => setG(e.target.value)}
            value={g}
          />
          <h1>Green</h1>
        </article>
        <article>
          <input
            type="number"
            onChange={(e) => setB(e.target.value)}
            value={b}
          />
          <h1>Blue</h1>
        </article>
      </div>

      {/* button container  */}
      <div className={styles.button_container}>
        <a
          href="#"
          onClick={() => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(
              16
            );
            setColor("#" + randomColor);
            hexTOrgb("#" + randomColor);
          }}
          className={styles.btn}
        >
          🔁Random
        </a>
        <a href="#" className={styles.btn}>
          📋Hex Code
        </a>
        <a href="#" className={styles.btn}>
          📋RGB Code
        </a>
        <a href="#" className={styles.btn}>
          📋HSL Code
        </a>
      </div>
    </div>
  );
};

export default Form;
