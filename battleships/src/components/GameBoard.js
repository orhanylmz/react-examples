import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SingleGameBoard from "./SingleGameBoard";
import GameStatusBoard from "./GameStatusBoard";

const findValue = (i, j) => {
    return {
        border: i !== 0 && j !== 0,
        currentValue: (i !== 0 && j !== 0) ||  (i === 0 && j === 0) ? null : i || j,
        i: i,
        j: j
    };
}

const singleBoard = [
    [findValue(0,0), findValue(1,0), findValue(2,0), findValue(3,0), findValue(4,0), findValue(5,0), findValue(6,0), findValue(7,0), findValue(8,0), findValue(9,0), findValue(10,0)],
    [findValue(0,1), findValue(1,1), findValue(2,1), findValue(3,1), findValue(4,1), findValue(5,1), findValue(6,1), findValue(7,1), findValue(8,1), findValue(9,1), findValue(10,1)],
    [findValue(0,2), findValue(1,2), findValue(2,2), findValue(3,2), findValue(4,2), findValue(5,2), findValue(6,2), findValue(7,2), findValue(8,2), findValue(9,2), findValue(10,2)],
    [findValue(0,3), findValue(1,3), findValue(2,3), findValue(3,3), findValue(4,3), findValue(5,3), findValue(6,3), findValue(7,3), findValue(8,3), findValue(9,3), findValue(10,3)],
    [findValue(0,4), findValue(1,4), findValue(2,4), findValue(3,4), findValue(4,4), findValue(5,4), findValue(6,4), findValue(7,4), findValue(8,4), findValue(9,4), findValue(10,4)],
    [findValue(0,5), findValue(1,5), findValue(2,5), findValue(3,5), findValue(4,5), findValue(5,5), findValue(6,5), findValue(7,5), findValue(8,5), findValue(9,5), findValue(10,5)],
    [findValue(0,6), findValue(1,6), findValue(2,6), findValue(3,6), findValue(4,6), findValue(5,6), findValue(6,6), findValue(7,6), findValue(8,6), findValue(9,6), findValue(10,6)],
    [findValue(0,7), findValue(1,7), findValue(2,7), findValue(3,7), findValue(4,7), findValue(5,7), findValue(6,7), findValue(7,7), findValue(8,7), findValue(9,7), findValue(10,7)],
    [findValue(0,8), findValue(1,8), findValue(2,8), findValue(3,8), findValue(4,8), findValue(5,8), findValue(6,8), findValue(7,8), findValue(8,8), findValue(9,8), findValue(10,8)],
    [findValue(0,9), findValue(1,9), findValue(2,9), findValue(3,9), findValue(4,9), findValue(5,9), findValue(6,9), findValue(7,9), findValue(8,9), findValue(9,9), findValue(10,9)],
    [findValue(0,10), findValue(1,10), findValue(2,10), findValue(3,10), findValue(4,10), findValue(5,10), findValue(6,10), findValue(7,10), findValue(8,10), findValue(9,10), findValue(10,10)]];

class GameBoard extends Component {
    state = {};

    render() {
        return (
            <div>
                <div className="gameBoards">
                    <SingleGameBoard className={"mine"} singleBoard={singleBoard}/>
                    <SingleGameBoard className={"other"} singleBoard={singleBoard}/>
                </div>
                <GameStatusBoard/>
            </div>
        );
    }
}

GameBoard.propTypes = {};

export default GameBoard;