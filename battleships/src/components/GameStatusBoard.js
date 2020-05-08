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
            <Admiral onClickStatusBoard={props.onClickStatusBoard && props.onClickStatusBoard({admiral: true})}/>
            <div className={"kreuzer-boards"}>
                <Kreuzer onClickStatusBoard={props.onClickStatusBoard && props.onClickStatusBoard({kreuzer: true})}/>
                <Kreuzer onClickStatusBoard={props.onClickStatusBoard && props.onClickStatusBoard({kreuzer: true})}/>
            </div>
            <div className={"destroyer-boards"}>
                <Destroyer onClickStatusBoard={props.onClickStatusBoard && props.onClickStatusBoard({destroyer: true})}/>
                <Destroyer onClickStatusBoard={props.onClickStatusBoard && props.onClickStatusBoard({destroyer: true})}/>
                <Destroyer onClickStatusBoard={props.onClickStatusBoard && props.onClickStatusBoard({destroyer: true})}/>
            </div>
            <div className={"boat-boards"}>
                <Boat onClickStatusBoard={props.onClickStatusBoard && props.onClickStatusBoard({boat: true})}/>
                <Boat onClickStatusBoard={props.onClickStatusBoard && props.onClickStatusBoard({boat: true})}/>
                <Boat onClickStatusBoard={props.onClickStatusBoard && props.onClickStatusBoard({boat: true})}/>
                <Boat onClickStatusBoard={props.onClickStatusBoard && props.onClickStatusBoard({boat: true})}/>
            </div>
        </div>
    );
};

GameStatusBoard.propTypes = {};

export default GameStatusBoard;