import React from 'react'
import { Step } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

const Stepper = props => (
    <Step.Group ordered widths={3}>
        <Step completed={props.step > 1} active={props.step === 1}>
            <Step.Content>
                <Step.Title>Initial Game</Step.Title>
                <Step.Description>Enter Ships For Game</Step.Description>
            </Step.Content>
        </Step>

        <Step completed={props.step > 2} active={props.step === 2}>
            <Step.Content>
                <Step.Title>Select Game</Step.Title>
                <Step.Description>Create Or Join Game</Step.Description>
            </Step.Content>
        </Step>

        <Step completed={props.step > 3} active={props.step === 3}>
            <Step.Content>
                <Step.Title>Play</Step.Title>
            </Step.Content>
        </Step>
    </Step.Group>
)

export default Stepper