import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDBIoDH7eE6FC8ipLokgLJMD-nokAlkbIw",
    authDomain: "scheduler-2f3c0.firebaseapp.com",
    databaseURL: "https://scheduler-2f3c0-default-rtdb.firebaseio.com",
    projectId: "scheduler-2f3c0",
    storageBucket: "scheduler-2f3c0.appspot.com",
    messagingSenderId: "137632839105",
    appId: "1:137632839105:web:4b903bb8335cef0956ab40",
    measurementId: "G-H8DD10MMP6"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };