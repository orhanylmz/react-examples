import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import GameBoard from "../GameBoard";

class GamePage extends Component {
    state = {};

    render() {
        return (
            <div>
                <GameBoard/>
            </div>
        );
    }
}

GamePage.propTypes = {};

export default connect()(GamePage);