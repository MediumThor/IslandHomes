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
              
              <Button
          href="https://www.google.com/maps/place/Port+Washington+Yacht+Club/@43.3918745,-87.8677297,17z/data=!3m1!4b1!4m5!3m4!1s0x8804ea1cbd453539:0x7d30452aaee626c4!8m2!3d43.3919444!4d-87.8655227"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <AddLocationIcon className={classes.icons} /> Visit
        </Button>
              <div>  
                <p>PO BOX 101 430 N. Lake Street Port Washington WI 53074</p>
            </div>
            <div style={{ margin: '00px' }}>
      <img src={Map} alt="react logo" style={{ width: '400px', }}/>
    </div>
            

            </ListItem>
          
           
           
            <ListItem className={classes.inlineBlock}>
            <div style={{ margin: '00px' }}>
      <img src=" " alt=" " style={{ width: '300px', }}/>
    </div>
              <a
                href=""
                className={classes.block}
                target="_blank"
              >
            


              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} 
           
    
        
        </div>
        
      </div>
     
     
    </footer>
    <Link href="/privacy">
  <a className={classes.link}>
  <a>
      Privacy Policy
    </a>
  </a>
</Link>
    </Badge>

    
    
   

    
 

   
    

  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
