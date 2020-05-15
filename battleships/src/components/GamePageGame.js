import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Panel from "./Panel";
import Ships from "./Ships";

import {tempShips} from "../helpers/shipHelper";
import {mapPanelToShips} from "../helpers/playerHelper";

import {mapShipsToPanel} from "../helpers/playerHelper";
import {withFirebase} from "../firebase";

import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
`;

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

        this.setState({
            minePanel: mapShipsToPanel(game[this.otherPlayer()].ships, minePanel),
            awayPanel: mapShipsToPanel(game[this.props.whoAmI].ships, awayPanel),
            currentPlayer: game.currentPlayer
        })
    }

    componentDidMount() {
        const self = this;
        this.props.firebase.game(this.props.gameId)
            .onSnapshot(function (doc) {
                self.gameUpdated(doc.id, doc.data())
            });
    }

    onCollectionUpdate = (doc) => {
        console.log(doc.ref);
    };

    onClickPanel = content => e => {
        e.preventDefault();

        console.log(content);
        if (content.content && content.content.shot > 0) {
            return;
        }
        console.log(content);

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

        console.log(content.content.shot);
        console.log(shotOrder);

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
        const {gameId, whoAmI} = this.props;

        const ships= mapPanelToShips(minePanel);
        console.log(ships);

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

        /*
        this.props.firebase.games().doc(gameId).update({
            player2: {
                name: this.props.name,
                surname: this.props.surname,
                ships: this.props.ships
            },
            currentPlayer: "player1",
            state: "started"
        }).then(function (docRef) {
            self.setState({
                whoAmI: "player2",
                goToNextStep: true
            })
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
         */

        //FIXME
    }

    render() {
        const {minePanel, awayPanel, shotList} = this.state;
        const playOrder = this.playOrder();
        const enableShot = shotList.length === 3 && this.playOrder();

        if (minePanel){
        const ships= mapPanelToShips(minePanel);
        console.log(ships);

        }
        return (
            <div>
                <div className={"grid grid-3"}>
                    <Panel panel={minePanel} onClick={this.onClickPanel} onRightClick={this.onRightClickPanel}/>
                    <div className={"grid grid-1"}>
                        <DotLoader
                            css={override}
                            size={50}
                            color={"#333333"}
                            loading={!playOrder}
                        />
                        <button className={"action-button " + (!enableShot ? "disabled" : "")}
                                disabled={!enableShot}
                                onClick={this.shot}>Shot
                        </button>
                    </div>
                    <Panel panel={awayPanel}/>
                </div>
                <div className={"grid"}>
                    <Ships
                        ships={this.state.ships}
                    />
                </div>
            </div>
        );
    }
};

GamePageGame.propTypes = {};

export default withFirebase(GamePageGame);