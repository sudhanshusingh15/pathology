import React from "react";
import styled from "styled-components";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import PathologistImg from "../../images/medical_reasearch_svg.svg";
import PathologistImg2 from "../../images/Researchers-pana.svg";

const TopSectionContainer = styled.div`
    width: 100%;
    height: 800px;
    background: url(${TopSectionBackgroundImg});
    background-position: 0px -90px;
    background-size: cover;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(35,45,56,1), rgba(255,198,0,0.4));
    display: flex;
    flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const StandoutImage = styled.div`
    width: 44em;
    height: 34em;
    img {
        width: 100%;
        height: 100%;
    }
`;

// const WebsiteTitle = styled.h2`
//     font-size: 24px;
//     margin: 0;
//     color: white;
//     line-height: 1.8em;
// `;

export function TopSection(props) {
  return(
    <TopSectionContainer>
      <BackgroundFilter>
        {/* <WebsiteTitle>Digital Pathology</WebsiteTitle> */}
        <StandoutImage>
          <img src={PathologistImg2} alt="pathologist" />
        </StandoutImage>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}