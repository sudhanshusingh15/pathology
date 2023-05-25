import React from "react";
import styled from "styled-components";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";

const TopSectionContainer = styled.div`
    width: 100%;
    height: 800px;
    background: url(${TopSectionBackgroundImg});
    background-position: 0px -200px;
    background-size: cover;
`;

export function TopSection(props) {
  return <TopSectionContainer>boom</TopSectionContainer>
}