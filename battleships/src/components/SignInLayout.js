import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Grid, Header, Image, Message, Segment} from "semantic-ui-react";
import icon from "../media/battleship-icon.svg";

import {Link, NavLink} from "react-router-dom";

import {withFirebase} from "../firebase";
import {Field, reduxForm} from "redux-form";
import ship from "../media/ship.jpg"

import {SIGNUP} from "../helpers/pathHelper";

class SignInLayout extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <Grid style={{height: '100vh'}} className={"app"}>
                <Grid.Column style={{maxWidth: 450, marginRight:200, marginTop:100}} floated={"right"} verticalAlign={"top"}>
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

                            <Form.Group grouped>
                                <Form.Button fluid size='large' color='black' style={{opacity: "0.7"}} onClick={handleSubmit}>Sign In</Form.Button>
                                <Form.Field as={Link} to={SIGNUP}>
                                    <Form.Button fluid exact style={{opacity: "0.7"}}>Sign Up</Form.Button>
                                </Form.Field>
                            </Form.Group>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
};

SignInLayout.propTypes = {};

export default reduxForm({
    form: "signIn"
})(withFirebase(SignInLayout));