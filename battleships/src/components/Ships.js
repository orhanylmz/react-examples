import React from 'react';
import PropTypes from 'prop-types';

import '../css/grid.css'

import Admiral from "./ships/Admiral";
import Kreuzer from "./ships/Kreuzer";
import Destroyer from "./ships/Destroyer";
import Boat from "./ships/Boat";

const Ships = props => {
    return (
        <div className={"grid grid-1-4"}>
            <Admiral content={props.admiral_0} onClick={props.onClick} onRightClick={props.onRightClick}/>
            <div className={"grid grid-2"}>
                <Kreuzer content={props.kreuzer_0} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Kreuzer content={props.kreuzer_1} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
            <div className={"grid grid-3"}>
                <Destroyer content={props.destroyer_0} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Destroyer content={props.destroyer_1} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Destroyer content={props.destroyer_2} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
            <div className={"grid grid-4"}>
                <Boat content={props.boat_0} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Boat content={props.boat_1} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Boat content={props.boat_2} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Boat content={props.boat_3} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
        </div>
    );
};

Ships.propTypes = {};

export default Ships;