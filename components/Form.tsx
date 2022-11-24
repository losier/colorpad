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

  const hexTOrgbANDhsl = (hex: string) => {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);

    setR(`${r}`);
    setB(`${b}`);
    setG(`${g}`);

    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r
        ? (g - b) / s
        : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
      : 0;

    const Hue = Math.round(60 * h < 0 ? 60 * h + 360 : 60 * h);
    const Saturation = Math.round(
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)
    );
    const Lightness = Math.round((100 * (2 * l - s)) / 2);

    setH(`${Hue}`);
    setS(`${Saturation}`);
    setL(`${Lightness}`);
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
              hexTOrgbANDhsl(color);
            }
            if (e.target.value.length === 0) {
              setColor("#000");
              hexTOrgbANDhsl("#000000");
            }
          }}
        />
      </div>

      {/* HEX  */}
      <div className={styles.hsl}>
        <article>
          <input
            type="number"
            onChange={(e) => setH(e.target.value)}
            value={h}
          />
          <h1>Hue</h1>
        </article>
        <article>
          <input
            type="number"
            onChange={(e) => setS(e.target.value)}
            value={s}
          />
          <h1>Saturation</h1>
        </article>
        <article>
          <input
            type="number"
            onChange={(e) => setL(e.target.value)}
            value={l}
          />
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
            hexTOrgbANDhsl("#" + randomColor);
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
