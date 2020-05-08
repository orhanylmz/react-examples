import React from 'react';
import PropTypes from 'prop-types';

import '../../css/gameStatusBoard.css'

const Kreuzer = props => {
    return (
        <div className={"kreuzer-board"}>
            <div className={"ship-item ship-item-kreuzer"} onClick={props.onClickStatusBoard}></div>
            <div className={"ship-item ship-item-kreuzer"} onClick={props.onClickStatusBoard}></div>
            <div className={"ship-item ship-item-kreuzer"} onClick={props.onClickStatusBoard}></div>
        </div>
    );
};

Kreuzer.propTypes = {};

export default Kreuzer;