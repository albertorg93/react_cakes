import React from "react";
import { render, screen } from '@testing-library/react';
import About from "./About";

describe("About", () => {
  test("matches snapshot", () => {
    render(<About />);
    expect(screen).toMatchSnapshot();
  });
});
