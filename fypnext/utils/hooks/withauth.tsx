import { createContext, useContext, useState } from 'react';
import { CurrentUserQuery, Role } from 'schema/generated/graphql';
import Cookies from 'universal-cookie';
import { AUTH_TOKEN, deleteTokenFromCookie, deleteUserFromCookie } from '../utils';
const defaultContext = {


  isSignedIn: () => false,
  logout: () => { },
  // isActive:()=>false,
  isAuthorized: (role: Role) => false
};

export const AuthContext = createContext(defaultContext);

export const useAuth = () => {
  return useContext(AuthContext);
};

export function useProviderAuth() {

  const cookie = new Cookies();
  
  const logout = () => {
    deleteUserFromCookie()
    deleteTokenFromCookie()
  };


  

  const isSignedIn = () => {
    if (cookie.get(AUTH_TOKEN)) {
      return true;
    } else {
      return false;
    }
  };

  const isAuthorized = (role: Role) => {
    console.log('auth', cookie.get('user') as CurrentUserQuery);
    const user = cookie.get('user') as CurrentUserQuery
    if (user) {
      if (user.currentUser.role === Role.Admin) {
        return true;
      }
      if (user.currentUser.role !== role) {
        return false;
      }
      return true;
    }
    return false;
  }

  return {
    // login,
    logout,
    isSignedIn,
    isAuthorized,
    // isActive
  };
}
