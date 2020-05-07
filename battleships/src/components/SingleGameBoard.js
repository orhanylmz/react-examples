import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/gameBoard.css';

import CustomButton from "./CustomButton";

class SingleGameBoard extends Component {
    state = {
        board: [],
        count: 0
    }

    componentWillMount() {
        this.setState({
            board: this.props.singleBoard
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

        const {board} = this.state;
        const newBoard = board.map(line => line.map(item => {
            return {
                ...item,
                currentValue: item === value ? Math.floor(this.state.count / 3) + 1 : item.currentValue
            }
        }));

        this.setState({
            board: newBoard,
            count: this.state.count + 1
        })
    }

    render() {
        const {board} = this.state;
        return (
            <div className={this.props.className}>
                {
                    board.map(line => line.map(
                        value =>
                            <CustomButton value={value} onClick={this.onClick(value)}/>
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