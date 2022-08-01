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

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Club Info</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small></small>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Cruising and Fishing",
                    tabIcon: PhishingIcon,
                    tabContent: (
                      <span>
                        <p>
                          
                        </p>
                        <br />
                        <p>
                      Enjoy cruising trips to other ports with yacht club members.

                        </p>
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
                        <p>
                        Saturday Buoy racing series for both racing class and cruising class boats,
                         are held on most weekends, June through September.
                        Two long distant weekend races, one to and from Sheboygan and the other to and from Milwaukee are fun races for which individual awards are given.
                        </p>
                        <br />
                        <p>
                        The Port Washington Yacht Club sponsors the across the lake Clipper Cup race and hosts the west shore and across the lake 'Double Handed' race. Both races finish at Port Washington Harbor with award parties held at the yacht club.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Social Functions",
                    tabIcon: GroupsIcon,
                    tabContent: (
                      <span>
                        <p>
                        Club activities include a year round social calendar that not only consists of a full schedule of fun parties,
                         but also informal group trips anytime during the year.
                         </p>
                        <br />
                        <p>
                        In addition, the Club participates in the city's Fish Day celebration and is involved in other community activities. 
                        Such activities include contributing funds to school scholarships and making the club available for charitable fund raising events.
                        </p>
                        <br />
                        <p>
                        The clubhouse bar is open each Friday evening during the summer months for use by its members and visiting boaters from other yacht clubs.
                        </p>
                      </span>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 },
                }}
                tabs={[
                  {
                    tabButton: "Schedule",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    ),
                  },
                  {
                    tabButton: "Become A Member",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                        Requirements for membership are:

                      Interest in boating (boat ownership is not required)
                        A completed application including signatures of two current PWYC members
                      $25 check (non-refundable application fee)
                        </p>
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
                        <Button color="primary" round>
                <CardMembershipIcon className={classes.icons} /> Click here to view membership application
              </Button>
                      </span>
                    
                    ),
                  }
                 
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
