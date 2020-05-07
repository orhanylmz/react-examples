import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({value, onClick}) => {
    return (
        <div>
            <div
                className={value.border ? "game-button" : "game-button-no-border"}
                onClick={onClick}>
                {value.currentValue}
            </div>
        </div>
    );
};

CustomButton.propTypes = {
    
};

export default CustomButton;