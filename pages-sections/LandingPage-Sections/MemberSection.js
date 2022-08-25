import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Userfront from "@userfront/react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Card from "components/Card/Card.js";


import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function MemberSection() {

  
  const classes = useStyles();
  const userData = JSON.stringify(Userfront.user, null, 2);
  const userName = JSON.stringify(Userfront.user.username, null, 2);


  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>

         
        <h2 className={classes.title}>Hello, {userName} you are logged in</h2>

      <h5 className={classes.description}>            Here we can have a custom message, or build in another admin component

Maybe this would be a good spot for a message board, scoring sheets for races, an admin calendar or any other custom "plugins" we can think up.
        
      </h5>
      </Card>
        </GridItem>
      </GridContainer>
      <div>

   
        <GridContainer>
          <GridItem>
          <TextField id="outlined-basic" label="News" variant="outlined" />
          <TextField id="outlined-basic" label="New NOR Announcement" variant="outlined" />
          
          </GridItem>
        

          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Button Title"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
            
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Button Title"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Button title"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
