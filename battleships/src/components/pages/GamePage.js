import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GamePageInitial from "../GamePageInitial";
import GamePageLoading from "../GamePageLoading";
import GamePageGame from "../GamePageGame";
import GamePageUser from "../GamePageUser";

class GamePage extends Component {
    state = {
        step: 1,
        ships: null,
        name: "Orhan",
        surname: "Yılmaz"
    }

    setUserInfo = ({name, surname}) => {
        this.setState({
            step: this.state.step + 1,
            name,
            surname
        })
    };

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
        const {step, ships, name, surname} = this.state;

        switch (step) {
            case 4:
                return (
                    <div>
                        <GamePageUser  nextStep={this.setUserInfo}/>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <GamePageInitial nextStep={this.nextStep} name={name} surname={surname}/>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <GamePageLoading name={name} surname={surname} ships={ships} nextStep={this.start}/>
                    </div>
                );
            case 4:
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