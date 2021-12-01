import * as React from "react";
import { useLocalStorageState } from "./hooks";
const ThemeContext = React.createContext();

function getUserPreferenceTheme() {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  console.log(theme);
  return theme;
}
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorageState(
    "theme",
    getUserPreferenceTheme
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context)
    throw new Error(
      "useThemeContext must be used within a ThemeContext component"
    );
  return context;
};

export { ThemeProvider, useThemeContext };
