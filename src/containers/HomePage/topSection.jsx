import React from "react";
import styled from "styled-components";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
import PathologistImg from "../../images/medical_reasearch_svg.svg";
import PathologistImg2 from "../../images/Researchers-pana.svg";
import { WebsiteLogo } from "../../components/websiteLogo";

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

const WebsiteLogoContainer = styled.div`
    display: flex;
    align-items: center;
`;



const WebsiteTitleText = styled.h1`
  font-size: 26px;
  font: 'SF Pro, sans-serif';
  margin: 0;
  color: white;
  line-height: 1.8em;
  margin-bottom: 1em;
  max-width: 800px; /* Added this line */
  word-break: break-word; /* Added this line */
`;


// const SloganText = styled.h2`
//     font-size: 24px;
//     font: 'SF Pro';
//     margin: 0;
//     color: white;
//     line-height: 1.8em;
//     margin-bottom: 11em;

// `;

export function TopSection(props) {
  return(
    <TopSectionContainer>
      <BackgroundFilter>
        <WebsiteLogoContainer>
          <WebsiteLogo/>
        </WebsiteLogoContainer>
        <TopSectionInnerContainer>
        <StandoutImage>
          <img src={PathologistImg2} alt="pathologist" />
        </StandoutImage>
        <WebsiteTitleText>Digital Pathology is a user-friendly platform that uses machine learning for efficient sinusitis diagnosis with whole slide images. This ElectronJS and React built tool simplifies image uploads and customization of pre-processing. It utilizes advanced image processing techniques and a Unified Image Reader to ensure precise diagnosis and efficient data handling offering speed, flexibility, and accuracy.</WebsiteTitleText>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}

