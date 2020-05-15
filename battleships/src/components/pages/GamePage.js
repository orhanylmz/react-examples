import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GamePageInitial from "../GamePageInitial";
import GamePageLoading from "../GamePageLoading";
import GamePageGame from "../GamePageGame";
import GamePageUser from "../GamePageUser";

class GamePage extends Component {
    state = {
        step: 4,
        ships: null,
        name: "Orhan",
        surname: "Yılmaz",
        gameId: "B2Gg767BBeNsH02VJiY3",
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

        switch (step) {
            case 1:
                return (
                    <div>
                        <GamePageUser nextStep={this.setUserInfo}/>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <GamePageInitial nextStep={this.setShips} name={name} surname={surname}/>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <GamePageLoading name={name} surname={surname} ships={ships} nextStep={this.start}/>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <GamePageGame ships={ships} gameId={gameId} whoAmI={whoAmI}/>
                    </div>
                );
        }
    }
}

GamePage.propTypes = {};

export default GamePage;