import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class HomePage extends Component {
    state = {};

    render() {
        return (
            <div>
                <h1>HomePage</h1>
            </div>
        );
    }
}

HomePage.propTypes = {};

export default connect()(HomePage);