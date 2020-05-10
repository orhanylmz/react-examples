import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Panel from "./Panel";
import Ships from "./Ships";
import FooterButton from "./FooterButton";

import {createPanel} from "../helpers/panelHelper";
import {generateAdmiral, generateKreuzer, generateDestroyer, generateBoat} from "../helpers/shipHelper";

class GamePageInitial extends Component {
    state = {
        panel: createPanel(),
        admiral_0: generateAdmiral(),
        kreuzer_0: generateKreuzer(0),
        kreuzer_1: generateKreuzer(1),
        destroyer_0: generateDestroyer(0),
        destroyer_1: generateDestroyer(1),
        destroyer_2: generateDestroyer(2),
        boat_0: generateBoat(0),
        boat_1: generateBoat(1),
        boat_2: generateBoat(2),
        boat_3: generateBoat(3),
        done: false,
        loadedContent: null
    }

    onClickShip = content => e => {
        e.preventDefault();

        if (!content.currentType) {
            return;
        }

        const {loadedContent} = this.state;

        if (loadedContent && loadedContent.id === content.id) {
            return;
        }

        let reverseShip = null;
        if (loadedContent && loadedContent.id !== content.id) {
            reverseShip = this.state[loadedContent.name];
            reverseShip.parts[loadedContent.part] = {
                ...reverseShip.parts[loadedContent.part],
                currentType: reverseShip.parts[loadedContent.part].type
            }
        }

        const ship = this.state[content.name];
        ship.parts[content.part] = {
            ...ship.parts[content.part],
            currentType: null
        }

        if (reverseShip) {
            this.setState({
                [content.name]: ship,
                [loadedContent.name]: reverseShip,
                loadedContent: {
                    ...content
                }
            });
            return;
        }

        this.setState({
            [content.name]: ship,
            loadedContent: {
                ...content
            }
        })
    }

    onRightClickShip = content => e => {
        e.preventDefault();

        const {loadedContent} = this.state;
        if (!loadedContent || loadedContent.id !== content.id) {
            return;
        }

        const ship = this.state[content.name];
        ship.parts[content.part] = {
            ...ship.parts[content.part],
            currentType: ship.parts[content.part].type
        }

        this.setState({
            [content.name]: ship,
            loadedContent: null
        })
    }

    onClickPanel = content => e => {
        e.preventDefault();

        const {loadedContent, panel} = this.state;
        if (!loadedContent) {
            return;
        }

        if (panel[content.j][content.i].content != null) {
            return;
        }

        const newPanel = panel.map(line => line.map(
            box => {
                if (content.i === box.i && content.j === box.j) {
                    box = {
                        ...box,
                        content: {
                            ...loadedContent
                        }
                    }
                }
                return box;
            }
        ));

        const done = newPanel.flat().filter(box => box.content).length === 20;

        this.setState({
            panel: newPanel,
            loadedContent: null,
            done: done
        })
    }

    onRightClickPanel = content => e => {
        e.preventDefault();

        if (!content.content) {
            return;
        }

        const {panel} = this.state;

        let reverseShip = this.state[content.content.name];
        reverseShip.parts[content.content.part] = {
            ...reverseShip.parts[content.content.part],
            currentType: reverseShip.parts[content.content.part].type
        }

        const newPanel = panel.map(line => line.map(
            box => {
                if (content.i === box.i && content.j === box.j) {
                    box = {
                        ...box,
                        content: null
                    }
                }
                return box;
            }
        ));

        this.setState({
            panel: newPanel,
            [content.content.name]: reverseShip,
            done: false
        });
    }

    onClickNextStep = () => {
        this.props.nextStep(this.state);
    }

    render() {
        const {done, admiral_0, kreuzer_0, kreuzer_1, destroyer_0, destroyer_1, destroyer_2, boat_0, boat_1, boat_2, boat_3, panel} = this.state;

        return (
            <div>
                <div className={"grid grid-2"}>
                    <Panel
                        panel={panel}
                        onClick={this.onClickPanel}
                        onRightClick={this.onRightClickPanel}
                    />
                    <Ships
                        admiral_0={admiral_0}
                        kreuzer_0={kreuzer_0}
                        kreuzer_1={kreuzer_1}
                        destroyer_0={destroyer_0}
                        destroyer_1={destroyer_1}
                        destroyer_2={destroyer_2}
                        boat_0={boat_0}
                        boat_1={boat_1}
                        boat_2={boat_2}
                        boat_3={boat_3}
                        onClick={this.onClickShip}
                        onRightClick={this.onRightClickShip}
                    />
                </div>
                <FooterButton
                    onClick={this.onClickNextStep}
                    disabled={!done}
                    value={"Next"}
                />
            </div>
        );
    }
};

GamePageInitial.propTypes = {};

export default GamePageInitial;