import React from 'react';
import PropTypes from 'prop-types';

const Boat = props => {
    return (
        <div>
            <div className={"boat-board"}>
                <div className={"ship-item"}></div>
            </div>
        </div>
    );
};

Boat.propTypes = {
    
};

export default Boat;