import createContext from "../utils/createContext";
import { ThemeContextType } from "../types/types";

export const [ThemeProvider, useThemeContext] = createContext<
  ThemeContextType | undefined
>("Theme", undefined);
