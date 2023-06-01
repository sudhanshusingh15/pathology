import axios from 'axios';
import React, { Component } from 'react';
import { UploadPage } from './index.jsx';

class App extends Component {

    state = {
        selectedFile: null
    };

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        console.log(this.state.selectedFile);
        axios.post("http://localhost:3000/api/uploadfile", formData);
    };

    render() {
        return (
            <UploadPage 
                selectedFile={this.state.selectedFile}
                onFileChange={this.onFileChange}
                onFileUpload={this.onFileUpload}
            />
        );
    }
}

export default App;
