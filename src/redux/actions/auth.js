import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import auth from '../../firebase';
export const login = () => async (dispatch) => {
  try {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    console.log(response);
  } catch (error) {
    console.log('error : ', error);
  }
};
