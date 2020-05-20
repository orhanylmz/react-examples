import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FooterButton from "./FooterButton";
import Games from "./Games";

import {withFirebase} from "../firebase";

class GamePageLoading extends Component {
    state = {
        games: null,
        gameId: null,
        whoAmI: null
    }

    componentDidMount() {
        this.props.firebase.waitingGamesRef().onSnapshot(this.onCollectionUpdate);
    }

    handleGameSelected = (game) => {
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

    render() {
        const {games, gameId, whoAmI} = this.state;

        return (
            <div>
                <Games games={games} handleGameSelected={this.handleGameSelected}
                       selectedGameId={this.state.gameId}/>
                <FooterButton
                    left
                    onClick={this.props.createGame}
                    value={"Create Game"}
                />
                <FooterButton
                    right
                    disabled={!gameId}
                    onClick={() => this.props.joinGame(gameId)}
                    value={"Join Game"}
                />
            </div>
        );
    }
};

GamePageLoading.propTypes = {};

export default withFirebase(GamePageLoading);