import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDYGeWbUhE8XUY-zVtKSDPeXpd0oVx64C4",
  authDomain: "fir-test-2e3bc.firebaseapp.com",
  databaseURL: "https://fir-test-2e3bc.firebaseio.com",
  projectId: "fir-test-2e3bc",
  storageBucket: "",
  messagingSenderId: "1015852994069"
};

firebase.initializeApp(config);

export default firebase;
