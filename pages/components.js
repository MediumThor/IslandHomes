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
import { Parallax } from 'react-parallax';

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


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
import LogoButton from "pages-sections/Components-Sections/LogoButton.js"




import SectionBasicInfo from "pages-sections/Components-Sections/SectionBasicInfo.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionNotificationsHome from "pages-sections/Components-Sections/SectionNotificationsHome.js";

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

import logo from "public/img/logoBLACK.png";

const useStyles = makeStyles(styles);
//deleted sections:   <SectionBasics />
   //     <SectionNavbars />
   //     <SectionTabs />
   //     <SectionPills />
   //     <SectionNotifications />
   //     <SectionTypography />
   //     <SectionJavascript />
   //        <SectionExamples />
   const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };


export default function Components(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid)
  const { ...rest } = props;
  return (
    <div>
      
      
      <Header
        brand="PWYC"
        leftLinks
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 240,
          color: "white",
        }}
        {...rest}
      />
      <div>  
        
     
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://i.imgur.com/yM5c93L.jpg+https://i.imgur.com/LJAaNAN.jpeg"
        bgImageAlt="the dog"
        
        strength={200}
    >
        <div style={{ height: '100px' }} />

        <div className={classes.container}>
          <GridContainer>
            <GridItem >
              <div className={classes.brand}>


                         <h3 className={classes.subtitle}>
                         <div style={{ margin: '120px'}}>
      <img src={logo} style={{ marginTop:'30px', marginBottom:'200px',width: '200px', }}/>
    </div>
  
                </h3>

                
              </div>
              
            </GridItem>
           
          </GridContainer>
         
        </div>
    </Parallax>

 

    <ButtonBar />
        
  </div>

  <Parallax
        blur={{ min: -12, max: 15 }}
        bgImage="https://i.imgur.com/LJAaNAN.jpeg"
        bgImageAlt="the dog"
        
        strength={-200}
    >
        <div style={{ height: '70px' }} />

        <div className={classes.container}>
          <GridContainer>
          <div style={{ margin: '100px'}}>
        <SectionNotificationsHome/>


        </div>
            <GridItem >
              <div className={classes.brand}>


                         <h3 className={classes.subtitle}>
                         <div style={{ margin: '100px'}}>
      <img  style={{ width: '000px', }}/>
    </div>
   
                </h3>

                
              </div>
              
              
            </GridItem>
           
          </GridContainer>
         
        </div>
      
    </Parallax>
<ButtonBar/>

    <Parallax
      bgImage="https://i.imgur.com/aUvlF87.jpg"
      strength={400}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 125, 120, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "100%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Event Calandar</div>
      </div>
    </Parallax>
      
    <GridItem>

    
 

    
    <WorkSection/>
      
  
    </GridItem>
    
  
 
     
          
   
      <div >
      <Footer/>      
      </div>
      


     


     
    
    </div>
  
  );
}
