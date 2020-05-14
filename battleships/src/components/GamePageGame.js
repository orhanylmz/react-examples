import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Panel from "./Panel";
import Ships from "./Ships";

import {createPanel} from "../helpers/panelHelper";
import {tempShips} from "../helpers/shipHelper";

import {mapShipsToPanel} from "../helpers/playerHelper";
import {withFirebase} from "../firebase";

class GamePageGame extends Component {
    state = {
        minePanel: null, //away Ships
        awayPanel: null, //mine Ships
        shotList: [],
        totalShotOrder: 0,
        ships: tempShips()
    }

    otherPlayer = () => {
        if (this.props.whoAmI === "player1") {
            return "player2";
        }
        return "player1";
    }

    gameUpdated = (id, game) => {
        console.log("Current data: ", game, " ", id);
        this.setState({
            minePanel: mapShipsToPanel(game[this.otherPlayer()].ships),
            awayPanel: mapShipsToPanel(game[this.props.whoAmI].ships)
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

        if (content.value) {
            return;
        }

        const {shotPanel, shotList, totalShotOrder} = this.state;

        if (shotList.length === 3) {
            return;
        }

        const newShotPanel = shotPanel.map(line => line.map(
            box => {
                if (content.i === box.i && content.j === box.j) {
                    box = {
                        ...box,
                        value: Math.ceil((totalShotOrder + 1) / 3)
                    }
                }
                return box;
            }
        ));

        shotList.push(content);

        this.setState({
            shotPanel: newShotPanel,
            totalShotOrder: totalShotOrder + 1
        })
    }

    onRightClickPanel = content => e => {
        e.preventDefault();

        const {shotPanel, shotList, totalShotOrder} = this.state;

        if (!content.value) {
            return;
        }

        if (content.value !== Math.ceil((totalShotOrder) / 3)) {
            return;
        }

        const newShotPanel = shotPanel.map(line => line.map(
            box => {
                if (content.i === box.i && content.j === box.j) {
                    box = {
                        ...box,
                        value: null
                    }
                }
                return box;
            }
        ));

        let foundValue = shotList.find(item => item.i === content.i && item.j === content.j);
        shotList.splice(shotList.indexOf(foundValue, 0), 1);

        this.setState({
            shotPanel: newShotPanel,
            totalShotOrder: totalShotOrder - 1
        })
    }

    shot = () => {
        this.setState({
            shotList: []
        });

        //FIXME
    }

    render() {
        const {minePanel, awayPanel, shotList} = this.state;
        const {ships} = this.props;
        const loadedShot = shotList.length === 3;

        return (
            <div>
                return;
                <div className={"grid grid-3"}>
                    <Panel panel={awayPanel} onClick={this.onClickPanel} onRightClick={this.onRightClickPanel}/>
                    <button className={"action-button " + (!loadedShot ? "disabled" : "")} disabled={!loadedShot}
                            onClick={this.shot}>Shot
                    </button>
                    <Panel panel={minePanel}/>
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