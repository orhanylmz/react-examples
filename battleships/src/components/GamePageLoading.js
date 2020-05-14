import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FooterButton from "./FooterButton";
import Games from "./Games";

import {withFirebase} from "../firebase";

class GamePageLoading extends Component {
    state = {
        games: null,
        gameId: null,
        whoAmI: null,
        goToNextStep: false
    }

    componentDidMount() {
        this.props.firebase.waitingGamesRef().onSnapshot(this.onCollectionUpdate);
    }

    handleGameSelected = (game) => {
        console.log(game)
        this.setState({
            gameId: game.id
        })
    }

    onCollectionUpdate = (querySnapshot) => {
        const games = [];
        querySnapshot.forEach((doc) => {
            const {id} = doc;
            const {player1, state} = doc.data();
            games.push({
                id,
                player1,
                state
            });
        });
        this.setState({
            games
        });
    };

    createGame = () => {
        const self = this;
        this.props.firebase.games().add({
            player1: {
                name: this.props.name,
                surname: this.props.surname,
                ships: this.props.ships
            },
            state: "waiting"
        }).then(function (docRef) {
            self.setState({
                gameId: docRef.id,
                whoAmI: "player1",
                goToNextStep: true
            })
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }

    joinGame = () => {
        const self = this;
        const {gameId} = this.state;
        this.props.firebase.games().doc(gameId).update({
            player2: {
                name: this.props.name,
                surname: this.props.surname,
                ships: this.props.ships
            },
            state: "started"
        }).then(function (docRef) {
            self.setState({
                whoAmI: "player2",
                goToNextStep: true
            })
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }

    render() {
        const {games, gameId, goToNextStep} = this.state;

        if (goToNextStep) {
            this.props.nextStep(gameId);
        }

        return (
            <div>
                <Games games={games} handleGameSelected={this.handleGameSelected}
                       selectedGameId={this.state.gameId}/>
                <FooterButton
                    left
                    onClick={this.createGame}
                    value={"Create Game"}
                />
                <FooterButton
                    right
                    disabled={!gameId}
                    onClick={this.joinGame}
                    value={"Join Game"}
                />
            </div>
        );
    }
};

GamePageLoading.propTypes = {};

export default withFirebase(GamePageLoading);