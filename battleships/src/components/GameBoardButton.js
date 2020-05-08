import React from 'react';
import PropTypes from 'prop-types';

const GameBoardButton = ({value, onClick}) => {
    return (
        <div
            className={"game-button"}
            onClick={onClick(value.i, value.j)}>
            {value.moveOrder}
        </div>
    );
};

GameBoardButton.propTypes = {};

export default GameBoardButton;