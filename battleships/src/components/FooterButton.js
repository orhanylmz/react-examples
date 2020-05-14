import React from 'react';
import PropTypes from 'prop-types';

const findClassSuffix = props => {
    var suffix = "";
    if (props.disabled) {
        suffix += " disabled";
    }

    if (props.left) {
        suffix += " footer-left";
    } else if (props.right) {
        suffix += " footer-right";
    }
    return suffix;
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