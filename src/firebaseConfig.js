import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBL9IDoIlijo5OU5s040HblX9-nGeGXdqo',
  authDomain: 'mmonster-rpg.firebaseapp.com',
  databaseURL: 'https://mmonster-rpg-default-rtdb.firebaseio.com',
  projectId: 'mmonster-rpg',
  storageBucket: 'mmonster-rpg.appspot.com',
  messagingSenderId: '979368632399',
  appId: '1:979368632399:web:de9e71c3e0c72a922e0a3a',
  measurementId: 'G-JW1FT9MM0F'
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
