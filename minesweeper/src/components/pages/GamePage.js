import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import Board from '../Board';
import {loadBoard, onClick} from "../../actions/board";

class GamePage extends Component {
    render() {
        return (
            <div>
                <Board loadBoard={this.props.loadBoard} onClick={this.props.onClick} board={this.props.board} settings={this.props.settings}/>
            </div>
        );
    }
}

GamePage.propTypes = {};

const mapStateToProps = ({board, settings}) => {
    return {
        board,
        settings
    };
}

const mapDispatchToProps = {
    loadBoard,
    onClick
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);