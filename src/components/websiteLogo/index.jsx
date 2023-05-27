import React from "react";
import styled from "styled-components";

import WebsiteLogoImg from "../../images/logos/logo1.svg";
// import WebsiteLogoImg from "/Users/sudhanshusingh/Desktop/Senior Design/pathology/src/images/logos/logo2.svg";


const WebsiteLogoContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;

const LogoImage = styled.div`
    width: ${({size}) => (size ? size + "px" : "30em")};
    height: ${({size}) => (size ? size + "px" : "5em")};
    margin-left: 1em;
    img {
        width: 100%;
        height: 100%;
    }
`;

// const LogoTitle = styled.h2`
//     margin: 0;
//     font-size: ${({size}) => (size ? size + "px" : "5em")};
//     color: white;
//     font-weight: 900;
// `;

// width: ${({size}) => (size ? size + "px" : "5em")};
// height: ${({size}) => (size ? size + "px" : "5em")};



export function WebsiteLogo(props) {
    const {size} = props;
  return (
    <WebsiteLogoContainer>
        <LogoImage size={size}>
            <img src={WebsiteLogoImg} alt="website logo" />
        </LogoImage>
        {/* <LogoTitle size={size}> Digitial Pathology </LogoTitle> */}
    </WebsiteLogoContainer>
    );
}
