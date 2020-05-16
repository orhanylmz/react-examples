import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FooterButton from "./FooterButton";

import {Button, Segment, Form, Input} from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css";
import "./../css/form.css"

class GamePageUser extends Component {
    state = {
        name: "",
        surname: "",
        loading: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = () => {
        this.setState({
            loading: true
        })
        this.props.nextStep(this.state);
    }

    render() {
        const {name, surname, loading} = this.state;
        const enableButton = name && surname;

        return (
            <div className={"formArea"}>
                <Segment attached>
                    <Form onSubmit={this.onSubmit} loading={loading}>
                        <Form.Field>
                            <Input name={"name"} placeholder='First Name' value={name} onChange={this.onChange}/>
                        </Form.Field>
                        <Form.Field>
                            <Input name={"surname"} placeholder='Last Name' value={surname} onChange={this.onChange}/>
                        </Form.Field>
                        <Button type={"submit"} disabled={!enableButton} className={"action-button"}>Next</Button>
                    </Form>
                </Segment>
            </div>
        );
    }
};

GamePageUser.propTypes = {};

export default GamePageUser;