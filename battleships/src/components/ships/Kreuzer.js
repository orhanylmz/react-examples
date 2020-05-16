import React from 'react';
import PropTypes from 'prop-types';

import Box from "../Box";
import Admiral from "./Admiral";

const Kreuzer = props => {
    const box = part => {
        if (part.content){
            return part;
        }
        return {
            content: part
        }
    }

    return (
        <div className={"ship-grid grid-3"}>
            <Box box={box(props.content.parts[0])} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
            <Box box={box(props.content.parts[1])} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
            <Box box={box(props.content.parts[2])} onClick={props.onClick} onRightClick={props.onRightClick} onlyShot={props.onlyShot}/>
        </div>
    );
};

Kreuzer.propTypes = {};

export default Kreuzer;