import * as firebase from 'firebase';

  
  const config = {
    apiKey: "AIzaSyC8cOHfTHdSKRrOU6MP-Jt1tFLI-zyxNXI",
    authDomain: "saludencasamedicamentos-65ce4.firebaseapp.com",
    databaseURL: "https://saludencasamedicamentos-65ce4.firebaseio.com",
    projectId: "saludencasamedicamentos-65ce4",
    storageBucket: "saludencasamedicamentos-65ce4.appspot.com",
    messagingSenderId: "880079533840"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

    export {
    auth,
    };