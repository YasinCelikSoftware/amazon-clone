import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA6fSzz_pRctss4z2tmd1x5c25m4rq-VH0',
  authDomain: 'challenge-522eb.firebaseapp.com',
  projectId: 'challenge-522eb',
  storageBucket: 'challenge-522eb.appspot.com',
  messagingSenderId: '13858701871',
  appId: '1:13858701871:web:9c84d43f5b4e38781d3cda',
  measurementId: 'G-QRQNMH1CSH',
};

const firebaseApp = firebase.initializeApp (firebaseConfig);

const db = firebaseApp.firestore ();
const auth = firebase.auth ();

export {db, auth};
