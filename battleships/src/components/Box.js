import React from 'react';
import PropTypes from 'prop-types';

import '../css/box.css'

const findClassSuffix = ({content, currentType}) => {
    if (content) {
        if (content.name.indexOf("admiral") >= 0){
            return " admiral";
        } else if (content.name.indexOf("kreuzer") >= 0){
            return " kreuzer";
        } else if (content.name.indexOf("destroyer") >= 0){
            return " destroyer";
        } else if (content.name.indexOf("boat") >= 0){
            return " boat";
        } else if (content.name.indexOf("shot") >= 0){
            return " shot";
        } else if (content.name.indexOf("miss") >= 0){
            return " miss";
        }
    }

    currentType = content ? content.currentType : currentType;
    switch (currentType) {
        case "admiral":
            return " admiral";
        case "kreuzer":
            return " kreuzer";
        case "destroyer":
            return " destroyer";
        case "boat":
            return " boat";
        case "shot":
            return " shot";
        case "miss":
            return " miss";
        default:
            return "";
    }
}

const Box = ({content, onClick, onRightClick}) => {
    return (
        <div
            id={content.id}
            onClick={onClick && onClick(content)}
            onContextMenu={onRightClick && onRightClick(content)}
            className={"box bordered" + findClassSuffix(content)}
        >
            {content.value}
        </div>
    );
};

Box.propTypes = {
    content: PropTypes.shape({
        type: PropTypes.string,
        name: PropTypes.string
    })
};

export default Box;