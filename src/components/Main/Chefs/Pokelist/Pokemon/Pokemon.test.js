import React from "react";
import { render, screen } from '@testing-library/react';
import Pokemon from "./Pokemon";

describe("Pokemon", () => {
  test("matches snapshot", () => {
    render(<Pokemon />);
    expect(screen).toMatchSnapshot();
  });
});
