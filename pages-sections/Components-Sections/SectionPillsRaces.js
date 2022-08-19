import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import SailingIcon from '@mui/icons-material/Sailing';


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";
import { Card } from "@material-ui/core";
import Link from "next/link";
import Button from "components/CustomButtons/Button.js";



const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h1 style={{color: 'white'}}>   Summer Sail Racing   </h1>
          </div>
          <div className={classes.title}>
            <h3>
              <small></small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
           
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              
              <NavPills
                color="info"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 },
                }}
                tabs={[
                  {
                    tabButton: "Information",
                    tabIcon: SailingIcon,
                    tabContent: (
                      <span style={{color: 'white'}}>
                         <p>
                        Saturday Buoy racing series for both racing class and cruising class boats
                         are held on most Saturday afternoons and Wendsday evenings June through September. Course length and route vary and are determined before the race.
                        
                        </p>
                        <br />
                      
                        <br />
                        <Link href="/raceinfo">
  <a className={classes.link}>
  <Button color="warning" round>
      Racing Crew/ Find A Boat
    </Button>
  </a>
</Link>
                       
                      </span>
                    ),
                  },
                  {
                    tabButton: "Schedule",
                    tabIcon: Schedule,
                    tabContent: (
                      <span style={{color: 'white'}}>
                        <p>
                        Two long distant weekend races, one to and from Sheboygan and the other to and from Milwaukee are fun races for which individual awards are given.

                        </p>
                        <br />
                        <Link href="http://www.pwycwi.com/index.php?option=com_jevents&view=month&layout=calendar&Itemid=20">
  <a className={classes.link}>
  <Button color="warning" round>
      See Race Schedule
    </Button>
  </a>
</Link>
                     
                      </span>
                    ),
                  },
                ]}
              />
              
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
