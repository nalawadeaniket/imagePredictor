# Image Predictor App

This is a live PWA with React js for front-end and python flask api deployed on Heroku Cloud platform.

## React Setup

Clone this Repo.

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Flask api 
It is already live on a cloud server. 

You can use the the below set of apis for your usage.

Home: https://flask-app-aniket.herokuapp.com

Upload an image file through post: https://flask-app-aniket.herokuapp.com//upload 

Upload an image file as blob through post: https://flask-app-aniket.herokuapp.com//uploadd 

## Local Deployment
1. First, clone the repo

2. Make a copy of the the flask-api folder and open terminal in that Folder.

3. Install Python packages: \
pip install -r requirements.txt

4. Run: \
python app.py

## Notes
1. Change the URLs of the axios function to point at the intended server urls if you want to point it to local server.\
For e.g.\
Replace:-  url: 'https://flask-app-aniket.herokuapp.com//upload' \
With:-  url: 'http://localhost:5000/upload' 

![Screenshot (300)](https://user-images.githubusercontent.com/20863253/158747491-bcd0c796-8f64-4dd5-9469-28122876789f.png)

## Screenshots

![Inkedss2_LI](https://user-images.githubusercontent.com/20863253/158742219-bc6d053e-2459-41d4-97aa-8ad3a9d7158b.jpg) ![ss1](https://user-images.githubusercontent.com/20863253/158742669-6a807a91-c57d-446c-b072-b295fe6b92f4.jpeg)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
