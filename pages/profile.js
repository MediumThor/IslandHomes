import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";

import CustomInput from "components/CustomInput/CustomInput.js";


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="PWYC"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image="/img/bg2.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src="/img/faces/christian.jpg"
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h1 className={classes.title}>Sail Racing Info</h1>
                    <h6>or list for a crew call</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Find a vessel to crew on, or list your vessel if youre looking for crew.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Find Boat",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/examples/studio-1.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/studio-2.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/examples/studio-5.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/studio-4.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Find Crew",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                labelText="Name of Boat"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
               <CustomInput
                labelText="Class"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
               <CustomInput
                labelText="Class"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
               <CustomInput
                labelText="Skipper"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <Button color="primary" round>
                Submit Listing
              </Button>
                          
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Find Crew",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                labelText="Name of Boat"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
               <CustomInput
                labelText="Class"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
               <CustomInput
                labelText="Class"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
               <CustomInput
                labelText="Skipper"
                id="float"
                formControlProps={{
                  fullWidth: true,
                }}
              />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                          <Button color="primary" round>
                Submit Listing
              </Button>
                          
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
