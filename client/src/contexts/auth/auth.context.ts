import type { IAuthContext } from "@/types/auth.types";
import { createContext } from "react";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);