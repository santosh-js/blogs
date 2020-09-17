import React, { useEffect } from "react";
import styles from "./Blogs.module.css";
import colors from "./Colors.module.css";
import Typography from "@material-ui/core/Typography";
// import { connect } from "react-redux";
// import { TextField } from "@material-ui/core";
import planet1 from "../../../../assets/planets/planet1.jpg";
import planet2 from "../../../../assets/planets/planet2.png";
import planet3 from "../../../../assets/planets/planet3.jpg";
import planet4 from "../../../../assets/planets/planet4.jpg";
import planet5 from "../../../../assets/planets/planet5.jpg";
import planet6 from "../../../../assets/planets/planet6.jpg";
import Typist from "react-typist";
import classnames from "classnames";

function Blogs(props) {
  // const [location, setLocation] = useState(props.location);

  useEffect(() => {
    console.log("get the ip here !!");
  }, []);

  return (
    <>
      {/*  <div className={styles.section}>
        <TextField
          type="text"
          name="location"
          value={location}
          label="Filter by name"
          variant="outlined"
        />
        <TextField
          type="text"
          name="location"
          value={location}
          label="Enter your city name"
          variant="outlined"
          style={{ marginLeft: "20px" }}
        />
      </div> */}

      <div className={styles.section}>
        <Typography
          style={{ fontFamily: "Courier New", color: "#3be8b0" }}
          variant="h2"
        >
          {"Blog Posts"}
        </Typography>
      </div>
      <div className={classnames(`${styles.container}`)}>
        <div className={classnames(`${styles.zone} ${colors.green}`)}>
          <img src={planet1} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - GP 600</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.red}`)}>
          <img src={planet2} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - Spe</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.yellow}`)}>
          <img src={planet3} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - Arion</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.grey}`)}>
          <img src={planet4} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - Arkas</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.black}`)}>
          <img src={planet5} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - Orbitar</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.brown}`)}>
          <img src={planet6} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - Taphao Thong</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.blue}`)}>
          <img src={planet1} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - Taphao Kaew</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.darkred}`)}>
          <img src={planet2} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - Dimidium</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.purple}`)}>
          <img src={planet3} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - Galileo</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.green}`)}>
          <img src={planet4} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - Brahe</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.black}`)}>
          <img src={planet5} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planet - Lipperhey</code>
          </figcaption>
        </div>
      </div>
    </>
  );
}

export default Blogs;
