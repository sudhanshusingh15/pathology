import React from "react";
import styled from "styled-components";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { TopSection } from "./topSection";
import { Navbar } from "../../components/navbar";
import { TechStack } from "../../components/techstack";
import { deviceSize } from "../../components/responsive";
import { ContactAd } from "../../components/contactus";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex;

  

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

export function HomePage(props){
    return(
        <PageContainer>
            <TopSection>
                <Navbar useTransparent/>
            </TopSection>
            <Marginer direction="vertical" margin="5px" />
            <InnerPageContainer>
                <ContentContainer>
                    <TechStack />
                </ContentContainer>
                <ContactAd />
            </InnerPageContainer>
            <Marginer direction="vertical" margin="5px" />
            <Footer />
        </PageContainer>
    );
}

