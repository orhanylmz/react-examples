import React from 'react';
import PropTypes from 'prop-types';

import '../../css/gameStatusBoard.css'

const Admiral = props => {
    return (
        <div className={"admiral-board"}>
            <div></div>
            <div className={"ship-item ship-item-admiral"} name={props.name} onClick={props.onClickStatusBoard}></div>
            <div></div>
            <div className={"ship-item ship-item-admiral"} name={props.name} onClick={props.onClickStatusBoard}></div>
            <div className={"ship-item ship-item-admiral"} name={props.name} onClick={props.onClickStatusBoard}></div>
            <div className={"ship-item ship-item-admiral"} name={props.name} onClick={props.onClickStatusBoard}></div>
        </div>
    );
};

Admiral.propTypes = {
    
};

export default Admiral;