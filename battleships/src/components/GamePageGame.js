import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Panel from "./Panel";
import Ships from "./Ships";

import {createPanel} from "../helpers/panelHelper";
import {generateAdmiral, generateKreuzer, generateDestroyer, generateBoat} from "../helpers/shipHelper";

class GamePageGame extends Component {
    state = {
        shotPanel: createPanel(),
        shotList: [],
        totalShotOrder: 0
    }

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
        const {shotList, shotPanel} = this.state;
        const {panel} = this.props;
        const loadedShot = shotList.length === 3;

        return (
            <div>
                <div className={"grid grid-3"}>
                    <Panel panel={shotPanel} onClick={this.onClickPanel} onRightClick={this.onRightClickPanel}/>
                    <button className={"action-button " + (!loadedShot ? "disabled" : "")} disabled={!loadedShot}
                            onClick={this.shot}>Shot
                    </button>
                    <Panel panel={panel}/>
                </div>
                <div className={"grid"}>
                    <Ships
                        admiral_0={generateAdmiral()}
                        kreuzer_0={generateKreuzer(0)}
                        kreuzer_1={generateKreuzer(1)}
                        destroyer_0={generateDestroyer(0)}
                        destroyer_1={generateDestroyer(1)}
                        destroyer_2={generateDestroyer(2)}
                        boat_0={generateBoat(0)}
                        boat_1={generateBoat(1)}
                        boat_2={generateBoat(2)}
                        boat_3={generateBoat(3)}
                    />
                </div>
            </div>
        );
    }
};

GamePageGame.propTypes = {};

export default GamePageGame;