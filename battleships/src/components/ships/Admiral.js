import React from 'react';
import PropTypes from 'prop-types';

import '../../css/gameStatusBoard.css'

const Admiral = props => {
    return (
        <div className={"admiral-board"}>
            <div/>
            <div className={"ship-item ship-item-admiral"} id={props.name+"_0"} name={props.name} onClick={props.onClickStatusBoard} onContextMenu={props.onClickStatusBoard}/>
            <div/>
            <div className={"ship-item ship-item-admiral"} id={props.name+"_1"} name={props.name} onClick={props.onClickStatusBoard} onContextMenu={props.onClickStatusBoard}/>
            <div className={"ship-item ship-item-admiral"} id={props.name+"_2"} name={props.name} onClick={props.onClickStatusBoard} onContextMenu={props.onClickStatusBoard}/>
            <div className={"ship-item ship-item-admiral"} id={props.name+"_3"} name={props.name} onClick={props.onClickStatusBoard} onContextMenu={props.onClickStatusBoard}/>
        </div>
    );
};

Admiral.propTypes = {

};

export default Admiral;