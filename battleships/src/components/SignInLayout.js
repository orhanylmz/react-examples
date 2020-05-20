import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Grid, Header, Image, Message, Segment} from "semantic-ui-react";
import icon from "../media/battleship-icon.svg";

import {withFirebase} from "../firebase";
import {Field, reduxForm} from "redux-form";

import {SIGNUP} from "../helpers/pathHelper";

class SignInLayout extends Component {
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

                            <Button color='teal' fluid size='large' content={"Sign In"}/>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href={SIGNUP}>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
};

SignInLayout.propTypes = {};

export default reduxForm({
    form: "signIn"
})(withFirebase(SignInLayout));