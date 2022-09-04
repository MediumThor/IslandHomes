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

import LoginPage from "components/Login.js"


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
             <a className={classes.dropdownLink}>Floor Plans</a>
           </Link>,
            <Link href="/raceinfo">
              <a className={classes.dropdownLink}>Trim Packages</a>
            </Link>,
             <Link href="/charterinfo">
             <a className={classes.dropdownLink}>Custom Builds</a>
           </Link>,
            <Link href="/history">
            <a className={classes.dropdownLink}>Sustainability</a>
          </Link>,
            <Link href="/links">
            <a className={classes.dropdownLink}>Links</a>
          </Link>,
           
          
          
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
          <CardMembershipIcon className={classes.icons} /> Contact Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.portwashingtonwi.gov/departments/marina"
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

              <GridItem sm={12}>
      <Button
                  color="warning" round
                  
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
                    <h4 className={classes.modalTitle}>
                    
                    
                    
                    </h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                 
<LoginPage />


                   
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                  
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



// WORKING LOGIN BUTTON
//      <Button color="warning" round
//href="/loginNew">
//LOGIN                   </Button>

