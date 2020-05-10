import React from 'react';
import PropTypes from 'prop-types';
import Box from "../Box";

const Destroyer = props => {
    return (
        <div>
            <div className={"ship-grid grid-2"}>
                <Box content={props.content.parts[0]} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Box content={props.content.parts[1]} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
        </div>
    );
};

Destroyer.propTypes = {
    
};

export default Destroyer;