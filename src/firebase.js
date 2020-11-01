import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyBT8pmVj9KXt0PP6azcl7-uVM4i6sm2K4Y",
    authDomain: "slackchat-df96d.firebaseapp.com",
    databaseURL: "https://slackchat-df96d.firebaseio.com",
    projectId: "slackchat-df96d",
    storageBucket: "slackchat-df96d.appspot.com",
    messagingSenderId: "201159736804",
    appId: "1:201159736804:web:e8e98c1f31408aa1acdbf1",
    measurementId: "G-JBYGJZF115"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;