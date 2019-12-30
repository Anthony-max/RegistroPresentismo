import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCCOsoJF6ctZIvE7KxigvGwZbpxYDxEJAY",
    authDomain: "envios-de-reportes.firebaseapp.com",
    databaseURL: "https://envios-de-reportes.firebaseio.com",
    projectId: "envios-de-reportes",
    storageBucket: "envios-de-reportes.appspot.com",
    messagingSenderId: "1076481465867",
    appId: "1:1076481465867:web:79771e8cf7d83269aa310e",
    measurementId: "G-TR8K68MW5T"
  };
  
  firebase.initializeApp(firebaseConfig);
  

  export default firebase;