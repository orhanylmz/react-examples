import React from 'react';
import PropTypes from 'prop-types';

const Boat = props => {
    return (
        <div>
            <div className={"boat-board"}>
                <div className={"ship-item ship-item-boat"} id={props.name+"_0"} name={props.name} onClick={props.onClickStatusBoard} onContextMenu={props.onClickStatusBoard}/>
            </div>
        </div>
    );
};

Boat.propTypes = {
    
};

export default Boat;