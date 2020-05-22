import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';

import AuthUserContext from './context';
import {withFirebase} from '../../firebase';
import {HOME, SIGNIN, SIGNUP} from "../../helpers/pathHelper";

const withAuthorization = displayCondition => forwardCondition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!forwardCondition(authUser)) {
                        this.props.history.push(SIGNIN);
                    }
                }
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {
                        authUser =>
                            displayCondition(authUser)
                                ? (<Component {...this.props}/>)
                                : null
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return compose(
        withRouter,
        withFirebase,
    )(WithAuthorization);
};

export default withAuthorization;