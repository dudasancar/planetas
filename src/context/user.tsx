import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

interface IProps {
  children: React.ReactNode;
}

export interface IUser {
  token: string | null;
  email: string | null;
}

export type UserContextType = {
  user: IUser;
  setUser: (User: IUser) => void;
};

const UserContext = createContext<UserContextType>({
  user: {
    token: null,
    email: null,
  },
  setUser: () => {},
});

export const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>({
    token: null,
    email: null,
  });

  useEffect(() => {
    if (user.token) sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const userStorage = JSON.parse(`${sessionStorage.getItem("user")}`);
    if (userStorage) setUser((prevState) => ({ ...prevState, ...userStorage }));
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  const { user, setUser } = context;
  return { user, setUser };
}
