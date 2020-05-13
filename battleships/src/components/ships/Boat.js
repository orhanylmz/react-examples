import React from 'react';
import PropTypes from 'prop-types';
import Box from "../Box";

const Boat = props => {
    return (
        <div>
            <div className={"ship-grid"}>
                <Box box={props.content.parts[0]} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
        </div>
    );
};

Boat.propTypes = {
    
};

export default Boat;