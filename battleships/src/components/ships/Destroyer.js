import React from 'react';
import PropTypes from 'prop-types';

const Destroyer = props => {
    return (
        <div>
            <div className={"destroyer-board"}>
                <div className={"ship-item"}></div>
                <div className={"ship-item"}></div>
            </div>
        </div>
    );
};

Destroyer.propTypes = {
    
};

export default Destroyer;