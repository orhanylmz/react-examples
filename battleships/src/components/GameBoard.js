import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SingleGameBoard from "./SingleGameBoard";
import GameStatusBoard from "./GameStatusBoard";
import MoveBoard from "./MoveBoard";

class GameBoard extends Component {
    move = () => {
        const {mineBoard} = this.props.game;
        this.props.setOtherBoard(mineBoard);
    }

    render() {
        return (
            <div>
                <div className="gameBoards">
                    <SingleGameBoard
                        board={this.props.game.mineBoard}
                        moveOrder={this.props.game.moveOrder}
                        nextMoveOrder={this.props.nextMoveOrder}
                        addMoveList={this.props.addMoveList}
                        removeMoveList={this.props.removeMoveList}/>
                    <MoveBoard
                        move={this.move}/>
                    <SingleGameBoard
                        board={this.props.game.otherBoard}/>
                </div>
                <GameStatusBoard/>
            </div>
        );
    }
}

GameBoard.propTypes = {};

export default GameBoard;