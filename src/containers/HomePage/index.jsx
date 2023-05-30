import React from "react";
import { PageContainer } from "../../components";
import { TopSection } from "./topSection";
import { Navbar } from "../../components/navbar";

export function HomePage(props){
    return(
        <PageContainer>
            <TopSection>
                <Navbar/>
            </TopSection>
        </PageContainer>
    );
}