import React from 'react';
import styled from 'styled-components';

import Wrapper from 'components/MemberSection/Wrapper.jsx';
import MemberSection from "pages-sections/LandingPage-Sections/MemberSection.js"
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";


const Section1Styled = styled.div`
  background-color: black;
  .active {
    border-bottom: 10px solid white;
  }
`;

export default function Section1() {
  return (
    <Section1Styled id="section1">
      <Wrapper>
        <h1>Section 1</h1>

     
        <p>
        
        
        </p>
      </Wrapper>
    </Section1Styled>
  );
}