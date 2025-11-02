import { useContext } from "react";
import { AuthContext } from "@/contexts/auth/auth.context";
import type { IAuthContext } from "@/types/auth.types";

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
