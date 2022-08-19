import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <h2>Privacy Continued...</h2>
          </div>
          <GridContainer>
          
        
              <h4 className={classes.title}>How we gather information from users</h4>
              
            
              <Muted>
              How we collect and store information depends on the page you are visiting, the activities in which you elect to participate and the services provided. For example, you may be asked to provide information when you register for access to certain portions of our site or request certain features, such as newsletters or when you make a purchase. You may provide information when you participate in sweepstakes and contests, message boards and chat rooms, and other interactive areas of our site. Like most Web sites,PWYCWI.com also collects information automatically and through the use of electronic tools that may be transparent to our visitors. For example, we may log the name of your Internet Service Provider or use cookie technology to recognize you and hold information from your visit. Among other things, the cookie may store your user name and password, sparing you from having to re-enter that information each time you visit, or may control the number of times you encounter a particular advertisement while visiting our site. As we adopt additional technology, we may also gather information through other means. In certain cases, you can choose not to provide us with information, for example by setting your browser to refuse to accept cookies, but if you do you may be unable to access certain portions of the site or may be asked to re-enter your user name and password, and we may not be able to customize the site’s features according to your preferences.
              </Muted>

              <h4 className={classes.title}>What we do with the information we collect</h4>
              
            
              <Muted>
              Like other Web publishers, we collect information to enhance your visit and deliver more individualized content and advertising. We respect your privacy and do not share your information with anyone.             
               </Muted>

               <Muted>
               Aggregated Information (information that does not personally identify you) may be used in many ways. For example, we may combine information about your usage patterns with similar information obtained from other users to help enhance our site and services (e.g., to learn which pages are visited most or what features are most attractive). Aggregated Information may occasionally be shared with our advertisers and business partners. Again, this information does not include any Personally Identifiable Information about you or allow anyone to identify you individually.              
               
               </Muted>

               <Muted>
               We may use Personally Identifiable Information collected on to communicate with you about your registration and customization preferences; our Terms of Service and privacy policy; services and products offered by and other topics we think you might find of interest.               
               </Muted>

               <Muted>
               Personally Identifiable Information collected by may also be used for other purposes, including but not limited to site administration, troubleshooting, processing of e-commerce transactions, administration of sweepstakes and contests, and other communications with you. Certain third parties who provide technical support for the operation of our site (our Web hosting service for example) may access such information. We will use your information only as permitted by law. In addition, from time to time as we continue to develop our business, we may sell, buy, merge or partner with other companies or businesses. In such transactions, user information may be among the transferred assets. We may also disclose your information in response to a court order, at other times when we believe we are reasonably required to do so by law, in connection with the collection of amounts you may owe to us, and/or to law enforcement authorities whenever we deem it appropriate or necessary. Please note we may not provide you with notice prior to disclosure in such cases.               
              
               </Muted>

               <h4 className={classes.title}>Affiliated sites, linked sites and advertisements</h4>

               <Muted>
               PWYCWI.com expects its partners, advertisers and affiliates to respect the privacy of our users. Be aware, however, that third parties, including our partners, advertisers, affiliates and other content providers accessible through our site, may have their own privacy and data collection policies and practices. For example, during your visit to our site you may link to, or view as part of a frame on a page, certain content that is actually created or hosted by a third party. Also, through PWYCWI.com you may be introduced to, or be able to access, information, Web sites, features, contests or sweepstakes offered by other parties. is not responsible for the actions or policies of such third parties. You should check the applicable privacy policies of those third parties when providing information on a feature or page operated by a third party.              
               
               </Muted>

               <Muted>
               While on our site, our advertisers, promotional partners or other third parties may use cookies or other technology to attempt to identify some of your preferences or retrieve information about you. For example, some of our advertising is served by third parties and may include cookies that enable the advertiser to determine whether you have seen a particular advertisement before. Other features available on our site may offer services operated by third parties and may use cookies or other technology to gather information. does not control the use of this technology by third parties or the resulting information, and is not responsible for any actions or policies of such third parties.               
               </Muted>

               <Muted>
               
               You should also be aware that if you voluntarily disclose Personally Identifiable Information on message boards or in chat areas, that information can be viewed publicly and can be collected and used by third parties without our knowledge and may result in unsolicited messages from other individuals or third parties. Such activities are beyond the control of and this policy.               
               
               </Muted>

               <h4 className={classes.title}>Children</h4>

               <Muted>
               
               PWYCWI.com does not knowingly collect or solicit Personally Identifiable Information from or about children under 13 except as permitted by law. If we discover we have received any information from a child under 13 in violation of this policy, we will delete that information immediately. If you believe PWYCWI.com has any information from or about anyone under 13, please contact us at the address listed below.               
               
               </Muted>

         

               <Muted>
               
               

               
               </Muted>

               <h4 className={classes.title}>Changes to this Policy</h4>

               <Muted>
               
               
               PWYCWI.com reserves the right to change this policy at any time. Please check this page periodically for changes. Your continued use of our site following the posting of changes to these terms will mean you accept those changes. Information collected prior to the time any change is posted will be used according to the rules and laws that applied at the time the information was collected.               
               </Muted>

               <h4 className={classes.title}>Governing law</h4>
               <Muted>
               
               This policy and the use of this Site are governed by Wisconsin and Federal law. If a dispute arises under this Policy we agree to first try to resolve it with the help of a mutually agreed-upon mediator in the following location: Port Washington, Wisconsin. Any costs and fees other than attorney fees associated with the mediation will be shared equally by each of us.

               
               </Muted>

               <Muted>
               
               If it proves impossible to arrive at a mutually satisfactory solution through mediation, we agree to submit the dispute to binding arbitration at the following location: Port Washington, Wisconsin, under the rules of the American Arbitration Association. Judgment upon the award rendered by the arbitration may be entered in any court with jurisdiction to do so.
               
               </Muted>

               <Muted>
               
               PWYCWI.com is controlled, operated and administered entirely within the State of Wisconsin. This statement and the policies outlined herein are not intended to and do not create any contractual or other legal rights in or on behalf of any party.               
               </Muted>

               <h4 className={classes.title}>Contact Us</h4>

<Muted>
<p>

We can be reached by contacting: Email: admin@PWYCWI.com

</p>


</Muted>


            
          
              
          

       
            
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
