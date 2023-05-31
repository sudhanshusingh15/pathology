import React from "react";
import styled from "styled-components";
import TechStackImg from "../../images/techstack.png";


// const PageWrapper = styled.div`
//     width: 100%;
//     height: 100%;
//     background-color: yellow;
//     box-shadow: 0 0 1px rgba(0,0,0,0.17);
//     margin: 1em;
//     margin-bottom: 1.2em;
//     display: flex;
//     flex-direction: column;
//     overflow: hidden;

// `;


const PageWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: yellow;
`;

const Title = styled.h2`
    box-sizing: border-box;
    color: rgb(7, 41, 77);
    display: block;
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    height: 132px;
    letter-spacing: 2px;
    line-height: 66px;
    margin-block-end: 30px;
    margin-block-start: 10px;
    margin-bottom: 30px;
    margin-inline-end: 0px;
    margin-inline-start: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 10px;
    opacity: 1;
    overflow-x: visible;
    overflow-y: visible;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    transform: matrix(1, 0, 0, 1, 0, 0);
    width: 800px;
    -webkit-box-direction: normal;
    -webkit-font-smoothing: antialiased;
`;

const StandoutImage = styled.div`
    width: 65em;
    height: 45em;
    img {
        width: 100%;
        height: 100%;
    }
`;


export function TechStack(props){
    return(
        <PageWrapper>
            <Title>Modern Deployment Tech Stack</Title>
            <StandoutImage>
                <img src={TechStackImg} alt="Tech Stack" />
            </StandoutImage>
        </PageWrapper> 
    );
}