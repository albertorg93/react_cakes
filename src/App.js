// import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter} from 'react-router-dom';
import './styles/styles.scss'
// import { userState, useState } from 'react';
import { useState } from 'react';
import {userContext} from './context/userContext';
import {themeContext} from './context/themeContext';

function App() {
  
const [user, setUser] = useState("Alvaru"); //hook UseState
const [theme, setTheme] = useState(""); //

//login
const login = (name) =>{
   setUser(name);
}

//logout
const logout = () =>{
  setUser("");
}

const toggleTheme = () => theme===""?setTheme("-dark"):setTheme("");

const userdata = {
  user,
  login,
  logout
}

const themeData = {
  theme,
  toggleTheme
}

  return (
    <div className="App">
      <themeContext.Provider value={themeData}>
      <BrowserRouter>
      <userContext.Provider value={userdata}>
      <Header/>
      <Main/>
      </userContext.Provider>
      </BrowserRouter>
      <Footer/>
      </themeContext.Provider>
    </div>
  );
}

export default App;

// 