// dependencies

import React from "react";
import main from "../../../assets/banners/banner-vid.mov";

import Typist from "react-typist";
import Typed from "react-typed";
import LogoAnimate from "./animation/LogoAnimate";
import ReactPlayer from "react-player";
import classnames from "classnames";

// banner for homepage
function CustomBanner() {
  return (
    <div>
      <ReactPlayer
        url={main}
        playing={true}
        loop
        playbackRate={0.8}
        width="100%"
        height="100%"
      />

      <div
        style={{
          fontSize: 22,
          fontFamily: "Source Sans Pro",
          marginTop: "20%",
          position: "absolute",
          top: "20px",
          left: "30px",
          color: "#999",
        }}
      >
        <Typed
          style={{ color: "#0099e5", fontSize: "30px" }}
          strings={["Welcome To Blogspot"]}
          typeSpeed={50}
        />
        <br />
        <Typist>
          <span style={{ color: "#f48924" }}>
            Feeling <span style={{ color: "#ffdd00" }}>Bored !</span>
          </span>
          <Typist.Backspace count={7} delay={2000} />
          <span>
            <b>
              Awesome ‍<span>🧔🏻</span>
            </b>
          </span>
        </Typist>
        <LogoAnimate />
      </div>
    </div>
  );
}

export default CustomBanner;
