import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/gameBoard.css';

import CustomButton from "./CustomButton";

class SingleGameBoard extends Component {

    state = {
        board: [],
        moveList: [],
        loaded: false
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps);
        this.setState({
            board: nextProps.board,
            moveList: nextProps.moveOrder !== this.props.moveOrder ? [] : this.state.moveList
        })
    }

    setMoveOrder = (item, moveList) => {
        let founded = moveList.find(moveItem => moveItem.i === item.i && moveItem.j === item.j);
        if (founded) {
            return {
                ...item,
                moveOrder: this.props.moveOrder
            }
        }
        if (item.moveOrder === this.props.moveOrder) {
            return {
                ...item,
                moveOrder: null
            }
        }
        return item;
    }

    onClick = (i, j) => e => {
        e.preventDefault();

        const {board, moveList} = this.state;

        const clickedValue = board.flat().find(item => item.i === i && item.j === j);
        if (clickedValue && clickedValue.moveOrder && clickedValue.moveOrder !== this.props.moveOrder){
            return;
        }

        let foundValue = moveList.find(item => item.i === i && item.j === j);
        if (foundValue) {
            moveList.splice(moveList.indexOf(foundValue, 0), 1);
        } else if (moveList.length < 3) {
            moveList.push({
                i: i,
                j: j
            });
        }

        const newBoard = board.map(line => line.map(item => {
            return this.setMoveOrder(item, moveList);
        }));

        this.setState({
            board: newBoard,
            moveList: moveList
        });

        if (moveList.length === 3 && !this.state.loaded) {
            this.props.addMoveList(moveList, newBoard);
            this.setState({
                loaded: true
            });
        } else if (moveList.length !== 3 && this.state.loaded) {
            this.props.removeMoveList(newBoard);
            this.setState({
                loaded: false
            });
        }
    }

    render() {
        const {board} = this.state;
        return (
            <div className={"gameBoard"}>
                {
                    board.map(line => line.map(
                        value =>
                            <CustomButton key={Math.random()} value={value} onClick={this.onClick}/>
                    ))
                }
            </div>
        );
    }
};

SingleGameBoard.propTypes = {
    board: PropTypes.array.isRequired
};

export default SingleGameBoard;