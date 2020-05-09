import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setShips} from "../../actions/settings";

import SettingsBoard from '../SettingsBoard';
import GameStatusBoard from "../GameStatusBoard";

import {EMPTY} from "../../helpers/classHelper";
import {createBoard} from "../../helpers/boardHelper";

class SettingsPage extends Component {
    state = {
        clickable: false,
        board: [],
        admiral: {},
        kreuzers: [],
        destroyers: [],
        boats: [],
        selected: null
    };

    componentDidMount() {
        //this.props.initialSettingsBoard();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            ...nextProps.settings
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state !== nextState;
    }

    render() {
        return (
            <div>
                <SettingsBoard
                    panel={this.props.settings.panel}
                    admiral={this.props.settings.admiral}
                    kreuzers={this.props.settings.kreuzers}
                    destroyers={this.props.settings.destroyers}
                    boats={this.props.settings.boats}
                    setShips={this.props.setShips}
                />
            </div>
        );
    }
}

SettingsPage.propTypes = {};

const mapStateToProps = ({settings}) => {
    return {
        settings
    }
}

const mapDispatchToProps = {
    setShips
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);