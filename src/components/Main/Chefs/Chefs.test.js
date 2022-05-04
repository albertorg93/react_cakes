import React from "react";
import { render, screen } from '@testing-library/react';
import Chefs from "./Chefs";

describe("Chefs", () => {
  test("matches snapshot", () => {
    render(<Chefs />);
    expect(screen).toMatchSnapshot();
  });
});
