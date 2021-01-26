import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/theme";
import { menuTransitionTime } from "../global/constants";

const StyledSwitch = styled.button`
  width: 50px;
  height: 20px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.foundation};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  box-sizing: content-box;
  outline: none;
  cursor: pointer;
`;

const StyledSwitchDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.contrast};
  background: ${({ theme }) => theme.colors.contrast};
  transform: translateX(${({ isLightTheme }) => (isLightTheme ? 0 : 30)}px);
  transition: transform ${menuTransitionTime}s, background ${menuTransitionTime}s ease-in-out;
`;

const ThemeSwitcher = () => {
  const { colors, setColors } = useContext(ThemeContext);
  useEffect(() => localStorage.setItem("theme", colors), [colors]);

  return (
    <StyledSwitch onClick={() => (colors === "light" ? setColors("dark") : setColors("light"))}>
      <StyledSwitchDot isLightTheme={colors === "light"} />
    </StyledSwitch>
  );
};

export default ThemeSwitcher;
