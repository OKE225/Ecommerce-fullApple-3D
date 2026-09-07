"use client";

import { createContext, ReactNode, useContext } from "react";

type UserRoleType = "user" | "admin" | null;

interface UserRoleContextType {
  role: UserRoleType;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(
  undefined,
);

const UserRoleProvider = ({
  children,
  role,
}: {
  children: ReactNode;
  role: UserRoleType;
}) => {
  return (
    <UserRoleContext.Provider value={{ role }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export default UserRoleProvider;

export function useUserRole() {
  const context = useContext(UserRoleContext);

  if (!context) {
    throw new Error("useUserRole must be used within UserRoleProvider");
  }

  return context;
}
