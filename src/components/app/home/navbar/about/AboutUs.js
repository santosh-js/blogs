import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import styles from "./AboutUs.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const AboutUs = (props) => {
  return (
    <Carousel
      autoPlay={true}
      useKeyboardArrows={false}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      interval={2500}
      infiniteLoop
      transitionTime={600}
      stopOnHover={false}
      showIndicators={false}
      swipeable={false}
      dynamicHeight={true}
    >
      <div className={styles.backgroundOne}>About us #1</div>
      <div className={styles.backgroundTwo}>About us #2</div>
      <div className={styles.backgroundThree}>About us #3</div>
    </Carousel>
  );
};

export default AboutUs;
