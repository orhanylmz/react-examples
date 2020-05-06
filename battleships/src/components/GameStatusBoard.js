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
            <Admiral/>
            <div className={"kreuzer-boards"}>
                <Kreuzer/>
                <Kreuzer/>
            </div>
            <div className={"destroyer-boards"}>
                <Destroyer/>
                <Destroyer/>
                <Destroyer/>
            </div>
            <div className={"boat-boards"}>
                <Boat/>
                <Boat/>
                <Boat/>
                <Boat/>
            </div>
        </div>
    );
};

GameStatusBoard.propTypes = {};

export default GameStatusBoard;