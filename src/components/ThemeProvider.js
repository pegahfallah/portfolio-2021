import React, { useState } from "react";

export const ThemeContext = React.createContext({
  theme: {
    type: "light",
    primary: "#fcfcfd",
    text: "#151517",
    secondary: "#d3d3d3",
    textSecondary: "#202123",
  },
  setTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const theme = {
    light: {
      type: "light",
      primary: "#fcfcfd",
      text: "#151517",
      secondary: "#d3d3d3",
      button: "#fcfcfd",
      textSecondary: "#48494b",
      boxShadow:
        "-4px -4px 16px rgba(150, 160, 170, 0.3), 4px 4px 16px rgba(150, 160, 170, 0.3)",
    },
    dark: {
      type: "dark",
      primary: "#151517",
      text: "#fcfcfd",
      secondary: "#202123",
      button: "#1e1e20",
      textSecondary: "#BEBDB8",
    },
  };

  const setTheme = (type) => {
    setState({ ...state, theme: type === "dark" ? theme.light : theme.dark });
  };

  const initState = {
    theme: theme.light,
    setTheme: setTheme,
  };

  const [state, setState] = useState(initState);

  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  );
};
