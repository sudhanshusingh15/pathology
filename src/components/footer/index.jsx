import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


import { WebsiteLogo } from "../websiteLogo";

const FooterContainer = styled.div`
    width: 100%;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    padding: 2em 3em;
    border-top: 0.6px solid #000000;
    padding-bottom: 1.5em;
    
`;

const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    

`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;

    &:not(:last-of-type){
        margin-right: 5em;
    }

`;

const BottomContainer = styled.div`
    height: 70px;
    justify-content: space-between;
    display: flex;
    border-top: 5px solid #FFC600;
    padding-top: 10px;

`;

const RightBottomContainer = styled.div`
    padding-top: 50px;
    display: flex;
    align-items: center; 

`;

const LeftBottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    

`;

const Title = styled.h2`
    margin: 0;
    margin-bottom: 13px;
    color: #07294D;
    font-weight: 600;
    font-size: 20px;

`;

const FLink = styled.a`
    text-decoration: none;
    color: #07294D;
    font-weight: 500;
    margin-bottom: 8px;

`;

const PrivacyText = styled.h6`
    margin-top: 5em;
    margin-right: 11em;
    color: #6F6F6F;
    font-size: 11px;
    
    

`;

export function Footer(props){
    return(
        <FooterContainer>
            <TopContainer>
                <ContentContainer>
                    <Title>Useful Links</Title>
                    <FLink href="/about">About</FLink>
                    <FLink href="https://senior-project-drexel.web.app/projects/75">Project Website</FLink>
                    <FLink href="https://drexel.us4.list-manage.com/subscribe?u=34daeb1d15768cc8cb569e3b5&id=2e01407592">Drexel CCI Newsletter</FLink>
                </ContentContainer>
                <ContentContainer>
                    <Title>Contact Info</Title>
                    <FLink>Drexel University, Philadelphia, PA, USA</FLink>
                    <FLink>+1 (215) 895-2000</FLink>
                    <FLink href="https://www.drexel.edu/cci">drexel.edu/cci</FLink>
                </ContentContainer>
            </TopContainer>
            <BottomContainer>
                <LeftBottomContainer>
                    <WebsiteLogo />
                    <PrivacyText>© All Rights Reserved 2023</PrivacyText>
                </LeftBottomContainer>
                <RightBottomContainer>
                    <FLink href="https://github.com/sudhanshusingh15/pathology" style={{marginRight: "10px"}} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </FLink>
                    <FLink href="https://senior-project-drexel.web.app/projects/75" style={{marginLeft: "10px"}} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGlobe} size="2x" />
                    </FLink>
                </RightBottomContainer>
            </BottomContainer>
        </FooterContainer>
    )
}

