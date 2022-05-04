import React from "react";
import { render, screen } from '@testing-library/react';
import Tasters from "./Tasters";


describe("Tasters", () => {
  test("matches snapshot", () => {
    render(<Tasters />);
    expect(screen).toMatchSnapshot();
  });
});
