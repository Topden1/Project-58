import firebase from 'firebase';

  var firebaseConfig = {
   const firebaseConfig = {
  apiKey: "AIzaSyAuJOSJLPE6_k7LzBTlFsq3-Prp0N2WKz4",
  authDomain: "team-vote.firebaseapp.com",
  databaseURL: "https://team-vote-default-rtdb.firebaseio.com",
  projectId: "team-vote",
  storageBucket: "team-vote.appspot.com",
  messagingSenderId: "388893651205",
  appId: "1:388893651205:web:5c7ab0523e95a27058c76c",
  measurementId: "G-QEK2QG5WXL"
};


    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();