import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GamePageInitial from "../GamePageInitial";
import GamePageLoading from "../GamePageLoading";
import GamePageGame from "../GamePageGame";

class GamePage extends Component {
    state = {
        step: 1,
        ships: null,
        name: "Orhan",
        surname: "Yılmaz"
    }

    nextStep = (ships) => {
        this.setState({
            step: this.state.step + 1,
            ships: ships
        })
    };

    start = () => {
        this.setState({
            step: this.state.step + 1,
        })
    };

    render() {
        const {step, ships} = this.state;

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
                        <GamePageLoading nextStep={this.start}/>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <GamePageGame ships={ships}/>
                    </div>
                );
        }
    }
}

GamePage.propTypes = {};

export default GamePage;