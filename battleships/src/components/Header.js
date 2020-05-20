import React, {Component} from 'react';
import {Container, Image, Menu, Dropdown} from "semantic-ui-react";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import {Link, NavLink} from "react-router-dom";

import icon from "../media/battleship-icon.svg";

import {HOME, GAME} from "../helpers/pathHelper";

import {withFirebase} from "../firebase";

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    }

    render() {
        const {menuFixed} = this.state;
        const {onSignOut} = this.props;
        const {displayName} = this.props.firebase.auth.currentUser;

        return (
            <Menu
                borderless
                fixed={menuFixed ? 'top' : undefined}
                style={menuFixed ? fixedMenuStyle : menuStyle}
            >
                <Container fluid={true} style={{height: '7vh'}}>
                    <Menu.Item as={Link} to={HOME} exact>
                        <Image size='mini' src={icon}/>
                        <Menu.Item header>BattleShip</Menu.Item>
                    </Menu.Item>
                    <Menu.Item as={NavLink} to={GAME} exact>
                        Game
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Dropdown text={displayName} pointing className='link item'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Account Settings</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={onSignOut}>Sign Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Container>
            </Menu>
        );
    }
}

Header.propTypes = {};

export default withFirebase(Header);
