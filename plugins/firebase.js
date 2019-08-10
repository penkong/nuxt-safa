import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBPqwWXHieBkzNdtkkp0OGAU9Vh2ASOx1A",
  authDomain: "vue-safa.firebaseapp.com",
  databaseURL: "https://vue-safa.firebaseio.com",
  projectId: "vue-safa",
  storageBucket: "",
  messagingSenderId: "650561370831",
  appId: "1:650561370831:web:d87dcbaeb27b343a"
};
// Initialize Firebase
let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(config)
}

export const db = app.firestore()
// export const db = app.database()
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export default firebaseApp.firestore();

