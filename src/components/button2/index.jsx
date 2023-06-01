import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: white;
  padding: 12px 2em; /* Increase padding for a larger button */
  font-size: ${({ size }) => (size ? size + "px" : "24px")}; /* Increase font size */
  font-weight: 300;
  border-radius: 3px;
  background-color: rgba(7, 41, 77, 0.9); /* Set background color with opacity */
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin-top: 1em;

  &:hover {
    background-color: #ffc600;
    color: rgba(7, 41, 77, 0.9); 
  }

  &:focus {
    outline: none;
  }
`;

export function Button({ size, onClick, children, className }) {
  return (
    <ButtonWrapper size={size} className={className} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}