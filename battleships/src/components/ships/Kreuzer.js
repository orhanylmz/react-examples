import React from 'react';
import PropTypes from 'prop-types';

import '../../css/gameStatusBoard.css'

const Kreuzer = props => {
    return (
        <div className={"kreuzer-board"}>
            <div className={"ship-item"}></div>
            <div className={"ship-item"}></div>
            <div className={"ship-item"}></div>
        </div>
    );
};

Kreuzer.propTypes = {};

export default Kreuzer;