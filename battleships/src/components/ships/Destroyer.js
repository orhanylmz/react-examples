import React from 'react';
import PropTypes from 'prop-types';
import Box from "../Box";

const Destroyer = props => {
    const box = part => {
        if (part.content){
            return part;
        }
        return {
            content: part
        }
    }

    return (
        <div>
            <div className={"ship-grid grid-2"}>
                <Box box={box(props.content.parts[0])} onClick={props.onClick} onRightClick={props.onRightClick}/>
                <Box box={box(props.content.parts[1])} onClick={props.onClick} onRightClick={props.onRightClick}/>
            </div>
        </div>
    );
};

Destroyer.propTypes = {
    
};

export default Destroyer;