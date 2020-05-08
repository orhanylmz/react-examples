import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/gameBoard.css';

class SettingsBoard extends Component {
    state = {
        clickable: false,
        board: [],
        admiral: {},
        kreuzers: [],
        destroyers: [],
        boats: []
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            ...nextProps.settings
        })
    }

    render() {
        console.log(this.state);
        const {board} = this.state;
        return (
            <div className={"gameBoard"}>
                {
                    board.map(line => line.map(
                        value =>
                            <div key={Math.random()} className={"ship-item"} onClick={this.props.onClickSettingsBoard}>{value.moveOrder}</div>
                    ))
                }
            </div>
        );
    }
};

SettingsBoard.propTypes = {
};

export default SettingsBoard;