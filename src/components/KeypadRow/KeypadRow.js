import React, { Component } from 'react';

class KeypadRow extends Component {
    render() {
        return (
            <div className='KeypadRow'>
                {this.props.children}
            </div>
        );
    }
}
export default KeypadRow;