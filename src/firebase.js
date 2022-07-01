import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC2UkGsqYHsWBqzCgyF-RFPoPY_dKRCLx0',
  authDomain: 'utube-clone-1f25a.firebaseapp.com',
  projectId: 'utube-clone-1f25a',
  storageBucket: 'utube-clone-1f25a.appspot.com',
  messagingSenderId: '622433529035',
  appId: '1:622433529035:web:79b8a1f066928723a7bf4e',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
