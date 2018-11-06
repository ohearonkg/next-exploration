import * as React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import CustomButton from "./CustomButton";

describe("Custom Button", () => {
  afterEach(() => {
    cleanup;
  });

  it("Should call its onClickFunction when clicked", () => {
    const sampleFunction = jest.fn();
    const { getByText } = render(
      <CustomButton text="Button" onClickFunction={sampleFunction} />
    );
    const customButton = getByText("Button");
    fireEvent.click(customButton);

    expect(sampleFunction).toHaveBeenCalledTimes(1);
  });
});
