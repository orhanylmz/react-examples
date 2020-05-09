import React from 'react';
import PropTypes from 'prop-types';

const Destroyer = props => {
    return (
        <div>
            <div className={"destroyer-board"}>
                <div className={"ship-item ship-item-destroyer"} id={props.name+"_0"} name={props.name} onClick={props.onClickStatusBoard} onContextMenu={props.onClickStatusBoard}/>
                <div className={"ship-item ship-item-destroyer"} id={props.name+"_1"} name={props.name} onClick={props.onClickStatusBoard} onContextMenu={props.onClickStatusBoard}/>
            </div>
        </div>
    );
};

Destroyer.propTypes = {
    
};

export default Destroyer;