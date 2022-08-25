import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";


// core components
import CustomInput from "components/CustomInput/CustomInput.js";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import IconButton from "@material-ui/core/IconButton";
import Card from "components/Card/Card.js";


import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import TeamSection2 from "pages-sections/LandingPage-Sections/TeamSection2.js";
import TeamSectionCruising from "pages-sections/LandingPage-Sections/TeamSectionCruising.js"
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import SectionBasics from "../pages-sections/Components-Sections/SectionBasics";
import SectionTypography from "../pages-sections/Components-Sections/SectionTypography";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function LandingPage(props) {
  const [classicModal, setClassicModal] = React.useState(false);

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Back the Club"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="https://i.imgur.com/LJAaNAN.jpeg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Sail Racing</h1>
              <h4>
               Off the coast of Port Washington, just west of the harbor mouth. Summer bouy races nearly every Wednesday evening and Saturday Afternoon. 

              </h4>
              <br />
              <Button
                color="success"
                size="lg"
                href="https://www.pwycwi.com/index.php?option=com_jevents&task=month.calendar&year=2022&month=08&day=15&Itemid=20"
                target="_blank"
                rel="noopener noreferrer"
                round
              >
                <i className="" />
                Event Calendar
              </Button>
              <Button
                color="Success"
                size="lg"
                href="https://www.pwycwi.com/index.php?option=com_jevents&task=month.calendar&year=2022&month=08&day=15&Itemid=20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="" />
                Event Calendar
              </Button>
            </GridItem>
          </GridContainer>
          
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>


        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.title}>
              
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={4}>
                <Button
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                  round
                >
                  <LibraryBooks className={classes.icon} />
                  Crew Application
                </Button>
            
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal,
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Find a Boat</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p>
                  

                  Find a boat to crew on submission form 

              <CustomInput
                labelText="Name"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
                <CustomInput
                labelText="Years Of Experience"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
                <CustomInput
                labelText="Preferred Position"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
                <CustomInput
                labelText="Prefered Division"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
          
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button color="success" simple
                    href="https://www.pwycwi.com/images/PWYC_Application_-rev._2019.pdf">
            Submit Info to Club
                    </Button>
                    
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </GridItem>
            </GridContainer>
      
          </GridItem>
         
       
        </GridContainer>
  

          <TeamSection />
          <TeamSection2 />
          <TeamSectionCruising />
          <WorkSection />
          <SectionTypography />
        </div>
      </div>
      <GridItem>
       <Card>

<Footer />    
</Card>
         
         </GridItem>   
    </div>
  );
}
