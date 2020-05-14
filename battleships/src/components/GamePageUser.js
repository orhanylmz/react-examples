import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FooterButton from "./FooterButton";

import '../css/form.css'

class GamePageUser extends Component {
    state = {
        name: "",
        surname: "",
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = () => {
        this.props.nextStep(this.state);
    }


    render() {
        return (
            <div>
                <form className={"formArea"} onSubmit={this.onSubmit}>
                    <input name={"name"} id={"name"} onChange={this.onChange} value={this.state.name}
                           placeholder={"Enter Name"}/>
                    <br/>
                    <input name={"surname"} id={"surname"} onChange={this.onChange} value={this.state.surname}
                           placeholder={"Enter Surname"}/>
                    <br/>
                    <FooterButton
                        disabled={this.state.name.length <= 0 || this.state.surname.length <= 0}
                        value={"Next"}
                    />
                </form>

            </div>
        );
    }
};

GamePageUser.propTypes = {};

export default GamePageUser;