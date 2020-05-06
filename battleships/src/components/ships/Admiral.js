import React from 'react';
import PropTypes from 'prop-types';

import '../../css/gameStatusBoard.css'

const Admiral = props => {
    return (
        <div className={"admiral-board"}>
            <div className={"ship-item-no-border"}></div>
            <div className={"ship-item"}></div>
            <div className={"ship-item-no-border"}></div>
            <div className={"ship-item"}></div>
            <div className={"ship-item"}></div>
            <div className={"ship-item"}></div>
        </div>
    );
};

Admiral.propTypes = {
    
};

export default Admiral;