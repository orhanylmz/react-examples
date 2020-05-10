import React from 'react';
import PropTypes from 'prop-types';

import '../../css/box.css';
import '../../css/grid.css';
import Box from "../Box";

const Admiral = props => {
    return (
        <div className={"grid grid-1-2"}>
            <div className={"grid"}>
                <Box content={props.content.parts[0]} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
            <div className={"ship-grid grid-3"}>
                <Box content={props.content.parts[1]} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Box content={props.content.parts[2]} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Box content={props.content.parts[3]} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
        </div>
    );
};

Admiral.propTypes = {};

export default Admiral;