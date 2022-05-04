import React from "react";
import { render, screen } from '@testing-library/react';
import Nav from "./Nav";
import {themeContext} from '../../../context/themeContext';
import {BrowserRouter} from 'react-router-dom';

describe("Nav", () => {
  test("matches snapshot", () => {
    const themeData = {
      theme: "",
      toggleTheme: () => theme === '' ? theme = "-dark" : theme = ""
    }
    render(
      <themeContext.Provider value={themeData}>  
        <BrowserRouter>
           <Nav />
        </BrowserRouter>
      </themeContext.Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});