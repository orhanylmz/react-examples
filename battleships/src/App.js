import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./components/pages/HomePage";
import GamePage from "./components/pages/GamePage";
import SettingsPage from "./components/pages/SettingsPage";

import {HOME_PATH, GAME_PATH, SETTINGS_PATH} from "./helpers/pathHelper";

import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>

      <Route path={HOME_PATH} exact strict component={HomePage}/>
      <Route path={GAME_PATH} exact strict component={GamePage}/>
      <Route path={SETTINGS_PATH} exact strict component={SettingsPage}/>

      <Footer/>
    </div>
  );
}

export default App;
