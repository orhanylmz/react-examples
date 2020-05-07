import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({value, onClick}) => {
    return (
        <div
            className={"game-button"}
            onClick={onClick(value.i, value.j)}>
            {value.moveOrder}
        </div>
    );
};

CustomButton.propTypes = {};

export default CustomButton;