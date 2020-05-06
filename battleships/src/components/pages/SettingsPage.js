import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class SettingsPage extends Component {
    state = {};

    render() {
        return (
            <div>
                <h1>SettingsPage</h1>
            </div>
        );
    }
}

SettingsPage.propTypes = {};

export default connect()(SettingsPage);