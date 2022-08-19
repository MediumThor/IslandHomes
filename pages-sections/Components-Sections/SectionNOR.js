import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js";
import NOR from "public/img/PWYC to SYC 2022a.png"
import NOR2 from "public/img/PWYC to SYC 2022b.png"

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
    
      <div style={{ margin: '100px' }}>
      <img src={NOR} alt="react logo" style={{ width: '900px', }}/>
    </div>

    <div style={{ margin: '100px' }}>
      <img src={NOR2} alt="react logo" style={{ width: '900px', }}/>
    </div>
     
      <Clearfix />
    </div>
  );
}
