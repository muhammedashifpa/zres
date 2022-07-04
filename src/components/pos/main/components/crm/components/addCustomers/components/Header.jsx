import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <>
      <HeaderWrapper>
        <h1>{props.title}</h1>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  display: block;
  h1 {
    color: #040153;
    font-size: 20px;
    font-weight: 500;
  }
`;

export default Header;
