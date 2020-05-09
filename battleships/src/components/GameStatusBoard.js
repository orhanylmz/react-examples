import React from 'react';
import PropTypes from 'prop-types';

import Admiral from "./ships/Admiral";
import Kreuzer from "./ships/Kreuzer";
import Destroyer from "./ships/Destroyer";
import Boat from "./ships/Boat";

import '../css/gameStatusBoard.css'

const GameStatusBoard = props => {

    return (
        <div className={"gameStatusBoard"}>
            <Admiral name={"admiral"} onClickStatusBoard={props.onClickStatusBoard}/>
            <div className={"kreuzer-boards"}>
                <Kreuzer name={"kreuzer-1"} onClickStatusBoard={props.onClickStatusBoard}/>
                <Kreuzer name={"kreuzer-2"} onClickStatusBoard={props.onClickStatusBoard}/>
            </div>
            <div className={"destroyer-boards"}>
                <Destroyer name={"destroyer-1"} onClickStatusBoard={props.onClickStatusBoard}/>
                <Destroyer name={"destroyer-2"} onClickStatusBoard={props.onClickStatusBoard}/>
                <Destroyer name={"destroyer-3"} onClickStatusBoard={props.onClickStatusBoard}/>
            </div>
            <div className={"boat-boards"}>
                <Boat name={"boat-1"} onClickStatusBoard={props.onClickStatusBoard}/>
                <Boat name={"boat-2"} onClickStatusBoard={props.onClickStatusBoard}/>
                <Boat name={"boat-3"} onClickStatusBoard={props.onClickStatusBoard}/>
                <Boat name={"boat-4"} onClickStatusBoard={props.onClickStatusBoard}/>
            </div>
        </div>
    );
};

GameStatusBoard.propTypes = {};

export default GameStatusBoard;