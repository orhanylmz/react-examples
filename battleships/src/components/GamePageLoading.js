import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FooterButton from "./FooterButton";
import Games from "./Games";

import {withFirebase} from "../firebase";

class GamePageLoading extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        games: null
    }

    onCollectionUpdate = (querySnapshot) => {
        const games = [];
        querySnapshot.forEach((doc) => {
            const {id} = doc;
            const {name, surname, ships, state} = doc.data();
            games.push({
                id,
                name,
                surname,
                ships,
                state
            });
        });
        this.setState({
            games
        });
    };

    refreshGame = () => {
        this.props.firebase.waitingGamesRef().onSnapshot(this.onCollectionUpdate);
    }

    createGame = () => {
        this.props.firebase.games().add({
            name: this.props.name,
            surname: this.props.surname,
            ships: this.props.ships,
            state: "waiting"
        }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }

    render() {
        const {games} = this.state;

        console.log(games);
        return (
            <div>
                <Games games={games}/>
                <FooterButton
                    left
                    onClick={this.createGame}
                    value={"Create Game"}
                />
                <FooterButton
                    right
                    onClick={this.refreshGame}
                    value={"Refresh Games"}
                />
            </div>
        );
    }
};

GamePageLoading.propTypes = {};

export default withFirebase(GamePageLoading);