import React from "react";
import { render } from "@testing-library/react";
// adds special assertions like toHaveTextContent
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("<App /> component tests", () => {
  it("Renders app", () => {
    const container = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
