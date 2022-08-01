import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import SectionBasicInfo from "pages-sections/Components-Sections/SectionBasicInfo.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);
//deleted sections:   <SectionBasics />
   //     <SectionNavbars />
   //     <SectionTabs />
   //     <SectionPills />
   //     <SectionNotifications />
   //     <SectionTypography />
   //     <SectionJavascript />
   //        <SectionExamples />



export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
      image = "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/294279993_492068979391607_5939258456021438813_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=grE8R_Tx-6cAX92mgbE&_nc_ht=scontent-ord5-1.xx&oh=00_AT-9TxhYvqBZeLA8-u8D_vLZ5LR40Fvt4mR3Yrjko_mLZA&oe=62ED11B7"
        brand="PWYC"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="https://i.imgur.com/LJAaNAN.jpeg"
      blur={{ min: -15, max: 20 }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>PWYC</h1>
                <h3 className={classes.subtitle}>
                 Port Washington Yacht Club
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <SectionBasicInfo />
        <SectionCarousel />
        <GridItem md={12} className={classes.textCenter}>


          <Link href="/history">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                History
              </Button>
            </a>
          </Link>


        </GridItem>
      </div>
      <Footer />
    </div>
  );
}
