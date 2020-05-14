import React, {Component} from 'react';
import PropTypes from 'prop-types';

import "../css/list.css"
import GamePage from "./pages/GamePage";

class Games extends Component {
    state = {
        filterText: ''
    }

    handleFilterTextInput = (filterText) => {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <div>
                <h1>Games</h1>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextInput={this.handleFilterTextInput}
                />
                <GameTable
                    games={this.props.games}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}

const GameRow = props =>
        <tr>
            <td>{props.game.name} {props.game.surname}</td>
            <td>{props.game.id}</td>
        </tr>
;

class GameTable extends Component {
    render() {
        var rows = [];
        this.props.games && this.props.games.forEach((game) => {
            if (game.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            rows.push(<GameRow game={game}/>);
        });
        return (
            <table className={"table"}>
                <thead>
                <tr>
                    <th>Name Surname</th>
                    <th>Game</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    handleFilterTextInputChange = (e) => {
        this.props.onFilterTextInput(e.target.value);
    }

    render() {
        return (
            <form>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange}
                />
            </form>
        );
    }
}

Games.propTypes = {};

export default Games;