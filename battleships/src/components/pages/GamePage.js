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
        surname: "Yılmaz",
        gameId: null
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

    start = (gameId) => {
        this.setState({
            step: this.state.step + 1,
            gameId: gameId
        })
    };

    render() {
        const {step, ships, name, surname, gameId} = this.state;

        console.log(gameId);

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
                        <GamePageGame ships={ships} gameId={gameId}/>
                    </div>
                );
        }
    }
}

GamePage.propTypes = {};

export default GamePage;