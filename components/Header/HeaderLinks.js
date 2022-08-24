/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import Slide from "@material-ui/core/Slide";


// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import AirIcon from '@mui/icons-material/Air';
import DeleteIcon from "@material-ui/icons/Delete";
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SailingIcon from '@mui/icons-material/Sailing';
import AddLocationIcon from '@mui/icons-material/AddLocation';

import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

import LoginPage from "pages/loginOLD.js"


//react dom 



const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";



export default function HeaderLinks(props) {

  
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Info"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/events">
             <a className={classes.dropdownLink}>Events</a>
           </Link>,
            <Link href="/raceinfo">
              <a className={classes.dropdownLink}>Races</a>
            </Link>,
             <Link href="/charterinfo">
             <a className={classes.dropdownLink}>Charters</a>
           </Link>,
            <Link href="/history">
            <a className={classes.dropdownLink}>Club History</a>
          </Link>,
            <Link href="/links">
            <a className={classes.dropdownLink}>Links</a>
          </Link>,
           
          
            <a
              href="http://www.pwycwi.com/index.php?option=com_content&view=article&id=1&Itemid=1"
              target="_blank"
              className={classes.dropdownLink}
            >
              Old Site
            </a>,
            
                     <a
                     href="https://www.pwycwi.com/index.php?option=com_jevents&task=month.calendar&year=2022&month=08&day=15&Itemid=20"
                     target="_blank"
                     className={classes.dropdownLink}
                   >
                    Events Calendar        
                 </a>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Weather"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={AirIcon}
          dropdownList={[
        
             <a
             href="https://forecast.weather.gov/MapClick.php?lat=43.3876&lon=-87.8711"
             target="_blank"
             className={classes.dropdownLink}
           >
             Forecast
           </a>, 
         <a
         href="https://radar.weather.gov/?settings=v1_eyJhZ2VuZGEiOnsiaWQiOiJsb2NhbCIsImNlbnRlciI6Wy04OC41NSw0Mi45NjhdLCJsb2NhdGlvbiI6bnVsbCwiem9vbSI6NywiZmlsdGVyIjoiV1NSLTg4RCIsImxheWVyIjoiYnJlZl9yYXciLCJzdGF0aW9uIjoiS01LWCJ9LCJhbmltYXRpbmciOmZhbHNlLCJiYXNlIjoic3RhbmRhcmQiLCJhcnRjYyI6ZmFsc2UsImNvdW50eSI6ZmFsc2UsImN3YSI6ZmFsc2UsInJmYyI6ZmFsc2UsInN0YXRlIjpmYWxzZSwibWVudSI6dHJ1ZSwic2hvcnRGdXNlZE9ubHkiOnRydWUsIm9wYWNpdHkiOnsiYWxlcnRzIjowLjgsImxvY2FsIjowLjYsImxvY2FsU3RhdGlvbnMiOjAuOCwibmF0aW9uYWwiOjAuNn19#/
         "
         target="_blank"
         className={classes.dropdownLink}
       >
         Radar
       </a>, 
        <a
        href="/https://www.sailflow.com/map#"
        target="_blank"
        className={classes.dropdownLink}
      >
        SailFlow
      </a>,
            <a
              href="http://www.pwycwi.com/index.php?option=com_content&view=article&id=1&Itemid=1"
              target="_blank"
              className={classes.dropdownLink}
            >
          Placeholder
            </a>,
    
          ]}
        />
      </ListItem>

     
              
      <ListItem className={classes.listItem}>
        <Button
          href="/member"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CardMembershipIcon className={classes.icons} /> Become A Member
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.portwashingtonwi.gov/departments/marina"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <SailingIcon className={classes.icons} /> Marina
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.google.com/maps/place/Port+Washington+Yacht+Club/@43.3918745,-87.8677297,17z/data=!3m1!4b1!4m5!3m4!1s0x8804ea1cbd453539:0x7d30452aaee626c4!8m2!3d43.3919444!4d-87.8655227"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <AddLocationIcon className={classes.icons} /> Visit
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
    
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/PWYCWI/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/PWYCWI"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>


        </Tooltip>
    


      </ListItem>
      <GridContainer>
      <Button color="transparent" simple
                    href="/loginNew">
LOGIN NEW                    </Button>
              <GridItem sm={12}>
      <Button
                  color="Danger"
                  
                  onClick={() => setClassicModal(true)}
                >
                 
                 Login
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
                    <h4 className={classes.modalTitle}>Login</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                 
<LoginPage />


                   
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button color="transparent" simple
                    href="https://www.pwycwi.com/images/PWYC_Application_-rev._2019.pdf">
                      Print Membership Form
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
      
    </List>


    
  );




}

