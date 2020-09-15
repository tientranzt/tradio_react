import firebase from 'firebase';


var config = {
  apiKey: "AIzaSyBQl_FwFbTLhPQb-qkCZUDtJYmxCIUUewE",
  authDomain: "tradio-store.firebaseapp.com",
  databaseURL: "https://tradio-store.firebaseio.com",
  projectId: "tradio-store",
  storageBucket: "tradio-store.appspot.com",
  messagingSenderId: "528439839910",
  appId: "1:528439839910:web:3695d701261c63a734f867"
};
// Initialize Firebase
firebase.initializeApp(config);


export default firebase