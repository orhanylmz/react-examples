import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class GamePage extends Component {
    state = {};

    render() {
        return (
            <div>
                <h1>GamePage</h1>
            </div>
        );
    }
}

GamePage.propTypes = {};

export default connect()(GamePage);