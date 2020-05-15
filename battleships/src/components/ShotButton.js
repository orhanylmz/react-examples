import React from 'react';
import PropTypes from 'prop-types';

import LoaderHOC from "./LoaderHOC";

const ShotButton = props => {
    return (
        <button className={"action-button " + (!props.enableShot ? "disabled" : "")}
                disabled={!props.enableShot}
                onClick={props.shot}>Shot
        </button>
    );
};

ShotButton.propTypes = {};

export default LoaderHOC(ShotButton, 'loading');