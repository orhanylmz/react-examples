import React from 'react';
import PropTypes from 'prop-types';

import Box from "../Box";

const Kreuzer = props => {
    return (
        <div className={"ship-grid grid-3"}>
            <Box content={props.content.parts[0]} onClick={props.onClick} onRightClick={props.onRightClick}/>
            <Box content={props.content.parts[1]} onClick={props.onClick} onRightClick={props.onRightClick}/>
            <Box content={props.content.parts[2]} onClick={props.onClick} onRightClick={props.onRightClick}/>
        </div>
    );
};

Kreuzer.propTypes = {};

export default Kreuzer;