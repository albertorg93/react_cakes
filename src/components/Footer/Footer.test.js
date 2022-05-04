import React from "react";
import { render, screen } from '@testing-library/react';
import Footer from "./Footer";
import { themeContext } from '../../context/themeContext';
import { ThemeContext } from "@emotion/react";

describe("Footer", () => {

  const themeData = {
    theme: "",
    toggleTheme: () => theme === '' ? theme = "-dark" : theme = ""
  }

  test("matches snapshot", () => {
    render(
          <themeContext.Provider value={themeData}>
            <Footer />
          </themeContext.Provider>
          );
    expect(screen).toMatchSnapshot();
  });

  test("footer text in the document", () => {
    render(
          <themeContext.Provider value={themeData}>
            <Footer />
          </themeContext.Provider>
          );
    const linkElement = screen.getByText(/Esto es el Footer/i);
    expect(linkElement).toBeInTheDocument();
  });
});
