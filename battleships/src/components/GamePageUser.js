import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FooterButton from "./FooterButton";

import {Button, Container, Form} from 'semantic-ui-react'

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
                <Form onSubmit={this.onSubmit} loading={loading}>
                    <Form.Field>
                        <input name={"name"} placeholder='First Name' value={name} onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field>
                        <input name={"surname"} placeholder='Last Name' value={surname} onChange={this.onChange}/>
                    </Form.Field>
                    <Button type='submit' disabled={!enableButton} className={"action-button"}>Submit</Button>
                </Form>
            </div>
        );
    }
};

GamePageUser.propTypes = {};

export default GamePageUser;