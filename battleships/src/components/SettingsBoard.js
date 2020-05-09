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
        selected: null
    }

    componentDidMount() {
        this.setState({
            ...this.props
        })
    }

    onClickSettingsBoard = e => {
        if (!this.state.selected) {
            return;
        }

        const i = e.target.getAttribute('i');
        const j = e.target.getAttribute('j');

        const {panel} = this.state;
        const newPanel = panel.map(line => line.map(item => {
            if (item.i == i && item.j == j) {
                return {
                    ...item,
                    selected: this.state.selected
                }
            } else {
                return item;
            }
        }))

        this.setState({
            panel: newPanel,
            selected: null
        })
    }

    onClickStatusBoard = e => {
        if (this.state.selected) {
            return;
        }
        this.setState({
            selected: e.target.getAttribute('name')
        });
        e.target.className = EMPTY;
    }

    createGame = () => {
        const {panel} = this.state;
        const shipParts = panel.flat().filter(item => item.selected);
        if (shipParts.length < 20) {
            this.setState({
                error: "Please set another ships"
            });
            return;
        }

        const admiral = shipParts.filter(part => part.selected === "admiral");
        const kreuzer1 = shipParts.filter(part => part.selected === "kreuzer-1");
        const kreuzer2 = shipParts.filter(part => part.selected === "kreuzer-2");
        const destroyer1 = shipParts.filter(part => part.selected === "destroyer-1");
        const destroyer2 = shipParts.filter(part => part.selected === "destroyer-2");
        const destroyer3 = shipParts.filter(part => part.selected === "destroyer-3");
        const boat1 = shipParts.filter(part => part.selected === "boat-1");
        const boat2 = shipParts.filter(part => part.selected === "boat-2");
        const boat3 = shipParts.filter(part => part.selected === "boat-3");
        const boat4 = shipParts.filter(part => part.selected === "boat-4");

        this.props.setShips(
            {
                admiral: createAdmiral({
                    part0: admiral[0],
                    part1: admiral[1],
                    part2: admiral[2],
                    part3: admiral[3]
                }),
                kreuzers: [
                    createKreuzer({
                        part0: kreuzer1[0],
                        part1: kreuzer1[1],
                        part2: kreuzer1[2]
                    }),
                    createKreuzer({
                        part0: kreuzer2[0],
                        part1: kreuzer2[1],
                        part2: kreuzer2[2]
                    })
                ],
                destroyers: [
                    createDestroyer({
                        part0: destroyer1[0],
                        part1: destroyer1[1]
                    }),
                    createDestroyer({
                        part0: destroyer2[0],
                        part1: destroyer2[1]
                    }),
                    createDestroyer({
                        part0: destroyer3[0],
                        part1: destroyer3[1]
                    })
                ],
                boats: [
                    createBoat({
                        part0: boat1[0]
                    }),
                    createBoat({
                        part0: boat2[0]
                    }),
                    createBoat({
                        part0: boat3[0]
                    }),
                    createBoat({
                        part0: boat4[0]
                    })
                ]
            }
        );
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.error && <InlineError message={this.state.error}/>}
                    <Panel
                        panel={this.state.panel}
                        onClickSettingsBoard={this.onClickSettingsBoard}
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