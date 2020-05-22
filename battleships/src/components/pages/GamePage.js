import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GamePageInitial from "../GamePageInitial";
import GamePageLoading from "../GamePageLoading";
import GamePageGame from "../GamePageGame";

import Stepper from "../Stepper";
import {withAuthorization} from "../session"
import {Segment} from "semantic-ui-react";


class GamePage extends Component {
    state = {
        step: 3,
        ships: null,
        gameId: "Ptky74oSFE4PRi7sGpK5",
        whoAmI: "player2"
    }

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

    createGame = () => {
        const {displayName} = this.props.firebase.auth.currentUser;
        const {ships, step} = this.state;

        const self = this;
        this.props.firebase.games().add({
            player1: {
                displayName,
                ships
            },
            state: "waiting"
        }).then(function (docRef) {
            self.setState({
                gameId: docRef.id,
                whoAmI: "player1",
                step: step + 1
            })
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }

    joinGame = (gameId) => {
        console.log(gameId);
        const {ships, step} = this.state;
        console.log(ships);

        const {displayName} = this.props.firebase.auth.currentUser;
        const self = this;
        this.props.firebase.games().doc(gameId).update({
            player2: {
                displayName,
                ships
            },
            currentPlayer: "player1",
            state: "started"
        }).then(function (docRef) {
            self.setState({
                gameId,
                whoAmI: "player2",
                step: step + 1
            })
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }

    render() {
        const {step, ships, gameId, whoAmI} = this.state;
        const {displayName} = this.props.firebase.auth.currentUser;

        return (
            <Segment basic={true}>
                <Stepper step={step} name={displayName}/>
                {
                    step === 1 ? <GamePageInitial nextStep={this.setShips}/>
                        : step === 2 ? <GamePageLoading createGame={this.createGame} joinGame={this.joinGame} ships={ships}/>
                        : step === 3 ? <GamePageGame ships={ships} gameId={gameId} whoAmI={whoAmI}/> : null
                }
            </Segment>
        );
    }
}

GamePage.propTypes = {};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(authCondition)(GamePage);