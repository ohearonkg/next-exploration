import * as React from "react";

export interface ButtonProps {
  /**
   * Text to be displayed on the
   * button
   */
  text: string;
}

const CustomButton: React.SFC<ButtonProps> = ({ text }) => (
  <button> {text} </button>
);

export default CustomButton;
