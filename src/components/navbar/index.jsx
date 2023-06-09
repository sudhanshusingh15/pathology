import React from "react";
import styled from "styled-components";
import { WebsiteLogo } from "../websiteLogo";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5em;

    background-color: ${({useTransparent}) => useTransparent ? "transparent" : "#07294D"};
`;
    
const AccessibilityContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
const AnchorLinkContainer = styled.div`
    padding: 20px;
`;

const AnchorLink = styled(Link)`
    text-decoration: none !important;
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 19.2px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    outline: none;
    -webkit-font-smoothing: antialiased;
    display: inline; /* Change here */
    letter-spacing: 1.92px;
    line-height: 19.2px;
    text-transform: uppercase;
    transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    text-decoration-color: rgb(255, 255, 255);
    text-decoration-line: none;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    height: 59.2031px;
    text-align: left;
    position: relative;
    
    &::after {
        content: "";
        position: absolute;
        bottom: -10px; /* Change here */
        left: 0;
        right: 0;
        height: 2px;
        background: #FFC600;
        transform: scaleX(0);
        transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: right;
    }

    &:hover {
        filter: contrast(0.9);
        color: #FFC600;

        &::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
`;



const SepartionLine = styled.div`
    min-width: 2px;
    height: 20%;
    background-color: #ffc600;
    
`;

export function Navbar(props){
    const {useTransparent} = props;
    return(
        <NavbarContainer useTransparent= {useTransparent}>
            <WebsiteLogo/>
            <AccessibilityContainer>
                <AnchorLinkContainer>
                    <AnchorLink to="/user/access/signin">LOG-IN</AnchorLink>
                </AnchorLinkContainer>
                <SepartionLine/>
                <AnchorLinkContainer>
                    <AnchorLink to="/user/access/signup">REGISTER</AnchorLink>
                </AnchorLinkContainer>
                <SepartionLine/>
                <AnchorLinkContainer>
                    <AnchorLink to="/upload">UPLOAD</AnchorLink>
                </AnchorLinkContainer>
                <SepartionLine/>
                <AnchorLinkContainer>
                    <AnchorLink to="/about">ABOUT</AnchorLink>
                </AnchorLinkContainer>
            </AccessibilityContainer>
        </NavbarContainer>
    );
}

