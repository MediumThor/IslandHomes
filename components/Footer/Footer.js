/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "styles/jss/nextjs-material-kit/components/footerStyle.js";
import GridItem from "../Grid/GridItem";

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
    <GridItem>
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.google.com/maps/place/Port+Washington+Yacht+Club/@43.3918745,-87.8677297,17z/data=!3m1!4b1!4m5!3m4!1s0x8804ea1cbd453539:0x7d30452aaee626c4!8m2!3d43.3919444!4d-87.8655227"
                className={classes.block}
                target="_blank"
              >
                Location
              </a>
              <div>  <p>PO BOX 101</p>
              <p>430 N. Lake Street</p>
              <p>Port Washington</p>
              <p>WI</p>
              <p>53074</p></div>
            

            </ListItem>
          
           
           
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} 
           
          <a
            href="https://www.creative-tim.com?ref=njsmk-footer"
            className={aClasses}
            target="_blank"
          >
          </a>
        
        </div>
        
      </div>
     
     
    </footer>
    </GridItem>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
