import React from "react";
import styled from "styled-components";
import TechStackImg from "../../images/techstackx.svg";


const PageContainer = styled.div`
        width: 100%;
        height: 100%;
        background-color: #white;
        display: flex;
        align-items: center;
        justify-content: space-between;
`;

const ContentContainer = styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
       
        
        flex-direction: column;
`;


const StandoutImage = styled.div`
    width: 70em;
    height: 70em;
    margin-bottom: 5em;
    margin-right: 5em;

    img {
        width: 100%;
        height: 100%;
    }
    align-self: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`;

const Title = styled.h2`
    margin: 1em;
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #07294D;
    align-self: center;
`;


const Text = styled.p`
    margin: 0;
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #07294D;
`;


export function TechStack(props){
    return(
        <PageContainer>
            <ContentContainer>
                {/* <div> */}
                    <TextContainer>
                        <Title>Modern Deployment Tech Stack</Title>
                        <Text>The application is built with React, a robust framework for dynamic user interfaces. React's efficient rendering and state management are ideal for responsive apps. We utilize ElectronJS, a cross-platform framework that enhances accessibility. These technologies offer flexibility for future enhancements, allowing us to integrate filtration methods and optimize performance through local preprocessing.</Text>
                    </TextContainer>
                {/* </div> */}
                <StandoutImage>
                    <img src={TechStackImg} alt="Tech Stack" />
                </StandoutImage>
            </ContentContainer>
        </PageContainer>
    )
}