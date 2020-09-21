import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import styles from "./ContactUs.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ContactUs = (props) => {
  return (
    <Paper style={{ width: "100%", height: "100%" }}>
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
        <div
          className={styles.background}
          key="slide1"
          style={{ padding: 20, height: "100%" }}
        >
          Contact us #1
        </div>
        <div
          className={styles.background}
          key="slide2"
          style={{ padding: 20, height: "100%" }}
        >
          Contact us #1
        </div>
      </Carousel>
    </Paper>
  );
};

export default ContactUs;
