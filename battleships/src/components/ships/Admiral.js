import React from 'react';
import PropTypes from 'prop-types';

import '../../css/box.css';
import '../../css/grid.css';
import Box from "../Box";

const Admiral = props => {
    const box = part => {
        if (part.content){
            return part;
        }
        return {
            content: part
        }
    }

    props.content.parts[1] && console.log(props.content.parts[1]);
    return (
        <div className={"grid grid-1-2"}>
            <div className={"grid"}>
                <Box box={box(props.content.parts[0])} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
            </div>
            <div className={"ship-grid grid-3"}>
                <Box box={box(props.content.parts[1])} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
                <Box box={box(props.content.parts[2])} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
                <Box box={box(props.content.parts[3])} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
            </div>
        </div>
    );
};

Admiral.propTypes = {};

export default Admiral;