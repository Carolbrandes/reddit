import { createContext, ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
}

export const UserContext = createContext({});

export const UserStorage = ({ children }: Props) => {
  const [selectedButtonFilter, setSelectedButtonFilter] = useState("hot");

  return (
    <UserContext.Provider
      value={{
        selectedButtonFilter,
        setSelectedButtonFilter,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
