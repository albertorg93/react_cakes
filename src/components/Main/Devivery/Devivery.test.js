import React from "react";
import { render, screen } from '@testing-library/react';
import Devivery from "./Devivery";

describe("Devivery", () => {
  test("matches snapshot", () => {
    render(<Devivery />);
    expect(screen).toMatchSnapshot();
  });
});
