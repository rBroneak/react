import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBeZVo0SbdXdFZZv-976RqtwfMQCLo3AXE",
    authDomain: "rbroneak-95e28.firebaseapp.com",
    databaseURL: "https://rbroneak-95e28.firebaseio.com",
    projectId: "rbroneak-95e28",
    storageBucket: "rbroneak-95e28.appspot.com",
    messagingSenderId: "928403098830"
};
firebase.initializeApp(config);

export default firebase;