import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {initialSettingsBoard, setShips, move} from "../../actions/settings";

import SettingsBoard from '../SettingsBoard';
import GameStatusBoard from "../GameStatusBoard";

import {findClassName, EMPTY} from "../../helpers/classHelper";

class SettingsPage extends Component {
    state = {
        admiral: false,
        kreuzer: false,
        destroyer: false,
        boat: false,
        loaded: false
    };

    componentDidMount() {
        this.props.initialSettingsBoard();
    }

    onClickStatusBoard = ({admiral, kreuzer, destroyer, boat}) => e => {
        if (this.state.loaded){
            return;
        }
        this.setState({
            admiral,
            kreuzer,
            destroyer,
            boat,
            loaded: true
        });
        e.target.className = EMPTY;
    }

    onClickSettingsBoard =  e => {
        if (! this.state.loaded) {
            return;
        }
        e.target.className = findClassName(this.state);
        this.setState({
            loaded: false
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props !== nextProps;
    }

    render() {
        return (
            <div>
                <SettingsBoard
                    settings={this.props.settings}
                    setShips={this.props.setShips}
                    onClickSettingsBoard={this.onClickSettingsBoard}
                />
                <GameStatusBoard onClickStatusBoard={this.onClickStatusBoard}/>
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
    initialSettingsBoard,
    setShips,
    move,
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);