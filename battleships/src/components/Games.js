import React, {Component} from 'react';
import PropTypes from 'prop-types';

import "../css/list.css"

import {Table} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

class Games extends Component {
    render() {
        return (
            <div>
                <GameTable handleGameSelected={this.props.handleGameSelected}
                           selectedGameId={this.props.selectedGameId}
                           games={this.props.games}
                />
            </div>
        );
    }
}

const GameTable = props =>
    <Table called={"true"} selectable>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Game</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {
                props.games && props.games.map((game) =>
                    <Table.Row
                        key={game.id}
                        active={props.selectedGameId === game.id}
                        onClick={() => props.handleGameSelected(game)}>
                        <Table.Cell>{game.player1.name} {game.player1.surname}</Table.Cell>
                        <Table.Cell>{game.id}</Table.Cell>
                    </Table.Row>
                )
            }
        </Table.Body>
    </Table>;

Games.propTypes = {};

export default Games;