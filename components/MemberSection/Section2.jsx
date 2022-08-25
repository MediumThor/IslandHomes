import React from 'react';
import styled from 'styled-components';

import Wrapper from 'components/MemberSection/Wrapper.jsx';
import Sticky from "components/MemberSection/Sticky.js"

const Section2Styled = styled.div`background-color: #008000;`;

export default function Section2() {
  return (
    <Section2Styled id="section2">
      <Wrapper>
        <h1>Sticky note board</h1>
        <p>
         ty it out, post a sticky note here 
        </p>
      </Wrapper>
    </Section2Styled>
  );
}