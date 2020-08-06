import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyAujDF5Y9-4v8X-AB8PRVisd-eFAASFKy0",
  authDomain: "dtcbus-6cdee.firebaseapp.com",
  databaseURL: "https://dtcbus-6cdee.firebaseio.com",
  projectId: "dtcbus-6cdee",
  storageBucket: "dtcbus-6cdee.appspot.com",
  messagingSenderId: "188987289647",
  appId: "1:188987289647:web:cde5c36ed4fa08d28216da",
  measurementId: "G-X549HV3PSE"
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;