import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from "react-router-dom";

import {HOME_PATH, GAME_PATH, SETTINGS_PATH} from "../helpers/pathHelper";

class Header extends Component {
    state = {
        
    };

    render() {
        return (
            <div>
                <NavLink to={HOME_PATH}>Home Page</NavLink>
                <NavLink to={GAME_PATH}>Game Page</NavLink>
                <NavLink to={SETTINGS_PATH}>Settings Page</NavLink>
                <hr/>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;