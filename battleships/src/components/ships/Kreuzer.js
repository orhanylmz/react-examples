import React from 'react';
import PropTypes from 'prop-types';

import '../../css/gameStatusBoard.css'

const Kreuzer = props => {
    return (
        <div className={"kreuzer-board"}>
            <div className={"ship-item ship-item-kreuzer"} id={props.name+"_0"} name={props.name} onClick={props.onClickStatusBoard}  onContextMenu={props.onClickStatusBoard}/>
            <div className={"ship-item ship-item-kreuzer"} id={props.name+"_1"} name={props.name} onClick={props.onClickStatusBoard} onContextMenu={props.onClickStatusBoard}/>
            <div className={"ship-item ship-item-kreuzer"} id={props.name+"_2"} name={props.name} onClick={props.onClickStatusBoard} onContextMenu={props.onClickStatusBoard}/>
        </div>
    );
};

Kreuzer.propTypes = {};

export default Kreuzer;