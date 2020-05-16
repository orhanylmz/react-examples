import React from 'react';
import PropTypes from 'prop-types';

import Box from "./Box";

import '../css/grid.css'
import {createPanel} from "../helpers/panelHelper";

const Panel = props => {
    let panel = props.panel;
    if (!panel) {
        panel = createPanel();
    }

    return (
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
    );
};

Panel.propTypes = {
    panel: PropTypes.array
};

export default Panel;