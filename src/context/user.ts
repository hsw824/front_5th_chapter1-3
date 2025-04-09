import createContext from "../utils/createContext";

import { UserContextType } from "../types/types";

export const [UserProvider, useUserContext] = createContext<
  UserContextType | undefined
>("User", undefined);
