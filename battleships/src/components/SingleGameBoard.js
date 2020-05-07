import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/gameBoard.css';

import CustomButton from "./CustomButton";

class SingleGameBoard extends Component {

    state = {
        board: [],
        count: 0,
        moveList: []
    }

    componentDidMount() {
        this.setState({
            board: this.props.singleBoard
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            board: nextProps.singleBoard
        })
    }

    onClick = value => e => {
        e.preventDefault();

        if (!value.border) {
            return;
        }

        if (value.currentValue) {
            return;
        }

        const {board, moveList} = this.state;

        if (moveList.length >= 3) {
            return;
        }

        const newBoard = board.map(line => line.map(item => {
            return {
                ...item,
                currentValue: item === value ? Math.floor(this.state.count / 3) + 1 : item.currentValue
            }
        }));

        moveList[moveList.length] = {
            i: value.i,
            j: value.j
        };

        this.setState({
            board: newBoard,
            count: this.state.count + 1,
            moveList: moveList
        })

        if (moveList.length === 3){
            this.setState({
                moveList: []
            })
            this.props.addMoveList(moveList);
        }
    }

    render() {
        const {board} = this.state;
     //   console.log(this.props.addMoveList);
       // console.log(board);
        return (
            <div className={"gameBoard"}>
                {
                    board.map(line => line.map(
                        value =>
                            <CustomButton key={Math.random()} value={value} onClick={this.onClick(value)}/>
                    ))
                }
            </div>
        );
    }
};

SingleGameBoard.propTypes = {
    className: PropTypes.string.isRequired,
    singleBoard: PropTypes.array.isRequired
};

export default SingleGameBoard;