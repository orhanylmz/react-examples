import React from 'react';
import {Container, Image, List, Segment} from "semantic-ui-react";
import icon from "../media/battleship-icon-white.svg";
import {withAuthorization} from "./session";

const Footer = props => {
    return (
        <div>
            <Segment inverted vertical>
                <Container textAlign='center' style={{height: '7vh'}}>
                    <Image src={icon} centered size='mini'/>
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        </div>
    );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(authUser => true)(Footer);


