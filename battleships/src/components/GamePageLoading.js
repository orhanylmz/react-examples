import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FooterButton from "./FooterButton";

class GamePageLoading extends Component {
    state = {
        done: true
    }

    render() {
        const {done} = this.state;

        return (
            <div>
                <FooterButton
                    onClick={this.props.nextStep}
                    disabled={!done}
                    value={"Start Game"}
                />
            </div>
        );
    }
};

GamePageLoading.propTypes = {};

export default GamePageLoading;