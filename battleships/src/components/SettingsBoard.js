import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/gameBoard.css';

import {findClassName, EMPTY} from "../helpers/classHelper";

import InlineError from "./InlineError";

import GameStatusBoard from "./GameStatusBoard";

import Panel from "./Panel";

import {createAdmiral, createKreuzer, createDestroyer, createBoat} from "../helpers/shipHelper";

class SettingsBoard extends Component {
    state = {
        panel: [],
        admiral: {},
        kreuzers: [],
        destroyers: [],
        boats: [],
        error: null,
        done: false,
        selectedName: null,
        selectedId: null
    }

    componentDidMount() {
        this.setState({
            ...this.props
        })
    }

    rrrrrrr = button => e => {
        e.preventDefault();
        const {gameBoard} = this.props.board;
        this.props.onClick(gameBoard, button, e.nativeEvent.type === 'contextmenu');
    }

    onClickSettingsBoard = e => {
        e.preventDefault();

        const i = e.target.getAttribute('i');
        const j = e.target.getAttribute('j');

        if (e.nativeEvent.type === 'contextmenu') {
            //right click
            const sourceId = e.target.getAttribute('sourceId');
            if (!sourceId) {
                return;
            }
            const sourceName = e.target.getAttribute('sourceName');
            document.getElementById(sourceId).className = findClassName(sourceName);

            const {panel} = this.state;
            const newPanel = panel.map(line => line.map(item => {
                if (item.i == i && item.j == j) {
                    return {
                        ...item,
                        sourceName: null,
                        sourceId: null
                    }
                } else {
                    return item;
                }
            }))

            this.setState({
                panel: newPanel,
            })

            return;
        }

        if (!this.state.selectedName) {
            return;
        }

        const {panel} = this.state;
        const newPanel = panel.map(line => line.map(item => {
            if (item.i == i && item.j == j) {
                return {
                    ...item,
                    sourceName: this.state.selectedName,
                    sourceId: this.state.selectedId
                }
            } else {
                return item;
            }
        }))

        this.setState({
            panel: newPanel,
            selectedName: null,
            selectedId: null
        })
    }

    onClickStatusBoard = e => {
        e.preventDefault();

        if (e.nativeEvent.type === 'contextmenu') {
            if (e.target.id !== this.state.selectedId) {
                return;
            }
            e.target.className = findClassName(e.target.getAttribute('name'));
            this.setState({
                selectedName: null,
                selectedId: null
            });
            return;
        }

        if (this.state.selectedName) {
            const {selectedId, selectedName} = this.state;
            document.getElementById(selectedId).className = findClassName(selectedName);
        }
        this.setState({
            selectedName: e.target.getAttribute('name'),
            selectedId: e.target.id
        });
        e.target.className = EMPTY;
    }

    createGame = () => {
        const {panel} = this.state;
        const shipParts = panel.flat().filter(item => item.sourceName);

        console.log(shipParts.length);

        if (shipParts.length < 20) {
            this.setState({
                error: "Please set another ships"
            });
            return;
        }

        const admiral = shipParts.filter(part => part.sourceName === "admiral");
        const kreuzer1 = shipParts.filter(part => part.sourceName === "kreuzer-1");
        const kreuzer2 = shipParts.filter(part => part.sourceName === "kreuzer-2");
        const destroyer1 = shipParts.filter(part => part.sourceName === "destroyer-1");
        const destroyer2 = shipParts.filter(part => part.sourceName === "destroyer-2");
        const destroyer3 = shipParts.filter(part => part.sourceName === "destroyer-3");
        const boat1 = shipParts.filter(part => part.sourceName === "boat-1")
        const boat2 = shipParts.filter(part => part.sourceName === "boat-2");
        const boat3 = shipParts.filter(part => part.sourceName === "boat-3");
        const boat4 = shipParts.filter(part => part.sourceName === "boat-4");

        this.props.setShips(
            {
                admiral: createAdmiral(admiral[0], admiral[1], admiral[2], admiral[3]),
                kreuzers: [
                    createKreuzer(kreuzer1[0], kreuzer1[1], kreuzer1[2]),
                    createKreuzer(kreuzer2[0], kreuzer2[1], kreuzer2[2])
                ],
                destroyers: [
                    createDestroyer(destroyer1[0], destroyer1[1]),
                    createDestroyer(destroyer2[0], destroyer2[1]),
                    createDestroyer(destroyer3[0], destroyer3[1])
                ],
                boats: [
                    createBoat(boat1[0]),
                    createBoat(boat2[0]),
                    createBoat(boat3[0]),
                    createBoat(boat4[0])
                ]
            }
        );

        this.setState({
            error: null
        });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.error && <InlineError message={this.state.error}/>}
                    <Panel
                        panel={this.state.panel}
                        onClickBoard={this.onClickSettingsBoard}
                    />
                    <button onClick={this.createGame}>create game</button>
                    <GameStatusBoard onClickStatusBoard={this.onClickStatusBoard}/>
                </div>
            </div>
        );
    }
};

SettingsBoard.propTypes = {
    panel: PropTypes.array.isRequired,
    admiral: PropTypes.object,
    kreuzers: PropTypes.array,
    destroyers: PropTypes.array,
    boats: PropTypes.array,
};

export default SettingsBoard;