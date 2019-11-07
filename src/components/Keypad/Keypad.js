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
                    <Button type='primary'>C</Button>
                    <Button type='primary'>&larr;</Button>
                    <Button type='operator'>%</Button>
                    <Button type='operator'>/</Button>
                </KeypadRow>

                {/* row 2 */}
                <KeypadRow>
                    <Button type='secondary'>7</Button>
                    <Button type='secondary'>8</Button>
                    <Button type='secondary'>9</Button>
                    <Button type='operator'>*</Button>
                </KeypadRow>

                {/* row 3 */}
                <KeypadRow>
                    <Button type='secondary'>4</Button>
                    <Button type='secondary'>5</Button>
                    <Button type='secondary'>6</Button>
                    <Button type='operator'>-</Button>

                </KeypadRow>

                {/* row 4 */}
                <KeypadRow>
                    <Button type='secondary'>1</Button>
                    <Button type='secondary'>2</Button>
                    <Button type='secondary'>3</Button>
                    <Button type='operator'>+</Button>

                </KeypadRow>

                {/* row 5 */}
                <KeypadRow>
                    <Button type='secondary'>0</Button>
                    <Button type='secondary'>.</Button>
                    <Button type='large'>=</Button>

                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;