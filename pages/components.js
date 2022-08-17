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
import SectionTabs2 from "pages-sections/Components-Sections/SectionTabs2.js";
import SectionTabs3 from "pages-sections/Components-Sections/SectionTabs3.js";
import SectionTabs4 from "pages-sections/Components-Sections/SectionTabs3.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import FancyButton from "components/FancyButton.tsx"
import ButtonBar from "pages-sections/Components-Sections/ButtonBar.js"


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
import bg from "public/img/bg2.jpg";
import TeamSection from "../pages-sections/LandingPage-Sections/TeamSection";

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
      src= "https://i.imgur.com/FvYwDbj.jpg"
        brand="PWYC"
        leftLinks
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
        {...rest}
      />
      <div>  <Parallax blur={{ min: -1, max: 3 }} image="https://i.imgur.com/yM5c93L.jpg"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem >
              <div className={classes.brand}>
                <h1 className={classes.title}>PWYC</h1>
                <h3 className={classes.subtitle}>
                 Port Washington, Wisconsin
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax></div>
    
      <ButtonBar/>

      <Parallax image="https://i.imgur.com/yM5c93L.jpg"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem >
              <div className={classes.brand}>
                <h1 className={classes.title}>PWYC</h1>
                <h3 className={classes.subtitle}>
                 Port Washington, Wisconsin
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <GridContainer>  
        <GridItem><FancyButton/></GridItem></GridContainer>
      
      
      <div className={classNames(classes.main, classes.mainRaised)}>
      <SectionBasicInfo />

      
      </div>

      

      <Parallax image="https://i.imgur.com/LJAaNAN.jpeg"
      blur={{ min: -10, max: 200 }}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem >
              <div className={classes.brand}>
                <h1 className={classes.title}>Summer Buoy Racing</h1>
                <h3 className={classes.subtitle}>
                Wednesday evenings and Saturday afternoons
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        
      </Parallax>
      
      <div>
      <SectionTabs />

      </div>
   

      


  
  
   


      <GridContainer>
            <GridItem >
              <div className={classes.brand}>
               <WorkSection/>
              </div>
            </GridItem>
          </GridContainer>

   
      <div className={classNames(classes.main, classes.mainRaised)}>
      <Footer/>      
      </div>
      


     

    
<div>


</div>
     
    
    </div>
  
  );
}
