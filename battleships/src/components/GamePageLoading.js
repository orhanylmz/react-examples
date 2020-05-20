import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FooterButton from "./FooterButton";
import Games from "./Games";

import {withFirebase} from "../firebase";
import {Button, Grid} from "semantic-ui-react";
import Panel from "./Panel";
import Ships from "./Ships";

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
            <Grid>
                <Grid.Row columns={1} stretched={true} style={{height: 500}}>
                    <Grid.Column verticalAlign={"top"}>
                        <Games games={games} handleGameSelected={this.handleGameSelected}
                               selectedGameId={this.state.gameId}/>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2} stretched={true}>
                    <Grid.Column verticalAlign={"middle"}>
                        <Button
                            left
                            onClick={this.props.createGame}
                            content={"Create Game"}
                        />
                    </Grid.Column>
                    <Grid.Column verticalAlign={"middle"}>
                        <Button
                            right
                            disabled={!gameId}
                            onClick={() => this.props.joinGame(gameId)}
                            content={"Join Game"}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
};

GamePageLoading.propTypes = {};

export default withFirebase(GamePageLoading);