import React from "react";

export interface AuthUser {
  name: string;
  email: string;
}

interface UserContextType {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

export const UserContext = React.createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = React.useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
