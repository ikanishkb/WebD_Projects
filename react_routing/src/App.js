import React, { Component } from 'react'
import Tictactoe from './tictactoe';
import Calculator from './calculator';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <Tictactoe/> */}
                <Calculator/>
            </div>
        )
    }
}