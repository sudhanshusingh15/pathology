import React from "react";
import styled from "styled-components";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { deviceSize } from "../../components/responsive";
import { Button } from "../../components/button2";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'SF Pro', sans-serif;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
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
    margin-left: 5em;
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
const H3 = styled.h3`
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    color: rgb(7, 41, 77);
    letter-spacing: 1px;
    line-height: 44px;
    text-align: center;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
`;

const P = styled.p`
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    color: rgb(7, 41, 77);
    letter-spacing: 0.5px;
    line-height: 30px;
    text-align: left;
    -webkit-font-smoothing: antialiased;
`;



export function UploadPage({ selectedFile, onFileChange, onFileUpload }) {
    return (
        <PageContainer>
            <Navbar />
            <InnerPageContainer>
                <ContentContainer>
                    <Title> Upload Image </Title>
                    <H3>
                        File Upload using React!
                    </H3>
                    <div>
                        <input type="file" onChange={onFileChange} />
                        <Button onClick={onFileUpload}>
                            Upload!
                        </Button>
                    </div>
                    {selectedFile && 
                        <div>
                            <H3>File Details:</H3>
                            <P>File Name: {selectedFile.name}</P>
                            <P>File Type: {selectedFile.type}</P>
                            <P>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</P>
                        </div>}
                    {!selectedFile &&
                        <div>
                            <br />
                            <H3>Choose before Pressing the Upload button</H3>
                        </div>}
                </ContentContainer>
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    )
}