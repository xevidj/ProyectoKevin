import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDA2CcnsgGcy1CD2NQjHrVdEUnD40WfBRc",
    authDomain: "reddit-clone-11abc.firebaseapp.com",
    databaseURL: "https://reddit-clone-11abc.firebaseio.com",
    projectId: "reddit-clone-11abc",
    storageBucket: "reddit-clone-11abc.appspot.com",
    messagingSenderId: "668856518557",
};

firebase.initializeApp(config);

export default firebase;
