import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Grid, Header, Image, Message, Segment} from "semantic-ui-react";
import icon from "../media/battleship-icon.svg";
import { Field, reduxForm } from "redux-form";

import {withFirebase} from "../firebase";
import {SIGNUP} from "../helpers/pathHelper";

class SignUpLayout extends Component {
    render() {
        const { handleSubmit, reset } = this.props;

        return (
            <Grid style={{height: '100vh'}} className={"app"}>
                <Grid.Column style={{maxWidth: 450, marginRight:200, marginTop:100}} floated={"right"} verticalAlign={"top"} stretched={true}>
                    <Header as={Image} size={"massive"} image={icon} />
                    <Form size='large'>
                        <Segment style={{backgroundColor: "transparent"}}>
                            <Field
                                component={Form.Input}
                                name="email"
                                placeholder="E-mail address"
                                icon='user'
                                iconPosition='left'
                            />

                            <Field
                                component={Form.Input}
                                name="password"
                                placeholder="Password"
                                icon='lock'
                                iconPosition='left'
                                type={"password"}
                            />

                            <Field
                                component={Form.Input}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                icon='lock'
                                iconPosition='left'
                                type={"password"}
                            />

                            <Field
                                component={Form.Input}
                                name="firstName"
                                placeholder="First Name"
                            />

                            <Field
                                component={Form.Input}
                                name="lastName"
                                placeholder="Last Name"
                            />

                            <Form.Group grouped>
                                <Form.Button fluid size='large' color='black' style={{opacity: "0.7"}} onClick={handleSubmit}>Sign Up</Form.Button>
                                <Form.Button fluid onClick={reset} size='large' style={{opacity: "0.7"}}>Reset</Form.Button>
                            </Form.Group>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
};

SignUpLayout.propTypes = {};

export default reduxForm({
    form: "signUp"
})(withFirebase(SignUpLayout));
