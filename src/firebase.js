/* const firebase = require("firebase") */
import firebase from "firebase"
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAh0LXnti0SHd4N2a9KuPh1JaIvkXb8OsA",
        authDomain: "react-contact-form-57563.firebaseapp.com",
        databaseURL: "https://react-contact-form-57563.firebaseio.com",
        projectId: "react-contact-form-57563",
        storageBucket: "react-contact-form-57563.appspot.com",
        messagingSenderId: "1006976928942",
        appId: "1:1006976928942:web:fc7fcaa445d0ea08ffb13f"
      
})

const database = firebaseApp.firestore()
export {database}
/* module.exports = database */