import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { DarkTheme } from "@styled-icons/fluentui-system-filled/DarkTheme";
import styled from "styled-components";
const ThemeButton = styled(DarkTheme)`
  width: 30px;
`;

function ToggleTheme() {
  const state = useContext(ThemeContext);

  const btn = {
    color: state.theme.text,
    background: "none",
    borderRadius: "25px",
    border: "none",
  };

  return (
    <button
      variant="contained"
      onClick={() => {
        state.setTheme(state.theme.type);
      }}
      style={btn}
    >
      <ThemeButton></ThemeButton>
    </button>
  );
}

export default ToggleTheme;
