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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";


const dashboardRoutes = [];
const userData = JSON.stringify(Userfront.user, null, 2);

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  function RequireAuth({ children }) {
    

  
    
    if (!Userfront.tokens.accessToken) {
      // Redirect to the /login page

    
      return  <div to="/login" />; 

    
      
    }
  
    return children;
  }
  


  
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Enter the Club"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        {...rest}
      />
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
              </RequireAuth>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          
          <RequireAuth>

          <h1><Muted className={classes.title}>YOU ARE LOGGED IN </Muted></h1>
          <Muted className={classes.title}><pre>{userData}</pre></Muted>
          
          
         <ProductSection/>

          </RequireAuth>

       
        </div>
     
      </div >
    
    </div>
  );
  
}

