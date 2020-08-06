import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBccC20iQ7PpS_t_DR1hlQQOrW4rjgyahM",
    authDomain: "dtcroute-47890.firebaseapp.com",
    databaseURL: "https://dtcroute-47890.firebaseio.com",
    projectId: "dtcroute-47890",
    storageBucket: "dtcroute-47890.appspot.com",
    messagingSenderId: "965398705996",
    appId: "1:965398705996:web:43666d901f95556eb0c1e9",
    measurementId: "G-2GRZM9X2GD"
};
// Initialize Firebase
const Firebase_Routes = firebase.initializeApp(firebaseConfig,"secondary");
export default Firebase_Routes;