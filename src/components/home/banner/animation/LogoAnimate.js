import React, { useEffect } from "react";
import "./LogoAnimate.css";

// Animate Banner text
const LogoAnimate = (props) => {
  // ramdom colors
  const colors = [
    "#0099e5",
    "#ff4c4c",
    "#34bf49",
    "#00a98f",
    "#c1d82f",
    "#e4e932",
    "#fbb034",
    "#ffc845",
    "#fd5c63",
    "#74d2e7",
    "#8db9ca",
    "#ffc168",
    "#050f2c",
    "#49176d",
    "#ce181e",
    "#0c3866",
    "#ff7800",
    "#b3dcff",
    "#f1632a",
    "#fa9f1e",
    "#d2ea32",
  ];

  // Component did mount (initial render task)
  useEffect(() => {
    selectAndSpanElements();
    animateEachSpan(colors);
  }, []);

  return (
    <h1 id="animate" style={{ cursor: "pointer" }}>
      The Earth
    </h1>
  );
};

// create multi span elements from h1 element
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
}

// animate action on each span element
function animateEachSpan(colors) {
  const jsLetters = document.querySelectorAll(".js-letter");
  jsLetters.forEach((node) => {
    node.addEventListener("mouseover", function (event) {
      const index = Math.floor(Math.random(colors.length - 1) * 20);
      this.style.color = colors[index];
      // this.style.transform = "scale(1.5) rotate(10deg)";
      this.classList.add("active");
    });
    node.addEventListener("mouseout", function (event) {
      this.style.color = "";
      // this.style.transform = "";
      this.classList.remove("active");
    });
  });
}

export default LogoAnimate;
