import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import styles from "./ContactUs.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ContactUs = (props) => {
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
      <div className={styles.backgroundOne}>Contact us #1</div>
      <div className={styles.backgroundTwo}>Contact us #2</div>
      <div className={styles.backgroundThree}>Contact us #3</div>
    </Carousel>
  );
};

export default ContactUs;
