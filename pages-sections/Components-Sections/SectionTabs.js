import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";
import SectionCarousel from "./SectionCarousel";
import Button from "components/CustomButtons/Button.js";
import Link from "next/link";
const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h1>Sail Racing</h1>
          <Link href="/history">
  <a className={classes.link}>
  <Button color="info" round>
        Club History
    </Button>
  </a>
</Link>
<Link href="/profile">
  <a className={classes.link}>
  <Button color="info" round>
      Racing Crew/ Find A Boat
    </Button>
  </a>
</Link>
          <GridContainer>
           
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
