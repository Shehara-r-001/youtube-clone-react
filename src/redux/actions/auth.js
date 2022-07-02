import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import auth from '../../firebase';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESSFUL,
  LOAD_PROFILE,
  LOGIN_FAILED,
} from '../actionType';

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    // console.log(response);

    const accessToken = response.user.accessToken;

    const profile = {
      name: response.user.displayName,
      imgUrl: response.user.photoURL,
    };

    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log('error : ', error.message);

    dispatch({
      type: LOGIN_FAILED,
      payload: error.message,
    });
  }
};
