import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SingleGameBoard from "./SingleGameBoard";
import GameStatusBoard from "./GameStatusBoard";

const singleBoard = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];

class GameBoard extends Component {
    state = {};

    render() {
        return (
            <div>
                <h1>GameBoard</h1>
                <div className="gameBoards">
                    <SingleGameBoard className={"gameBoard-left"} singleBoard={singleBoard}/>
                    <SingleGameBoard className={"gameBoard-right"} singleBoard={singleBoard}/>
                </div>
                <GameStatusBoard/>
            </div>
        );
    }
}

GameBoard.propTypes = {};

export default GameBoard;