import React from "react";
import { render, screen } from '@testing-library/react';
import Pokelist from "./Pokelist";

describe("Pokelist", () => {
  test("matches snapshot", () => {
    render(<Pokelist />);
    expect(screen).toMatchSnapshot();
  });
});
