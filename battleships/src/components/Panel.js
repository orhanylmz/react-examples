import React from 'react';
import PropTypes from 'prop-types';

import Box from "./Box";

import '../css/grid.css'
import {createPanel} from "../helpers/panelHelper";

import {Segment} from "semantic-ui-react";

const Panel = props => {
    let panel = props.panel;
    if (!panel) {
        panel = createPanel();
    }

    return (
        <Segment loading={props.loading} basic={true} compact>
            <div className={"grid panel"}>
                {
                    panel.map(line =>
                        line.map(box =>
                            <Box
                                key={box.id}
                                onClick={props.onClick}
                                onRightClick={props.onRightClick}
                                box={box}
                                onlyShot={props.onlyShot}
                            />
                        )
                    )
                }
            </div>
        </Segment>
    );
};

Panel.propTypes = {
    panel: PropTypes.array
};

export default Panel;