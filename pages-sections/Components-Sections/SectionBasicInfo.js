import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";


// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import PhishingIcon from '@mui/icons-material/Phishing';
import SailingIcon from '@mui/icons-material/Sailing';
import GroupsIcon from '@mui/icons-material/Groups';
import Favorite from "@material-ui/icons/Favorite";
import CardMembershipIcon from '@mui/icons-material/CardMembership';


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";
import SectionCarousel from "./SectionCarousel";

import Link from "next/link";
import SectionBasics from "./SectionBasics";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h1>Port Washington Yacht Club</h1>
          </div>
          <div className={classes.title}>
            <h4>
              <small>In the heart of Ozaukee Co, WI on the Shore of Lake Michigan</small>
            </h4>
          </div>
          <GridContainer>
            
            <GridItem lg={6}>
              <NavPills
                color="info"
                tabs={[
                  {
                    tabButton: "Cruising and Fishing",
                    tabIcon: PhishingIcon,
                    tabContent: (
                      <span>
                        <p>
                          
                        </p>
                        <br />
                        <h3>
                      Enjoy cruising trips to other ports with yacht club members.

                        </h3>
                        <br />
                        <p>
                        Participate in fishing tournaments including the Lloyd Purnell Annual Fishing Tournament 
                        with awards given for the most successful fishermen.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Sail Racing",
                    tabIcon: SailingIcon,
                    tabContent: (
                      <span>
                        <h3>
                        Saturday Buoy racing series for both racing class and cruising class boats,
                         are held on most weekends, June through September.
                        </h3>
                        <br />
                        <p>
                        Two long distant weekend races, one to and from Sheboygan and the other to and from Milwaukee are fun races for which individual awards are given.

                        The Port Washington Yacht Club sponsors the across the lake Clipper Cup race and hosts the west shore and across the lake 'Double Handed' race. Both races finish at Port Washington Harbor with award parties held at the yacht club.
                        </p>
                 

            
               <Button
              href="/raceinfo"          
            color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           Race Info
        </Button>
                      </span>
                      
                      
                      
                    ),
                    
                    
                  },
                  
                  {
                    tabButton: "Social Functions",
                    tabIcon: GroupsIcon,
                    tabContent: (
                      <span>
                        <h3>
                        Club activities include a year round social calendar that not only consists of a full schedule of fun parties,
                         but also informal group trips anytime during the year.
                         </h3>
                        <br />
                        <p>
                        In addition, the Club participates in the city's Fish Day celebration and is involved in other community activities. 
                        Such activities include contributing funds to school scholarships and making the club available for charitable fund raising events.
                        </p>
                        <br />
                        <p>
                        The clubhouse bar is open each Friday evening during the summer months for use by its members and visiting boaters from other yacht clubs.
                        </p>
                    
           

                               <Button
          href="https://www.pwycwi.com/index.php?option=com_jevents&task=month.calendar&year=2022&month=08&day=15&Itemid=20"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
           Event Calendar
        </Button>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Become A Member",
                    tabIcon: CardMembershipIcon,
                    tabContent: (
                      <span>
                        <h3>
                        Requirements for membership are:

                      Interest in boating (boat ownership is not required)
                        A completed application including signatures of two current PWYC members
                      $25 check (non-refundable application fee)
                        </h3>
                        <br />
                        <p>
                        Your application will be posted on the Club bulletin board for review by the membership for 30 days. 
                        After 30 days, your application will be presented to the Board of Directors for their review and approval.

                        Successful applicants will be notified of their acceptance as members by the Fleet Captain and/or an announcement in the next Porthole (Club newsletter).
                        </p>
                        <br />
                        <p>
                        Upon approval, the Club Treasurer will notify the new member of the appropriate fees due to the Club. These amounts will be a one time building assessment charge of $250 and prorated dues based on current annual dues of $300.
                        </p>
                        <br />
                        <p>
                        Members have the rights, privileges and duties as set forth in the Club By-Laws. Participation in Club activities is highly encouraged.                        
                        </p>
                        <Button
          href="/member"
          color="secondary"
          target="_blank"
          className={classes.navLink}
        >
           Become A Member
        </Button>

        <Button
                    href="https://www.pwycwi.com/images/PWYC_Application_-rev._2019.pdf"
                    color="secondary"
          target="_blank"
          className={classes.navLink}
        >
                      Membership Form
        </Button>
           
                      </span>
                    
                    ),
                  }
                ]}
              />
           
            </GridItem>
            <GridItem  lg={6}>

<SectionCarousel/>
</GridItem>
         
           
          </GridContainer>
          
        </div>
      </div>
    </div>
  );
}
//<GridItem  lg={6}>

//<SectionCarousel/>
//</GridItem>