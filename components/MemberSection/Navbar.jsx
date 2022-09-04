import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-scroll';
import OnScreenScrolling from 'components/MemberSection/on-screen-scrolling.jsx';
import Wrapper from 'components/MemberSection/Wrapper.jsx';
import Button from "components/CustomButtons/Button.js";


const NavbarStyled = styled.div`
  font-size: 24px;
  position: fixed;
  width: 100%;
  .header {
      background: black;
    padding: 40px;
    display: flex;
    justify-content: space-around;
    margin: -40px;
    color: white;

    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid white;
    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
  }
`;


export default function Navbar() {
    return (
      <NavbarStyled>
        <div className="header">
            <Button >
            <Link activeClass="active" to="section1" spy={false} smooth={true} duration={1000}>
            Section 1
          </Link>
            </Button>
        <Button>
        <Link activeClass="active" to="section2" spy={true} smooth={true} duration={1000}>
            Section 2
          </Link>

        </Button>
     <Button>
     <Link activeClass="active" to="section3" spy={true} smooth={true} duration={1000}>
            Section 3
          </Link>

     </Button>
          
        </div>
        <div className="scrolling-buttons">
          <Wrapper>
              <OnScreenScrolling/>
          </Wrapper>
        </div>
      </NavbarStyled>
    );
  }