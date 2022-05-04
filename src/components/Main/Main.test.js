import React from "react";
import { render, screen } from '@testing-library/react';
import Main from "./Main";
import {userContext} from '../../context/userContext';
import { themeContext } from '../../context/themeContext';
import { BrowserRouter} from 'react-router-dom';

describe("Main", () => {
  const userData = {
    user: '',
    login: (name) => this.user = name,
    logout: () => this.user =''
  }


  const themeData = {
    theme: "",
    toggleTheme: () => theme === '' ? theme = "-dark" : theme = ""
  }

  
  test("matches snapshot", () => {
    render(
      <BrowserRouter>
      <themeContext.Provider value={themeData}>
      <userContext.Provider value={userData}>
      <Main/>
      </userContext.Provider>
      </themeContext.Provider>
      </BrowserRouter>
      
      );
    expect(screen).toMatchSnapshot();
  });
});
