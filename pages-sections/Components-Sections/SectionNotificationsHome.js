import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
<div className={classes.container}>
        <div className={classes.title}>
      </div>
      <SnackbarContent
        message={
          <span>
            <b>INFO ALERT:</b> Sheboygan Race from Port Washington to Sheboygan on 8/20/22     
            <Button color="primary" 
            href="/index"
            simple>
                Info
              </Button>
             
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />
      <SnackbarContent
        message={
          <span>
            <b>SUCCESS ALERT:</b>Display another notification here
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      
     
      <Clearfix />
    </div>
  );
}
