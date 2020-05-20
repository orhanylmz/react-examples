import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withFirebase} from "../../firebase";
import SignInLayout from "../SignInLayout";
import {GAME, HOME} from "../../helpers/pathHelper";
import {withRouter} from 'react-router-dom';


class SignInPage extends Component {
    onSubmit = () => {
        console.log(this.props)
        const {email, password} = this.props.values;
        this.props.firebase.doSignInWithEmailAndPassword(email, password)
            .then(() => this.props.history.push(HOME))
            .catch(error => console.log(error.message));
    }

    render() {
        return (
            <SignInLayout onSubmit={this.onSubmit}/>
        );
    }
};

SignInPage.propTypes = {};

const mapStateToProps = state => {
    return state.form.signIn
        ? {
            values: state.form.signIn.values,
            submitSucceeded: state.form.signIn.submitSucceeded
        }
        : {};
};

export default connect(mapStateToProps)(withFirebase(SignInPage));