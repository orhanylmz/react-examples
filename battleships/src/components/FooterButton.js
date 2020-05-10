import React from 'react';
import PropTypes from 'prop-types';

const findClassSuffix = props => {
    if (props.disabled) {
        return " disabled";
    }
    return "";
}

const FooterButton = props => {
    return (
        <div>
            <button className={"footer action-button "+findClassSuffix(props)} disabled={props.disabled} onClick={props.onClick}>{props.value}</button>
        </div>
    );
};

FooterButton.propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};

export default FooterButton;