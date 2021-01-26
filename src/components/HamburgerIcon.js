import React from "react";
import styled from "styled-components";
import { menuTransitionTime } from "../global/constants";

const StyledIcon = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 18px;
  right: 20px;
  z-index: 200;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  transform: rotate(${({ isOpen }) => (isOpen ? 90 : 0)}deg);
  transition: transform ${menuTransitionTime}s ease-in-out;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.foundation};
  margin-bottom: 4px;
  transform-origin: 0;

  :nth-child(1) {
    transform: rotate(${({ isOpen }) => (isOpen ? 45 : 0)}deg);
    transition: transform ${menuTransitionTime}s ease-in-out;
  }
  :nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    transition: opacity ${menuTransitionTime}s ease-in-out;
  }
  :nth-child(3) {
    transform: rotate(${({ isOpen }) => (isOpen ? -45 : 0)}deg);
    transition: transform ${menuTransitionTime}s ease-in-out;
  }
`;

const HamburgerIcon = ({ isOpen, setIsOpen }) => {
  return (
    <StyledIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <StyledLine isOpen={isOpen} />
      <StyledLine isOpen={isOpen} />
      <StyledLine isOpen={isOpen} />
    </StyledIcon>
  );
};

export default HamburgerIcon;
