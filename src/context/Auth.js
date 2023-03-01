import { onIdTokenChanged } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebaseConfig';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
