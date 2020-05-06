import React, {Component} from 'react';
import {Container, Image, Menu} from "semantic-ui-react";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import {Link, NavLink} from "react-router-dom";

import {HOME_PATH, GAME_PATH, SETTING_PATH} from "../helpers/pathHelper";

import {GAME_LOGO} from '../helpers/logoHelper';

class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: false,
    }

    render() {
        const {menuFixed} = this.state

        return (
            <div>
                <Menu
                    borderless
                    fixed={menuFixed ? 'top' : undefined}
                    style={menuFixed ? fixedMenuStyle : menuStyle}
                >
                    <Container text>
                        <Menu.Item as={Link} to={HOME_PATH} exact={"true"}>
                            <Image size='mini' src={GAME_LOGO}/>
                            <Menu.Item header>MineSweeper</Menu.Item>
                        </Menu.Item>
                        <Menu.Item as={NavLink} to={GAME_PATH} exact>
                            Game
                        </Menu.Item>
                        <Menu.Item as={NavLink} to={SETTING_PATH} exact>
                            Settings
                        </Menu.Item>
                    </Container>
                </Menu>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;