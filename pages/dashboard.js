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
import Muted from "components/Typography/Muted.js";



import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";
import Userfront from "@userfront/react";



// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import SectionMembership from "../pages-sections/Components-Sections/SectionMembership";
import { Card } from "@material-ui/core";
import Calandar from "components/Calandar/calandar.js"
import MemberSection from "pages-sections/LandingPage-Sections/MemberSection.js"
import styled from 'styled-components';

import { Link } from 'react-scroll';

import Navbar from "components/MemberSection/Navbar.jsx";
import Section1 from "components/MemberSection/Section1.jsx";
import Section2 from "components/MemberSection/Section2.jsx";
import Section3 from "components/MemberSection/Section3.jsx";



import {
  BrowserRouter as Router,
  Routes,
  Route,

  Redirect,
  useLocation,
} from "react-router-dom";


const dashboardRoutes = [];
const userData = JSON.stringify(Userfront.user, null, 2);
const userName = JSON.stringify(Userfront.user.username, null, 2);






export default function LandingPage(props) {
  const useStyles = makeStyles(styles);
  const { ...rest } = props;
  function RequireAuth({ children }) {
    

  
    
    if (!Userfront.tokens.accessToken) {
      // Redirect to the /login page

    
      return  <div to="/login" />; 

    
      
    }
  
    return children;
  }
  


  const classes = useStyles();
  return (
    
    <div>
      
   
      
      <Parallax filter responsive image="https://i.imgur.com/BhDre1N.jpeg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              


              <RequireAuth>
               


              <h1 className={classes.title}>Members Only Dashboard</h1>
              <h4>
               This is a members-only section. To return to the main site you will need to log out here:
              </h4>

              
              <div>
        
<Button onClick={Userfront.logout}
href="/components">Logout</Button>
          </div>
              <br />
              <GridContainer >
        <GridItem xs={12} sm={12} md={8}>

         
        <h2 className={classes.description} >Hello, {userName} you are logged in</h2>

    
        </GridItem>
      </GridContainer>
      
              </RequireAuth>
            </GridItem>
          </GridContainer>
        </div>
        
      </Parallax>

      <Navbar/>
      <div>

        
      <Section1/>
           <Section2/>
           <Section3/>


      </div>
        
      
     
     
      
     

          

      
      
      
    </div>
  );
  
}

