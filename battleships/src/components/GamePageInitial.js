import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Panel from "./Panel";
import Ships from "./Ships";
import FooterButton from "./FooterButton";

import {createPanel} from "../helpers/panelHelper";
import {LOADED, tempShips} from "../helpers/shipHelper";

import {mapPanelToShips} from "../helpers/playerHelper";
import {Button, Form} from "semantic-ui-react";

class GamePageInitial extends Component {
    state = {
        panel: createPanel(),
        tempShips: tempShips(),
        done: false,
        selectedContent: null
    }

    onClickShip = box => e => {
        e.preventDefault();

        if (box.content.state.indexOf(LOADED) >= 0) {
            return;
        }

        const {selectedContent, tempShips} = this.state;

        if (selectedContent && selectedContent.type === box.content.type && selectedContent.index === box.content.index && selectedContent.part === box.content.part) {
            //duplicate click
            return;
        }

        if (selectedContent && (selectedContent.type !== box.content.type || selectedContent.index !== box.content.index || selectedContent.part !== box.content.part)) {
            let reverseShip = tempShips[selectedContent.type];
            reverseShip[selectedContent.index].parts[selectedContent.part].content = {
                ...reverseShip[selectedContent.index].parts[selectedContent.part].content,
                state: reverseShip[selectedContent.index].parts[selectedContent.part].content.type
            }
        }

        const ship = tempShips[box.content.type];
        ship[box.content.index].parts[box.content.part].content = {
            ...ship[box.content.index].parts[box.content.part].content,
            state: LOADED
        }

        this.setState({
            tempShips: tempShips,
            selectedContent: {
                ...box.content,
                state: box.content.type
            }
        });
    }

    onRightClickShip = box => e => {
        e.preventDefault();

        const {selectedContent, tempShips} = this.state;

        if (!selectedContent || selectedContent.type !== box.content.type || selectedContent.index !== box.content.index || selectedContent.part !== box.content.part) {
            return
        }

        const ship = tempShips[box.content.type];
        ship[box.content.index].parts[box.content.part].content = {
            ...ship[box.content.index].parts[box.content.part].content,
            state: ship[box.content.index].parts[box.content.part].content.type
        }

        this.setState({
            tempShips: tempShips,
            selectedContent: null
        });
    }

    onClickPanel = box => e => {
        e.preventDefault();

        const {selectedContent, panel} = this.state;
        if (!selectedContent) {
            return;
        }

        if (panel[box.j][box.i].content != null) {
            return;
        }

        panel[box.j][box.i] = {
            ...panel[box.j][box.i],
            content: {
                ...selectedContent,
                i: box.i,
                j: box.j
            }
        }

        const done = panel.flat().filter(box => box.content).length === 20;

        this.setState({
            panel: panel,
            selectedContent: null,
            done: done
        })
    }

    onRightClickPanel = box => e => {
        e.preventDefault();

        if (!box.content) {
            return;
        }

        const {tempShips, panel} = this.state;

        const ship = tempShips[box.content.type];
        ship[box.content.index].parts[box.content.part].content = {
            ...ship[box.content.index].parts[box.content.part].content,
            state: ship[box.content.index].parts[box.content.part].content.type
        }

        panel[box.j][box.i] = {
            ...panel[box.j][box.i],
            content: null
        }

        this.setState({
            panel,
            tempShips,
            selectedContent: null
        });
    }

    onClickNextStep = () => {
        const ships = mapPanelToShips(this.state.panel);
        this.props.nextStep(ships);
    }

    render() {
        const {done, tempShips, panel} = this.state;

        return (
            <div>
                <div className={"grid grid-2"}>
                    <Panel
                        panel={panel}
                        onClick={this.onClickPanel}
                        onRightClick={this.onRightClickPanel}
                    />
                    <Ships
                        ships={tempShips}
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