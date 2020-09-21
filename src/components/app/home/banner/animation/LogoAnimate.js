import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./LogoAnimate.module.css";

const LogoAnimate = (props) => {
  const reference = useRef();

  useEffect(() => {
    selectAndSpanElements();

    // animateEachSpan();
  }, []);

  return (
    <h2 className={`${styles.letter}`} ref={reference} id="animate">
      Spineor WS
    </h2>
  );
};

function selectAndSpanElements() {
  const h1 = document.getElementById("animate");
  const letters = h1.innerText.split("");

  let html = "";

  letters.forEach((letter) => {
    let spanClass = "";
    if (letter !== " ") {
      spanClass = "letter js-letter";
    }
    html = html + `<span class='${spanClass}'>${letter}</span>`;
  });

  h1.innerHTML = html;
  const jsLetters = document.querySelectorAll(".js-letter");

  jsLetters.forEach((node) => {
    node.addEventListener("mouseover", function (event) {
      this.classList.add("active");
    });
    node.addEventListener("mouseout", function (event) {
      this.classList.remove("active");
    });
  });
}
//
// function animateEachSpan() {
//   const h1 = document.getElementById("animate");
//   const letters = h1.innerText.split("");
//
//   let html = "";
//
//   letters.forEach((letter) => {
//     let classes = "";
//     if (letter !== " ") {
//       classes = "letter js-letter";
//     }
//     html = html + `<span class='${classes}'>${letter}</span>`;
//   });
// }
export default LogoAnimate;
