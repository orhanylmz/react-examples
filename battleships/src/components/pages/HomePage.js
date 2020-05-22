import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {withAuthorization, withAuthentication} from "../session"

class HomePage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        );
    }
};

HomePage.propTypes = {

};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(authCondition)(HomePage);
