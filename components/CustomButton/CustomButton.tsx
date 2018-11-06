import * as React from "react";

export interface ButtonProps {
  /**
   * Text to be displayed on the
   * button
   */
  text: string;

  /**
   * Function to be executed
   * upon the button being clicked
   */
  onClickFunction: () => void;
}

const CustomButton: React.SFC<ButtonProps> = ({ text, onClickFunction }) => (
  <button onClick={onClickFunction}> {text} </button>
);

export default CustomButton;
