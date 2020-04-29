import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, changeTheme] = useToggleState(false);
  return (
    <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
