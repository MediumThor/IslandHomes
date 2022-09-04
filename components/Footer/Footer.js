/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import Link from "next/link";



import Card from "components/Card/Card.js";
import Badge from "components/Badge/Badge";


// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import AddLocationIcon from '@mui/icons-material/AddLocation';

import styles from "styles/jss/nextjs-material-kit/components/footerStyle.js";
import GridItem from "../Grid/GridItem";
import Map from "public/img/Map.png"

import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    
  
    
    <Badge color="gray">




      
    <footer className={footerClasses} >
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}
            
            >
              
            
              <div>  
            </div>
            <div style={{ margin: '00px' }}>
    </div>
            

            </ListItem>
          
           
           
    
          </List>
          
        </div>
        <WorkSection/>
        
      </div>
     
     
    </footer>
    <Link href="/privacy" color="transparent">
  <a className={classes.link}>
  <Button >
      Privacy Policy
    </Button>
  </a>
</Link>
<Link href="/privacy" color="transparent">
  <a className={classes.link}>
  <Button >
      Terms Of Service
    </Button>
  </a>
</Link>
<div className={classes.right}>
          &copy; {1900 + new Date().getYear()} 
           
    
        
        </div>

    </Badge>

    
    
   

    
 

   
    

  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
