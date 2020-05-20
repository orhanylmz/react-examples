import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withFirebase} from "../../firebase";
import SignUpLayout from "../SignUpLayout";
import {HOME} from "../../helpers/pathHelper";

class SignUpPage extends Component {
    onSubmit = () => {
        const {email, password, firstName, lastName} = this.props.values;
        this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                // this.props.firebase
                //     .user(authUser.user.uid)
                //     .set({
                //         displayName: firstName + " " + lastName,
                //         firstName,
                //         lastName,
                //         photoURL: "https://example.com/jane-q-user/profile.jpg"
                //     })
                //     .then(() => {
                //         this.props.history.push(HOME);
                //     })
                //     .catch(error => {
                //         this.setState({error});
                //     });
                this.props.firebase.auth.currentUser.updateProfile({
                            displayName: firstName + " " + lastName,
                            photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                        this.props.history.push(HOME);
                    })
                    .catch(error => {
                        this.setState({error});
                    });
            })
            .catch(error => {
                this.setState({error});
            });
    }

    render() {
        return (
            <SignUpLayout onSubmit={this.onSubmit}/>
        );
    }
};

SignUpPage.propTypes = {};

const mapStateToProps = state => {
    return state.form.signUp
        ? {
            values: state.form.signUp.values,
            submitSucceeded: state.form.signUp.submitSucceeded
        }
        : {};
};

export default connect(mapStateToProps)(withFirebase(SignUpPage));