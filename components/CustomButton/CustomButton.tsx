import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
  color: white;
`;

export interface ButtonProps {
  /**
   * Text to be displayed on the
   * button
   */
  text: string;
}

const CustomButton: React.SFC<ButtonProps> = ({ text }) => (
  <StyledButton> {text} </StyledButton>
);

export default CustomButton;
