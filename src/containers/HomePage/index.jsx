import React from "react";
import styled from "styled-components";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { Navbar } from "../../components/navbar";
import { TechStack } from "../../components/techstack";
import { deviceSize } from "../../components/responsive";
import { ContactAd } from "../../components/contactus";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

export function HomePage(props){
    return(
        <PageContainer>
            <TopSection>
                <Navbar/>
            </TopSection>
            <InnerPageContainer>
                <ContentContainer>
                    <TechStack />
                    
                </ContentContainer>
                <ContactAd />
            </InnerPageContainer>
        </PageContainer>
    );
}