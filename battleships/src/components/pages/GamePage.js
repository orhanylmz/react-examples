import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GamePageInitial from "../GamePageInitial";
import GamePageLoading from "../GamePageLoading";
import GamePageGame from "../GamePageGame";
import {generateAdmiral, generateBoat, generateDestroyer, generateKreuzer} from "../../helpers/shipHelper";

class GamePage extends Component {
    state = {
        step: 1,
        panel: [],
    }

    nextStep = ({panel}) => {
        this.setState({
            step: this.state.step + 1,
            panel: panel ? panel : this.state.panel
        })
    };

    render() {
        const {step, panel} = this.state;

        switch (step) {
            case 1:
                return (
                    <div>
                        <GamePageInitial nextStep={this.nextStep}/>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <GamePageLoading nextStep={this.nextStep}/>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <GamePageGame panel={panel}/>
                    </div>
                );
        }
    }
}

GamePage.propTypes = {};

export default GamePage;