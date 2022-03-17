import React,{ Component} from 'react';
import axios from 'axios';
import './styles.css';
import { CameraFeed } from './components/camera-feed';


class App extends Component {
  
    state = {
 
      // Initialisation
      selectedFile: null,
      prediction:null,
      photoBlob:null,
      imageSource:null
    };
    
    // File Selected
    onFileChange = event => {
      this.setState({ selectedFile: event.target.files[0] });
      this.setState({ imageSource: 'FileUpload'});
      this.setState({ prediction: null});
    };

    // Image Upload
    uploadImage = async file => {

      const formData = new FormData();
      // Update the formData object
      formData.append('myFile', file);
      this.setState({ photoBlob: file });
      // Sending blob data to receive prediction
      axios({
        method: 'post',
        url: 'https://flask-app-aniket.herokuapp.com//uploadd',
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      }).then(
        response => {console.log(response);
          this.setState({ prediction: response.data.class });
          this.setState({ imageSource: 'Canvas'});}
          ).catch(
          errors => console.log(errors))
    };
  
    // Selected Image file uploaded
    onFileUpload = () => {
    
      const formData = new FormData();
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );

      // Sending Selected Image data to receive prediction
      axios({
        method: 'post',
        url: 'https://flask-app-aniket.herokuapp.com//upload',
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      }).then(
        response => {console.log(response);
          this.setState({ prediction: response.data.class });
        }).catch(
          errors => console.log(errors))
     
    };
    
    // Image To be Displayed 
    imageData = () => {
    
      if (this.state.imageSource == 'Canvas') {
         
        return (
          <div>
            
            <img alt="not fount" width={"300px"} src={URL.createObjectURL(this.state.photoBlob)} />
 
          </div>
        );
      } else if (this.state.imageSource == 'FileUpload') {
         
        return (
          <div>
            
            <img alt="not fount" width={"300px"} src={URL.createObjectURL(this.state.selectedFile)} />
 
          </div>
        );
      } else {
        return (
          <div>
          
            <h4>No Image Uploaded!!</h4>
          </div>
        );
      }
    };

    // Display Prediction Data
    predData = () => {
    
      if (this.state.prediction) {
         
        return (
          <div>
 
            <h1><b>{this.state.prediction}</b></h1>
            
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4></h4>
          </div>
        );
      }
    };
    // Home Screen
    // CameraFeed Library is imported here to open camera and take pictures
    render() {
    
      return (
        <div class = "App">
            <h1>
              Image Predictor
            </h1>

            <div>
                <CameraFeed sendFile={this.uploadImage} />
                <br></br>
                <input id="chooseFile" type="file" accept="image/png, image/gif, image/jpeg" onChange={this.onFileChange} />
                <br/>
                <br/>
                <button onClick={this.onFileUpload}>
                  Upload & Predict
                </button>
                
            </div>
          {this.imageData()}
          {this.predData()}
        </div>
      );
    }
  }


export default App;
