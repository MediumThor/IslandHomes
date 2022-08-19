import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Badge from "../components/Badge/Badge";


import Card from "components/Card/Card.js";




import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionNOR from "pages-sections/Components-Sections/SectionNOR.js";


import NOR from "public/img/PWYC to SYC 2022.png"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Back the Club"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="https://i.imgur.com/aUvlF87.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Port Washington to Sheboygan Race</h1>
              <h4>
              We'd like to wecome all Skippers and crew to join us in our annual sprint from Port Washington to Sheboygan. 
              There will be an award ceremony and individual torphies presented after the race.
              </h4>

              <h4>
             See the official NOR below
              </h4>
              <br />
            
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
       <SectionNOR/>



        </div>
      </div>
      <GridItem>
       <Card>

<Footer />    
</Card>
         
         </GridItem>   
    </div>
  );
}
