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
import Carousel from "pages-sections/Components-Sections/SectionCarousel.js";

import Box from '@mui/material/Box';


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
import CarouselA from "pages-sections/Components-Sections/SectionCarouselA.js"





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
import { styled } from '@mui/material/styles';


import logo from "public/img/island.png";
import BGGif from "public/img/gifOne.gif";
import BgTest from "public/img/BGTest.gif"

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

  const BoxA = styled('div')(({ theme }) => ({
    position: 'center',
   
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    color: theme.palette.common.white,
    width:200,
    height:200,
  }));

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
          height: 120,
          color: "dark",
        }}
        {...rest}
      />
      <div>  
        
     <Background>

    
  

        <Parallax 
        blur={{ min: -15, max: 15 }}
        strength={300}

                bgImage={'https://i.etsystatic.com/29236928/r/il/570ead/3549625151/il_1588xN.3549625151_5eak.jpg'}
           height='500px'    
           width='400px'     
                
        renderLayer={percentage => (

          
            <div 
                style={{
                  
                    position: 'absolute',
                    left: '20%',
                    top: '20%',
                    width: percentage * 70,
                    height: percentage * 70,
                }}
            />
        )}
    >

        <div style={{ height: '300px' }} />

        
        

        <div className={classes.container}>
        <GridContainer>
            <GridItem >
           
              <div className={classes.brand}>
              


                         <div style={{ margin: '-60px'}}>
      <img src={logo} style={{ marginTop:'0px', marginBottom:'150px',width: '500px', }}/>

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
    </Background>
 
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
        bgImage="https://i.etsystatic.com/29236928/r/il/f1dd29/3549625351/il_1588xN.3549625351_6ei9.jpg"
        bgImageAlt="Black sails"
        
        
        strength={-300}
    >
        <div style={{ maxHeight: '1000px' }} />

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
  


<div style={{
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}}>
<GridItem xs={12} sm={12} md={6}>
        <Carousel/>
       
        </GridItem>
</div>

    </Parallax>

    <Parallax
      bgImage="https://i.etsystatic.com/25678256/r/il/64e518/3835996859/il_1588xN.3835996859_g1c7.jpg"
      strength={400}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(55, 252, 240, ${percentage * .7})`,
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
      Preorder Now
    </Button>
  </a>
</Link>

</div>
      </div>

    </Parallax>
      


   
    
    
  
 
     
       <GridItem>
       <Card>

<Footer />    
</Card>
         
         </GridItem>   
  
      
     
      
      


     


     
    
    </div>
  
  );
}
