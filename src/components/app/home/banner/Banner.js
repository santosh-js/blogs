import React from "react";
import main from "../../../../assets/banners/banner-vid.mov";

import Typist from "react-typist";
import Typed from "react-typed";
import LogoAnimate from "./animation/LogoAnimate";
import ReactPlayer from "react-player";
import classnames from "classnames";
import styles from "./Banner.module.css";

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
          strings={["Welcome To Spineor Blogspot"]}
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

// <Carousel
//   autoPlay={false}
//   useKeyboardArrows={false}
//   showThumbs={false}
//   showStatus={false}
//   showArrows={false}
//   interval={0}
//   transitionTime={600}
//   stopOnHover={false}
//   showIndicators={false}
//   swipeable={false}
//   dynamicHeight={true}
// >  </Carousel>

// <Typist>
//   <span> Feeling Bored !</span>
//   <Typist.Backspace count={7} delay={2000} />
//   <span>
//     Awesome ‍<span>🧔🏻</span>
//   </span>
// </Typist>
// <br />
// <Typed
//   strings={["Get a Job 👨‍💻", "Get a Car 🚗", "Get a TV 📺"]}
//   typeSpeed={50}
//   backSpeed={50}
//   loop
// />
// <br />
// <Typed
//   style={{ color: "#8de86e" }}
//   strings={["Here you can find anything"]}
//   typeSpeed={40}
// />
// <br />
// <Typed
//   strings={["Search for blogs", "Search for ideas"]}
//   typeSpeed={40}
//   backSpeed={50}
//   attr="placeholder"
//   loop
// >
//   <input type="text" />
// </Typed>
//
//

// ====================================================================
