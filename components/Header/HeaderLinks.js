/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
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
            <Link href="/raceinfo">
              <a className={classes.dropdownLink}>Races</a>
            </Link>,
             <Link href="/charterinfo">
             <a className={classes.dropdownLink}>Charters</a>
           </Link>,
            <Link href="/history">
            <a className={classes.dropdownLink}>History</a>
          </Link>,
            <Link href="/pages-sections/Components-Sections/SectionRaces.js">
            <a className={classes.dropdownLink}>Info</a>
          </Link>,
           
          
            <a
              href="http://www.pwycwi.com/index.php?option=com_content&view=article&id=1&Itemid=1"
              target="_blank"
              className={classes.dropdownLink}
            >
              Old Site
            </a>,
          ]}
        />
      </ListItem>
      <Link href="/login">
             <a className={classes.link}>
               <Button color="success" size="lg" simple >
                 Login
               </Button>
               
             </a>
           </Link>
      <ListItem className={classes.listItem}>
        <Button
          href="https://weather.com/weather/tenday/l/Port+Washington+WI?canonicalCityId=a187693f82067a61c2a7362b30e52ada3364c6208f939264e433aa5ed1abaa35"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Icon className={classes.icons}>unarchive</Icon> Weather
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.facebook.com/PWYCWI"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> LINK
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.facebook.com/PWYCWI"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
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
    </List>
  );
}
