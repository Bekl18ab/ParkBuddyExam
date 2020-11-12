import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAcTdzv6O7PlTT8gyVjtvKOhe3fw-2WKbk",
    authDomain: "ovelse05.firebaseapp.com",
    databaseURL: "https://ovelse05.firebaseio.com",
    projectId: "ovelse05",
    storageBucket: "ovelse05.appspot.com",
    messagingSenderId: "842469504493",
    appId: "1:842469504493:web:874ee14926dbdf435163e4",
    measurementId: "G-TMK2B2VSLX"
}
//Kontrol om der allerede er initialiseret en instans af firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;