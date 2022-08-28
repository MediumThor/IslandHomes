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

import Parallax from "components/Parallax/Parallax.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import FancyButton from "components/FancyButton.tsx";
import FancyButtonRacing from "components/FancyButtonRacing.tsx";
import FancyButtonSingleA from "components/FancyButtonSingleA.tsx";
import FancyButtonSingleB from "components/FancyButtonSingleB.tsx";
import FancyButtonSingleC from "components/FancyButtonSingleC.tsx";
import CarouselA from "./SectionCarouselA";





import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";
import Button from "components/CustomButtons/Button.js";
import Link from "next/link";
import Carousel from "pages-sections/Components-Sections/SectionCarousel.js";
const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div >
      <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}} color='primary'>
        <div >
        
          <div>
          <FancyButtonRacing/>
          <FancyButtonSingleA/>
          <FancyButtonSingleB/>
          <FancyButtonSingleC/>
          
          </div>
       
          
          
        </div>
      </div>
    </div>
  );
}
