import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
import Link from "next/link";
import SailingIcon from '@mui/icons-material/Sailing';


// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { Parallax } from "react-parallax";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (

    
<div className={classes.container} maxWidth="100px">
    
      <SnackbarContent
      
        message={
          <span>
            <b>NOR:</b> Sheboygan Race from Port Washington to Sheboygan on 8/20/22     
            <Link href="/sheboyganRace">
  <a className={classes.link} margin="100px">
  <Button color="success" round>
      Race Info
    </Button>
  </a>
</Link>
          </span>
        }
        close
        color="info"
        icon={SailingIcon}
      />
   
      
     
    
    </div>
  );
}
