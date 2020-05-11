import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

import GamePage from "./pages/GamePage";

const App = props =>
    <div>
        <GamePage/>
    </div>
;

App.propTypes = {};

export default App;