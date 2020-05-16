import React from 'react';
import PropTypes from 'prop-types';

import {Icon} from 'semantic-ui-react'

import ShotButton from "./ShotButton";
import Ships from "./Ships";

const ActionPanel = props => {
    const order = props.order;
    const iconName = order == null ? "" : order ? "hand point left" : "hand point right";
    const iconColor = order == null ? "" : order ? "green" : "grey";
    return (
        <div className={"grid grid-1-3"}>
            <div className={"grid"}>
                <Icon name={iconName} color={iconColor} size='massive'/>
            </div>
            <ShotButton loading={order} enableShot={props.enableShot} shot={props.shot} />
            <div className={"grid"}>
                <Ships
                    ships={props.ships}
                    onlyShot={true}
                />
            </div>
        </div>
    );
};

ActionPanel.propTypes = {};

export default ActionPanel;