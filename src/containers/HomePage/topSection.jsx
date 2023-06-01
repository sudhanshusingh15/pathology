import React from "react";
import styled from "styled-components";

import TopSectionBackgroundImg from "../../images/landing-page.jpg";
// import PathologistImg from "../../images/medical_reasearch_svg.svg";
import PathologistImg2 from "../../images/Researchers-pana.svg";
import { WebsiteLogo } from "../../components/websiteLogo";
import { useMediaQuery } from "react-responsive";
// import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";


const TopSectionContainer = styled.div`
    width: 100%;
    height: 800px;
    background: url(${TopSectionBackgroundImg});
    background-position: 0px -90px;
    background-size: cover;
`;

// const BackgroundFilter = styled.div`
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(to right, rgba(35,45,56,1), rgba(255,198,0,0.4));
//     display: flex;
//     flex-direction: column;
// `;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(35,45,56,0.85);
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
  font-size: 60px;
  font: 'SF Pro, sans-serif';
  margin: 0;
  color: white;
  margin-bottom: 1em;
  max-width: 800px; /* Added this line */
  word-break: break-word; /* Added this line */
`;

// const WebsiteTitleText = styled.h1`
//     font-family: "Raleway", sans-serif;
//     color: #fff;
//     font-size: 60px;
//     font-weight: 700;
//     text-transform: uppercase;
//     margin-top: 0;
//     margin-bottom: 10px; 
//     max-width: 800px; /* Added this line */
//     word-break: break-word; /* Added this line */ 

// `;


// const SloganText = styled.h2`
//     font-size: 24px;
//     font: 'SF Pro';
//     margin: 0;
//     color: white;
//     line-height: 1.8em;
//     margin-bottom: 11em;

// `;

export function TopSection(props) {
  const {children} = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize});


  return(
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <WebsiteLogoContainer>
          {/* <WebsiteLogo/> */}
        </WebsiteLogoContainer>
        <TopSectionInnerContainer>
        <StandoutImage>
          <img src={PathologistImg2} alt="pathologist" />
        </StandoutImage>
        <WebsiteTitleText>Sinusitis severity classification using WSI and deep learning techniques</WebsiteTitleText>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}

