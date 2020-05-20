import React from 'react';
import PropTypes from 'prop-types';

import {Icon, Button, Grid} from 'semantic-ui-react';


import ShotButton from "./ShotButton";
import Ships from "./Ships";
import Panel from "./Panel";

const ActionPanel = props => {
    const order = props.order;
    const iconName = order == null ? "" : order ? "hand point left" : "hand point right";
    const iconColor = order == null ? "" : order ? "green" : "grey";
    return (
        <Grid>
            <Grid.Row columns={1} stretched={true}>
                <Grid.Column verticalAlign={"top"} floated={"right"}>
                    <Icon name={iconName} color={iconColor} size='massive' fitted={true}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} stretched={true}>
                <Grid.Column verticalAlign={"center"}>
                    <ShotButton loading={order} enableShot={props.enableShot} shot={props.shot} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} stretched={true}>
                <Grid.Column verticalAlign={"top"}>
                    <Ships
                        ships={props.ships}
                        onlyShot={true}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

ActionPanel.propTypes = {};

export default ActionPanel;