import {
  LOAD_PROFILE,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESSFUL,
  LOGOUT,
} from '../actionType';

const initialState = {
  accessToken: sessionStorage.getItem('utube-v2-access-token')
    ? sessionStorage.getItem('utube-v2-access-token')
    : null,
  user: sessionStorage.getItem('utube-v2-user')
    ? JSON.parse(sessionStorage.getItem('utube-v2-user'))
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESSFUL:
      return {
        ...prevState,
        loading: false,
        accessToken: payload,
      };

    case LOGIN_FAILED:
      return {
        ...prevState,
        loading: false,
        accessToken: null,
        error: payload,
      };

    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };

    case LOGOUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
      };

    default:
      return prevState;
  }
};
