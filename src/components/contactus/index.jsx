import React, { useRef } from "react";
import styled from "styled-components";
import { WebsiteLogo } from "../websiteLogo";
import { Marginer } from "../../components/marginer";
import ContactUs from "../../images/contact_us.svg";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";



const ContactAdContainer = styled.div`
    width: 100%;
    height: 500px;
    background-color: #07294D;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1.5em;
`;

const WebsiteLogoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5em;
    margin-left: 5em;
`;

const SloganContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5em;
    margin-left: 5em;
`;

const Slogan = styled.h2`
    margin: 0;
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #FFFFFF;
`;

const StandoutImage = styled.div`
    width: 35em;
    height: 29em;

    img {
        width: 100%;
        height: 100%;
    }
`;

const PaddingContainer = styled.div`
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ButtonLink = styled(Link)`
    text-decoration: none;
`;


export function ContactAd(props) {
    return (
        <ContactAdContainer>
            <Content>
                <div>
                    {/* <WebsiteLogoContainer>
                        <WebsiteLogo/>
                    </WebsiteLogoContainer> */}
                    <Marginer direction="vertical" margin="1em" />
                    <SloganContainer>
                        <PaddingContainer>
                            <Slogan>Have any questions?</Slogan>
                            <Slogan>Let's get in touch!</Slogan>
                        </PaddingContainer>
                        <ButtonLink to="/about">
                        <Button size={15}>Contact Us</Button> 
                        </ButtonLink>
                    </SloganContainer>
                    <Marginer direction="vertical" margin="1em" />
                </div>
                <StandoutImage>
                    <img src={ContactUs} alt="contact-us" />
                </StandoutImage>
            </Content>
        </ContactAdContainer>
    )
}

