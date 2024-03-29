import React, { Component } from 'react';
import './Keypad.css'
import KeypadRow from '../KeypadRow/KeypadRow';
import Button from '../Button/Button';

class Keypad extends Component {
    render() {
        return (
            <div className='Keypad'>
                {/* row 1 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>C</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>&larr;</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>%</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>/</Button>
                </KeypadRow>

                {/* row 2 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>7</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>8</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>9</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>*</Button>
                </KeypadRow>

                {/* row 3 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>4</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>5</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>6</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>-</Button>

                </KeypadRow>

                {/* row 4 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>1</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>2</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>3</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>+</Button>

                </KeypadRow>

                {/* row 5 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>0</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='secondary'>.</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='large'>=</Button>

                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;