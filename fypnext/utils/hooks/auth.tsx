import { createContext, useContext } from 'react';
import { Role, User } from 'schema/generated/graphql';
import Cookies from 'universal-cookie';

const defaultContext = {


    isSignedIn: () => false,

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logout: () => { },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isAuthorized: (role: Role) => false
};
const AUTH_TOKEN = "AUTH";
export const AuthContext = createContext(defaultContext);

export const useAuth = () => {
    return useContext(AuthContext);
};

export function useProviderAuth() {

    const cookie = new Cookies();

    const logout = () => {
        cookie.remove('token')
    };




    const isSignedIn = () => {
        if (cookie.get(AUTH_TOKEN)) {
            return true;
        } else {
            return false;
        }
    };

    const isAuthorized = (role: Role) => {
        console.log('auth', cookie.get('user') as User);
        const user = cookie.get('user') as User
        if (user) {
            if (user.role === Role.Admin) {
                return true;
            }
            if (user.role !== role) {
                return false;
            }

            return true;
        }

        return false;
    }

    return {
        logout,
        isSignedIn,
        isAuthorized
    };
}
