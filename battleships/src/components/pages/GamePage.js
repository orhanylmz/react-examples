import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import GameBoard from "../GameBoard";

import {initialGame, setClickable, nextMoveOrder ,addMoveList, removeMoveList, setOtherBoard} from "../../actions/game";

class GamePage extends Component {
    state = {};

    componentDidMount() {
        this.props.initialGame();
    }

    render() {
        return (
            <GameBoard
                game={this.props.game}
                initialGame={this.props.initialGame}
                setClickable={this.props.setClickable}
                nextMoveOrder={this.props.nextMoveOrder}
                addMoveList={this.props.addMoveList}
                removeMoveList={this.props.removeMoveList}
                setOtherBoard={this.props.setOtherBoard}
            />
        );
    }
}

GamePage.propTypes = {};

const mapStateToProps = ({game}) => {
    return {
        game
    }
}

const mapDispatchToProps = {
    initialGame,
    setClickable,
    nextMoveOrder,
    addMoveList,
    removeMoveList,
    setOtherBoard
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);