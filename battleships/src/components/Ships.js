import React from 'react';
import PropTypes from 'prop-types';

import '../css/grid.css'

import Admiral from "./ships/Admiral";
import Kreuzer from "./ships/Kreuzer";
import Destroyer from "./ships/Destroyer";
import Boat from "./ships/Boat";

const Ships = props => {
    const {admiral, kreuzer, destroyer, boat} = props.ships;
    return (
        <div className={"grid grid-1-4"}>
            <Admiral content={admiral[0]} onClick={props.onClick} onRightClick={props.onRightClick}/>
            <div className={"grid grid-2"}>
                <Kreuzer content={kreuzer[0]} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Kreuzer content={kreuzer[1]} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
            <div className={"grid grid-3"}>
                <Destroyer content={destroyer[0]} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Destroyer content={destroyer[1]} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Destroyer content={destroyer[2]} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
            <div className={"grid grid-4"}>
                <Boat content={boat[0]} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Boat content={boat[1]} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Boat content={boat[2]} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Boat content={boat[3]} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
        </div>
    );
};

Ships.propTypes = {};

export default Ships;