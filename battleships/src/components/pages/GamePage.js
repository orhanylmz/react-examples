import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GamePageInitial from "../GamePageInitial";
import GamePageLoading from "../GamePageLoading";
import GamePageGame from "../GamePageGame";
import GamePageUser from "../GamePageUser";

import Stepper from "../Stepper";

class GamePage extends Component {
    state = {
        step: 4,
        ships: null,
        name: null,
        surname: null,
        gameId: "du25WA9Ze79NiVepjJt5",
        whoAmI: "player1"
    }

    setUserInfo = ({name, surname}) => {
        this.setState({
            step: this.state.step + 1,
            name,
            surname
        })
    };

    setShips = (ships) => {
        this.setState({
            step: this.state.step + 1,
            ships: ships
        })
    };

    start = (gameId, whoAmI) => {
        this.setState({
            step: this.state.step + 1,
            gameId: gameId,
            whoAmI: whoAmI
        })
    };

    render() {
        const {step, ships, name, surname, gameId, whoAmI} = this.state;

        const value = (
            <div>
                <Stepper step={step} name={name ? name + " " + surname : null}/>
                {
                    step === 1 ? <GamePageUser nextStep={this.setUserInfo}/>
                        : step === 2 ? <GamePageInitial nextStep={this.setShips}/>
                        : step === 3 ? <GamePageLoading name={name} surname={surname} ships={ships} nextStep={this.start}/>
                        : step === 4 ? <GamePageGame ships={ships} gameId={gameId} whoAmI={whoAmI}/> : null
                }
            </div>
        );

        return value;
    }
}

GamePage.propTypes = {};

export default GamePage;