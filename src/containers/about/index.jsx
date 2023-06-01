import React from "react";
import styled from "styled-components";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

import akhil from "../../images/akhil.jpg";
import hruday from "../../images/hruday.jpg";
import sai from "../../images/sai.jpg";
import smrithi from "../../images/smrithi.jpg";
import sudhanshu from "../../images/sudhanshu.jpg";


const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-bottom: 1em;
`;

const Title = styled.h2`
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #07294D;
`;

const Text = styled.p`
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #07294D;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 1em;
`;

const MemberBox = styled.div`
  flex: 1;
  margin: 1em;
  padding: 1em;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
    max-height: 90%;
  }
`;

const MemberName = styled.p`
font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 0.5em;
  font-size: 1.2em;
  font-weight: 400;
  color: #07294D;
  text-align: center;
`;

const Team = styled.div`
    padding-top: 2em;
`;



export function AboutUs(props) {
    return (
        <PageContainer>
            <Navbar />
            <InnerPageContainer>
                <ContentContainer>
                    <TextContainer>
                        <Title>About Us</Title>
                        <Text>The Digital Pathology Web App is a sophisticated online platform designed for the classification of sinusitis based on whole slide image inputs. With a user-friendly interface and advanced features, the web application offers a comprehensive solution for pathologists, researchers, and developers involved in digital pathology analysis. Built using ElectronJS and React, the web application provides a responsive and intuitive frontend interface. Users can easily upload their whole slide images and apply various pre-processing techniques for enhanced analysis. The drag-and-drop functionality simplifies the image upload process, while flexible processing technique selection and adjustable parameters ensure optimal customization. The backend infrastructure leverages state-of-the-art machine learning algorithms, including convolutional neural networks (CNNs), to accurately analyze and classify sinusitis based on the provided whole slide images. Real-time verification capabilities allow pathologists and technicians to review and validate the system's findings, ensuring confidence in the analysis results. To streamline the development and training of machine learning models, the platform incorporates a Model Development Environment (MDE). With pre-installed requirements and dependencies, the MDE eliminates compatibility issues across different operating systems and processor architectures, enabling efficient model building and deployment. Advanced image processing techniques, such as Felzenszwalb, Quickshift, and SLIC segmentation algorithms, are integrated into the system. These techniques identify regions of interest (ROIs) within the whole slide images, improving the precision and performance of the classification models. By focusing on relevant ROIs, the analysis results are optimized for accurate and reliable diagnoses. Data acquisition and processing are seamlessly handled by the platform's Unified Image Reader (UIR). The UIR provides a unified interface for reading large-scale images by regions, facilitating efficient processing of massive image datasets that exceed memory limitations. The Custom Dataset (CD), an extension of PyTorch's Dataset, lies at the core of the system. CD incorporates advanced filtration algorithms and implements the Dark Region Mapping technique to handle dynamically sized datasets. This ensures that only relevant regions pass through the filtration process, enhancing the efficiency and accuracy of subsequent analysis stages. With its focus on speed, flexibility, and verifiability, the Digital Pathology Web App revolutionizes digital pathology analysis. It empowers pathologists, researchers, and developers with advanced tools and technologies to improve diagnostic precision and enhance patient care. Discover the power of the Digital Pathology Web App and experience the convergence of artificial intelligence and image processing in the field of digital pathology analysis. Join us on this transformative journey as we push the boundaries of accuracy and efficiency in pathology diagnostics.</Text>
                    </TextContainer>
                    <Team>
                    <TextContainer>
                            <Title>Meet the Team</Title>
                        </TextContainer>
                    <MemberContainer>
                        <MemberBox>
                            <img src={akhil} alt="Akhil" />
                            <MemberName>Akhil</MemberName>
                        </MemberBox>
                        
                        <MemberBox>
                            <img src={hruday} alt="Hruday" />
                            <MemberName>Hruday</MemberName>
                        </MemberBox>

                        <MemberBox>
                            <img src={sai} alt="Sai" />
                            <MemberName>Sai</MemberName>
                        </MemberBox>

                        <MemberBox>
                            <img src={smrithi} alt="Smrithi" />
                            <MemberName>Smrithi</MemberName>
                        </MemberBox>

                        <MemberBox>
                            <img src={sudhanshu} alt="Sudhanshu" />
                            <MemberName>Sudhanshu</MemberName>
                        </MemberBox>
                    </MemberContainer>
                    </Team>
                </ContentContainer>
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    )
}

