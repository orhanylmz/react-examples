import React, {Component} from 'react';
import './App.css';
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import {HOME_PATH, GAME_PATH, SETTING_PATH} from "./helpers/pathHelper";

import HomePage from "./components/pages/HomePage";
import GamePage from "./components/pages/GamePage";
import SettingPage from "./components/pages/SettingPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>

                <Container content>
                    <Route path={`${HOME_PATH}`} exact component={HomePage}/>
                    <Route path={`${GAME_PATH}`} exact component={GamePage}/>
                    <Route path={`${SETTING_PATH}`} exact component={SettingPage}/>
                </Container>

                <Footer/>
            </div>
        );
    }
}

export default App;
