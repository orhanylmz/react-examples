import React from 'react';
import PropTypes from 'prop-types';

import '../css/box.css'

const findClassSuffix = (content, onlyShot) => {
    if (onlyShot){
        return "";
    }
    let suffix = "";
    if (content){
        if (content.type){
            suffix += " "+content.type;
        }
        if (content.state){
            suffix += " "+content.state;
        }
    }
    return suffix;
}

const Box = ({box, onClick, onRightClick, onlyShot}) => {
    return (
        <div
            id={box.id}
            onClick={onClick && onClick(box)}
            onContextMenu={onRightClick && onRightClick(box)}
            className={"box bordered" + findClassSuffix(box.content, onlyShot)}
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