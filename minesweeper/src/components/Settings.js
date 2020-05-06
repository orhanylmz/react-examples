import React, {Component} from 'react';
import {Button, Image, Form, Message} from 'semantic-ui-react'
import PropTypes from 'prop-types';

class Settings extends Component {
    state = {
        x: 10,
        y: 10,
        bombCount: 10
    };

    componentDidMount() {
        this.setState({
            ...this.props.settings
        })
    }


    onChangeHandle = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        console.log(this.state);
        this.props.setSettings(this.state);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field error={!this.state.x}>
                        <label>X</label>
                        <input
                            id={"x"}
                            name={"x"}
                            value={this.state.x}
                            onChange={this.onChangeHandle}
                            placeholder='X'/>
                    </Form.Field>
                    <Form.Field error={!this.state.y}>
                        <label>Y</label>
                        <input
                            id={"y"}
                            name={"y"}
                            value={this.state.y}
                            onChange={this.onChangeHandle}
                            placeholder='Y'/>
                    </Form.Field>
                    <Form.Field error={!this.state.bombCount}>
                        <label>Bomb Count</label>
                        <input
                            id={"bombCount"}
                            name={"bombCount"}
                            value={this.state.bombCount}
                            onChange={this.onChangeHandle}
                            placeholder='Bomb Count'/>
                    </Form.Field>
                    <Button type={"submit"}>Submit</Button>
                </Form>
            </div>
        );
    }
}

Settings.propTypes = {};

export default Settings;