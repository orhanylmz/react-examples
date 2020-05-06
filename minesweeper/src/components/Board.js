import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Button, Image} from 'semantic-ui-react'
import {GAME_LOGO, NUMBER_1, NUMBER_2, NUMBER_3, NUMBER_4, NUMBER_5, NUMBER_6, NUMBER_7, NUMBER_8} from "../helpers/logoHelper";

import CustomButton from "./CustomButton";

const findImage = number => {
    switch (number) {
        case -1:
            return GAME_LOGO;
        case 1:
            return NUMBER_1;
        case 2:
            return NUMBER_2;
        case 3:
            return NUMBER_3;
        case 4:
            return NUMBER_4;
        case 5:
            return NUMBER_5;
        case 6:
            return NUMBER_6;
        case 7:
            return NUMBER_7;
        case 8:
            return NUMBER_8;
        default:
            return '';
    }
}

class Board extends Component {
    state = {
        header: 'Board'
    }
    componentDidMount() {
        this.props.loadBoard(this.props.settings);
        document.addEventListener('contextmenu', this.onClick);
    }

    onClick = button => e => {
        e.preventDefault();
        const {gameBoard} = this.props.board;
        this.props.onClick(gameBoard, button, e.nativeEvent.type==='contextmenu');
    }

    render() {
        return (
            <div>
                <h1 onClick={() => this.props.loadBoard(this.props.settings)}>{this.state.header}</h1>
                {
                    this.props.board.gameBoard.map
                    (line => (
                        <Button.Group>{
                            line.map(button => (
                                <CustomButton onClick={this.onClick} button={button}/>
                            ))
                        }</Button.Group>
                    ))
                }
            </div>
        );
    }
}

Board.propTypes = {};

export default Board;