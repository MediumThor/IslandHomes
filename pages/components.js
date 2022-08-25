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
import Card from "components/Card/Card.js";

import Button from "components/CustomButtons/Button.js";
import { Parallax, Background } from "react-parallax";
import Badge from "../components/Badge/Badge";



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
import SectionPillsBackup from "pages-sections/Components-Sections/SectionPillsBackup.js";
import SectionPillsRaces from "pages-sections/Components-Sections/SectionPillsRaces.js";



import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import bg from "public/img/bg2.jpg";
import TeamSection from "../pages-sections/LandingPage-Sections/TeamSection";

import logo from "public/img/logoBLACK.png";
import BGGif from "public/img/gifOne.gif";

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
    background: "transparent",
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
          height: 300,
          color: "white",
        }}
        {...rest}
      />
      <div>  
        
     
   <Parallax strength={300}>
        <Background className="custom-bg">
            <img src={BGGif} alt="fill murray" />
        </Background>
        

      
        <div style={{ height: '100px' }} />

        
        

        <div className={classes.container}>
          <GridContainer>
            <GridItem >
           
              <div className={classes.brand}>
              


                         <div style={{ margin: '160px'}}>
      <img src={logo} style={{ marginTop:'0px', marginBottom:'50px',width: '200px', }}/>

      <h1 style={{color: 'white'}}>   <GridContainer>

<GridItem >

  </GridItem>
  
</GridContainer>

</h1>
    </div>
              </div>
          
            </GridItem>
           
          </GridContainer>
         
        </div>
    </Parallax>

 
    <Parallax strength={400}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('https://getwallpapers.com/wallpaper/full/f/e/e/367521.jpg')"
          }}
        />
      </Background>
  
    
                 
    <ButtonBar />
    </Parallax>
        
  </div>




  <Parallax
        blur={{ min: -10, max: 15 }}
        bgImage="https://i.imgur.com/LJAaNAN.jpeg"
        bgImageAlt="Black sails"
        
        
        strength={-300}
    >
        <div style={{ maxHeight: '70px' }} />

        <div className={classes.container}>
          <GridContainer>
          <div style={{ margin: '100px'}}>
          <SectionPillsRaces/>
       
        
          
        </div>
            <GridItem >
             
              
              
            </GridItem>
          </GridContainer>
        </div>
    </Parallax>



    <Parallax strength={-100}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('https://getwallpapers.com/wallpaper/full/f/e/e/367521.jpg')"
          }}
        />
      </Background>
  
    
                 
    <ButtonBar />
    </Parallax>

    <Parallax
      bgImage="https://i.imgur.com/aUvlF87.jpg"
      strength={400}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255, 152, 0, ${percentage * .7})`,
              left: "50%",
              top: "50%",
              borderRadius: "100%",
              transform: "translate(-50%,-50%)",
              width: percentage * 300,
              height: percentage * 300
            }}
          />
        </div>
      )}
    >

<div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} style={{color: 'white'}}>  </h1>
            
              <br />
           
            </GridItem>
          </GridContainer>
        </div>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <Link href="/events">
  <a className={classes.link}>
  <Button color="info" round>
      Event Calandar
    </Button>
  </a>
</Link>

</div>
      </div>
    </Parallax>
      




    <Parallax strength={-400}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('https://getwallpapers.com/wallpaper/full/f/e/e/367521.jpg')"
          }}
        />
      </Background>
  
    
                 
      <GridItem>

    
<Badge color="transparent">

<WorkSection/>

</Badge>



   </GridItem>
   
    </Parallax>
    
    
  
 
     
       <GridItem>
       <Card>

<Footer />    
</Card>
         
         </GridItem>   
  
      
     
      
      


     


     
    
    </div>
  
  );
}
