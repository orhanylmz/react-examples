import React from 'react';
import PropTypes from 'prop-types';

import '../css/box.css'

import {ADMIRAL, KREUZER, DESTROYER, BOAT, SHOT, MISS, LOADED} from "../helpers/shipHelper";

const findClassSuffix = (content) => {
    if (content && content.state) {
        if (content.state.indexOf(SHOT) >= 0) {
            return " shot";
        } else if (content.state.indexOf(MISS) >= 0) {
            return " miss";
        } else if (content.state.indexOf(ADMIRAL) >= 0) {
            return " admiral";
        } else if (content.state.indexOf(KREUZER) >= 0) {
            return " kreuzer";
        } else if (content.state.indexOf(DESTROYER) >= 0) {
            return " destroyer";
        } else if (content.state.indexOf(BOAT) >= 0) {
            return " boat";
        } else if (content.state.indexOf(LOADED) >= 0) {
            return "";
        }
    }
    return "";
}

const Box = ({box, onClick, onRightClick}) => {
    return (
        <div
            id={box.id}
            onClick={onClick && onClick(box)}
            onContextMenu={onRightClick && onRightClick(box)}
            className={"box bordered" + findClassSuffix(box.content)}
        >
            {box.content && box.content.shot > 0 && box.content.shot}
        </div>
    );
};

Box.propTypes = {
    content: PropTypes.shape({
        name: PropTypes.string
    })
};

export default Box;