import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12}  className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/290880531_2220733691416843_1192104308329785208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=P5hFJl7htrkAX8OwHi5&_nc_ht=scontent-ord5-1.xx&oh=00_AT9A5h1fzgFfk_f3cxi8ZyZ-Yv2BKVf6rSFaSxDhgJ1fDw&oe=62EC8284"
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Port washington Marina, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/107059473_1637969136359971_2609599089493000917_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zKfsd7czH6YAX87SK4F&_nc_ht=scontent-ord5-1.xx&oh=00_AT95iSOkqQd6xQf7V-qe78kTjw1A67XQ-7N2T_YfkAuhRQ&oe=630B7041"
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4 >
                      <LocationOn className="slick-icons" />
                      Somewhere Beyond, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/bg3.jpg"
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
