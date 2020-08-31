import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAOcrvNBhn7x5mfc6RVtinYSISTNIZ1Qbo',
  authDomain: 'todo-app-a935d.firebaseapp.com',
  databaseURL: 'https://todo-app-a935d.firebaseio.com',
  projectId: 'todo-app-a935d',
  storageBucket: 'todo-app-a935d.appspot.com',
  messagingSenderId: '482976467607',
  appId: '1:482976467607:web:713c151bc418e1ea9cf7d2',
  measurementId: 'G-7WTVL5HJ23',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
const firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
// firebase.analytics(); /* fails */

// export default async (/* { app, router, Vue ... } */) => {
//   // something to do
// };
