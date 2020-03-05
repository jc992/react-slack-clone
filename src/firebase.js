import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDWrqY4zIPE-W2V3832zEQbo5hKz83llL8",
    authDomain: "slack-react-app-90d4d.firebaseapp.com",
    databaseURL: "https://slack-react-app-90d4d.firebaseio.com",
    projectId: "slack-react-app-90d4d",
    storageBucket: "slack-react-app-90d4d.appspot.com",
    messagingSenderId: "1063597359776",
    appId: "1:1063597359776:web:211f8fb1d21316e75b3fc5",
    measurementId: "G-S9E6CK2R9Y"
};

firebase.initializeApp(config);

export default firebase;