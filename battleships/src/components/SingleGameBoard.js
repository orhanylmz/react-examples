import React from 'react';
import PropTypes from 'prop-types';
import '../css/gameBoard.css'

const SingleGameBoard = props => {
    console.log(props);
    return (
        <div className={props.className}>
            {
                props.singleBoard.map(line => line.map(
                    number =>
                    <div className={"game-button"}>{number}</div>
                ))
            }
        </div>
    );
};

SingleGameBoard.propTypes = {
    className: PropTypes.string.isRequired,
    singleBoard: PropTypes.array.isRequired
};

export default SingleGameBoard;