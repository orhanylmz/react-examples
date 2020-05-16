import React from 'react';
import PropTypes from 'prop-types';

import '../css/grid.css'

import Admiral from "./ships/Admiral";
import Kreuzer from "./ships/Kreuzer";
import Destroyer from "./ships/Destroyer";
import Boat from "./ships/Boat";

import {tempShips} from "../helpers/shipHelper";

const Ships = props => {
    let ships = props.ships;
    if (!ships){
        ships = tempShips();
    }
    console.log(ships)
    const {admiral, kreuzer, destroyer, boat} = ships;
    return (
        <div className={"grid grid-1-4"}>
            <Admiral content={admiral[0]} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
            <div className={"grid grid-2"}>
                <Kreuzer content={kreuzer[0]} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
                <Kreuzer content={kreuzer[1]} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
            </div>
            <div className={"grid grid-3"}>
                <Destroyer content={destroyer[0]} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
                <Destroyer content={destroyer[1]} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
                <Destroyer content={destroyer[2]} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
            </div>
            <div className={"grid grid-4"}>
                <Boat content={boat[0]} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
                <Boat content={boat[1]} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
                <Boat content={boat[2]} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
                <Boat content={boat[3]} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
            </div>
        </div>
    );
};

Ships.propTypes = {};

export default Ships;