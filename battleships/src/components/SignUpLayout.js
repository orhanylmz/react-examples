import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Grid, Header, Image, Message, Segment} from "semantic-ui-react";
import icon from "../media/battleship-icon.svg";
import { Field, reduxForm } from "redux-form";

import {withFirebase} from "../firebase";

class SignUpLayout extends Component {
    render() {
        const { handleSubmit, reset } = this.props;

        return (
            <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as={Image} size={"massive"} image={icon} />
                    <Form size='large' onSubmit={handleSubmit}>
                        <Segment stacked>
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
                                <Form.Button primary fluid size='large' color='teal'>Sign Up</Form.Button>
                                <Form.Button onClick={reset} fluid size='large'>Reset</Form.Button>
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
