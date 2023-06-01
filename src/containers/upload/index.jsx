import React, { useState } from 'react';
import { PageContainer, InnerPageContainer } from "../../components/pageContainer";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import styled from "styled-components";
import { Button } from "../../components/button2";
import axios from 'axios';

const UploadContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 2em;
`;

const UploadForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const FileName = styled.p`
    margin-top: 10px;
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #07294D;
`;

const HiddenUploadInput = styled.input`
    display: none;
`;

const UploadText = styled.h2`
    font-family: "FuturaCnd", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 48px;
    font-weight: 400;
    color: #07294D;
`;

const UploadAnimation = styled.div`
    display: ${props => (props.isUploading ? 'block' : 'none')};
    margin-top: 2em;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 5s linear infinite;
`;



export function UploadPage() {
    const [isUploading, setIsUploading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const fileInput = React.createRef();

    const handleFileSelect = event => {
        setSelectedFile(event.target.files[0]?.name || null);
    };

    const handleUpload = event => {
        event.preventDefault();
        setIsUploading(true);
        
        const formData = new FormData();
        formData.append('file', fileInput.current.files[0]);
    
        // axios.post('http://localhost:3000/upload', formData)
        //     .then(response => {
        //         console.log('File uploaded successfully');
        //         setIsUploading(false);
        //     })
        //     .catch(error => {
        //         console.error('There was an error uploading the file', error);
        //         setIsUploading(false);
        //     });
    };

    const triggerFileSelectPopup = (event) => {
        event.preventDefault();
        fileInput.current.click();
    };

    return (
        <PageContainer>
            <Navbar />
            <InnerPageContainer>
                <UploadContainer>
                    <UploadText>Select an image to upload</UploadText>
                    <UploadForm onSubmit={handleUpload}>
                        <HiddenUploadInput 
                            ref={fileInput}
                            type="file" 
                            accept="image/*" 
                            onChange={handleFileSelect} 
                        />
                        <Button onClick={triggerFileSelectPopup}>
                            Choose File
                        </Button>
                        <FileName>{selectedFile || 'No file selected'}</FileName>
                        <Button type="submit">Upload</Button>
                    </UploadForm>
                    <UploadAnimation isUploading={isUploading} />
                </UploadContainer>
            </InnerPageContainer>
            <Footer />
        </PageContainer>
    );
}
