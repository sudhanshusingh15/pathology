import React from "react";
import styled from "styled-components";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { AccountBox } from "../../components/accountBox";
import { useParams } from "react-router-dom";


export function AboutUs(props) {
    return(
        <PageContainer>
            <Navbar/>
            <InnerPageContainer>
                about us
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    )
}