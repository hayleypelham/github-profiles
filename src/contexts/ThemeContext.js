import { createContext } from "react";

export const themes = {
  dark: "",
  light: "light-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
  changeTheme: () => {},
});