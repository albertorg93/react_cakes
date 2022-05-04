import React from "react";
import { render, screen } from '@testing-library/react';
import ProductItem from "./ProductItem";
import cakes from '../cakes.json';

describe("ProductItem", () => {
  test('delete Button to be visible', () => {
    render(<ProductItem data={cakes}/>);
    const deleteButton = screen.queryByText('Borrar');
    expect(deleteButton).toBeVisible();
  })
  test("matches snapshot", () => {
    render(<ProductItem data={cakes}/>);
    expect(screen).toMatchSnapshot();
  });
});