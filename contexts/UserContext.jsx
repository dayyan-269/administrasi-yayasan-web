'use client';

import { createContext, useReducer } from 'react';

import userReducer from '@/reducers/usersReducer';

export const UserContext = createContext(null);
export const UserDispatchContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, null);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;
