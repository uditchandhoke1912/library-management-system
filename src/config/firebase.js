const firebase = require("firebase");
  require("firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyDwc0rOxxHvEf2_CH8pzk5gOpkQhbMSSkw",
    authDomain: "library-mgmnt-by-udit.firebaseapp.com",
    databaseURL: "https://library-mgmnt-by-udit.firebaseio.com",
    projectId: "library-mgmnt-by-udit",
    storageBucket: "library-mgmnt-by-udit.appspot.com",
    messagingSenderId: "690860687037",
    appId: "1:690860687037:web:73e2a7e72f61bb0d"
  };
  var fire = firebase.initializeApp(firebaseConfig);
export default fire;
