import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { useStore } from "./zustand";

const withAuthenticated = <T,>(
  Component: React.ComponentType<T>,
): React.ComponentType<T> => {
  const WithAuthenticated: React.FC<T> = (props) => {
    const router = useRouter();
    const accessToken = useStore((state) => state.auth?.accessToken || null);
    const user = useStore((state) => state.user);
    const logout = useStore((state) => state.logout);
    const [isAllowed, setIsAllowed] = React.useState(false);

    useEffect((): void => {
      let allowed = true;
      if (!accessToken || !user) {
        allowed = false;
      }
      if (accessToken) {
        const decoded = jwt_decode(accessToken);
        const now = new Date().getTime();
        const timeDiff = (decoded as any).exp * 1000 - now;
        if (timeDiff < 0) {
          allowed = false;
          logout();
          router.push(`/auth/login`);
        }
      }
      if (
        !allowed ||
        !user ||
        !user.role
      ) {
        allowed = false;
      }
      // If all checks pass, means they are allowed
      setIsAllowed(allowed);
    }, [router, accessToken, user, isAllowed, setIsAllowed]);

    return (
      <>
        {
          isAllowed ? <Component {...props} /> : null // Show loading here
        }
      </>
    );
  };

  return WithAuthenticated;
};

export default withAuthenticated;
