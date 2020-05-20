import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Panel from "./Panel";
import Ships from "./Ships";
import ActionPanel from "./ActionPanel";

import {tempShips} from "../helpers/shipHelper";
import {mapPanelToShips} from "../helpers/playerHelper";

import {mapShipsToPanel} from "../helpers/playerHelper";
import {withFirebase} from "../firebase";

import {Grid} from "semantic-ui-react";

class GamePageGame extends Component {
    state = {
        minePanel: null, //away Ships
        awayPanel: null, //mine Ships
        shotList: [],
        shotOrder: 1,
        ships: tempShips(),
        currentPlayer: null
    }

    playOrder = () => {
        const {currentPlayer} = this.state;
        const {whoAmI} = this.props;

        if (!currentPlayer) {
            return null;
        }

        if (whoAmI === currentPlayer) {
            return true;
        }
        return false;
    }

    otherPlayer = () => {
        if (this.props.whoAmI === "player1") {
            return "player2";
        }
        return "player1";
    }

    gameUpdated = (id, game) => {
        const {minePanel, awayPanel} = this.state;

        const newMinePanel = game[this.otherPlayer()] ? mapShipsToPanel(game[this.otherPlayer()].ships, minePanel) : null;
        const newAwayPanel = mapShipsToPanel(game[this.props.whoAmI].ships, awayPanel);
        let shotOrder = this.state.shotOrder;
        if (newMinePanel){
            shotOrder = Math.max(...newMinePanel.flat().map(content => content.content ? Number(content.content.shot) : 0)) + 1;
        }

        this.setState({
            minePanel: newMinePanel,
            awayPanel: newAwayPanel,
            currentPlayer: game.currentPlayer,
            shotOrder: shotOrder
        })
    }

    componentDidMount() {
        const self = this;
        this.props.firebase.game(this.props.gameId)
            .onSnapshot(function (doc) {
                self.gameUpdated(doc.id, doc.data())
            });
    }

    onClickPanel = content => e => {
        e.preventDefault();

        if (content.content && content.content.shot > 0) {
            return;
        }

        const {minePanel, shotList, shotOrder} = this.state;

        if (shotList.length === 3) {
            return;
        }

        minePanel[content.j][content.i] = {
            ...minePanel[content.j][content.i],
            content: {
                ...minePanel[content.j][content.i].content,
                i: content.i,
                j: content.j,
                shot: shotOrder
            }
        }

        shotList.push(content);

        this.setState({
            minePanel
        })
    }

    onRightClickPanel = content => e => {
        e.preventDefault();

        const {minePanel, shotList, shotOrder} = this.state;

        if (!content.content || content.content.shot <= 0) {
            return;
        }

        if (content.content.shot !== shotOrder) {
            return;
        }

        minePanel[content.j][content.i] = {
            ...minePanel[content.j][content.i],
            content: {
                ...minePanel[content.j][content.i].content,
                shot: 0
            }
        }

        let foundValue = shotList.find(item => item.i === content.i && item.j === content.j);
        shotList.splice(shotList.indexOf(foundValue, 0), 1);

        this.setState({
            minePanel,
        })
    }

    shot = () => {
        const {shotOrder, minePanel} = this.state;
        const {gameId} = this.props;

        const ships = mapPanelToShips(minePanel);

        this.props.firebase.game(gameId).update({
            currentPlayer: this.otherPlayer(),
            [this.otherPlayer()]: {
                ships: ships
            }
        })

        this.setState({
            shotOrder: shotOrder + 1,
            shotList: []
        });
    }

    render() {
        const {minePanel, awayPanel, shotList} = this.state;
        const playOrder = this.playOrder();
        const enableShot = shotList.length === 3 && this.playOrder();

        let ships = null;
        if (minePanel) {
            ships = mapPanelToShips(minePanel);
        }
        return (
            <Grid>
                <Grid.Row columns={3} stretched={true}>
                    <Grid.Column verticalAlign={"top"}>
                        <Panel panel={minePanel} loading={minePanel === null} onClick={this.onClickPanel} onRightClick={this.onRightClickPanel} onlyShot={true}/>
                    </Grid.Column>
                    <Grid.Column verticalAlign={"top"}>
                        <ActionPanel enableShot={enableShot} shot={this.shot} order={playOrder} ships={ships}/>
                    </Grid.Column>
                    <Grid.Column verticalAlign={"top"}>
                        <Panel panel={awayPanel}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
};

GamePageGame.propTypes = {};

export default withFirebase(GamePageGame);