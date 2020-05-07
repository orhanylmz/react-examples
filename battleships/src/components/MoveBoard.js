import React from 'react';
import PropTypes from 'prop-types';

const MoveBoard = props => {
    return (
        <div className={"moveBoard"}>
            <button className={"move-button"} onClick={props.move}> Oyna </button>
        </div>
    );
};

MoveBoard.propTypes = {
    
};

export default MoveBoard;