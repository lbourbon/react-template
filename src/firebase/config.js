import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD9gVgekSaM6oE6APvRRNEBP43mMLMh6P0",
  authDomain: "avaliacaopre.firebaseapp.com",
  databaseURL: "https://avaliacaopre.firebaseio.com",
  projectId: "avaliacaopre",
  storageBucket: "avaliacaopre.appspot.com",
  messagingSenderId: "567088595339",
  appId: "1:567088595339:web:c71610cf330889bd6eef8e",
  measurementId: "G-016DJZL7FG"
};

//!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
firebase.initializeApp(config)

export default firebase;
