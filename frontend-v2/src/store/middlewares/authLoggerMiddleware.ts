import { Middleware } from '@reduxjs/toolkit';

// Auth Action types
enum AuthActionTypes {
  LOGIN_SUCCESS = 'auth/loginSuccess',
  LOGOUT = 'auth/logout',
}

export const authLoggerMiddleware: Middleware =
  (storeApi) => (next) => (action) => {
    if (action.type === AuthActionTypes.LOGIN_SUCCESS) {
      console.log('User logged in successfully.', storeApi);
    } else if (action.type === AuthActionTypes.LOGOUT) {
      console.log('User logged out.', storeApi);
    }

    return next(action);
  };
