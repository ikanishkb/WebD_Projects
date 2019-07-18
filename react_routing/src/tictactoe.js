import React, { Component } from 'react'

class tictactoe extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentplayer:"X",
            board: ["?","?","?","?","?","?","?","?","?"]
        }
    }

    handleClick = (index)=>{
        if(this.state.board[index] == "?"){
            var oldval = this.state.board;
            var current = this.state.currentplayer;
            console.log(index);
            console.log(this.state.currentplayer);
            oldval[index] = current;
            this.setState({
                currentplayer:(this.state.currentplayer==="X"?"O":"X"),
                board:oldval
            });
            this.won();
        }
        else{
            return false;
        }
    }

    won = () => {
        let board = this.state.board;
        if(board[0] === "X" && board[1] === "X" && board[2] === "X"){
            alert("Player X won")
        }
        if(board[3] === "X" && board[4] === "X" && board[5] === "X"){
            alert("Player X won")
        }
        if(board[6] === "X" && board[7] === "X" && board[8] === "X"){
            alert("Player X won")
        }
        if(board[0] === "X" && board[3] === "X" && board[6] === "X"){
            alert("Player X won")
        }
        if(board[1] === "X" && board[4] === "X" && board[7] === "X"){
            alert("Player X won")
        }
        if(board[2] === "X" && board[5] === "X" && board[8] === "X"){
            alert("Player X won")
        }
        if(board[0] === "X" && board[4] === "X" && board[8] === "X"){
            alert("Player X won")
        }
        if(board[2] === "X" && board[4] === "X" && board[6] === "X"){
            alert("Player X won")
        }
        if(board[0] === "O" && board[1] === "O" && board[2] === "O"){
            alert("Player O won")
        }
        if(board[3] === "O" && board[4] === "O" && board[5] === "O"){
            alert("Player O won")
        }
        if(board[6] === "O" && board[7] === "O" && board[8] === "O"){
            alert("Player O won")
        }
        if(board[0] === "O" && board[3] === "O" && board[6] === "O"){
            alert("Player O won")
        }
        if(board[1] === "O" && board[4] === "O" && board[7] === "O"){
            alert("Player O won")
        }
        if(board[2] === "O" && board[5] === "O" && board[8] === "O"){
            alert("Player O won")
        }
        if(board[0] === "O" && board[4] === "O" && board[8] === "O"){
            alert("Player O won")
        }
        if(board[2] === "O" && board[4] === "O" && board[6] === "O"){
            alert("Player O won")
        }
    }

    render() {
        return (
            <div>
                <h1>Tic Tac Toe Game</h1>
                <br/>
                <br/>
                <button onClick={()=> {this.handleClick(0)}}>{this.state.board[0]}</button>
                <button onClick={()=> {this.handleClick(1)}}>{this.state.board[1]}</button>
                <button onClick={()=> {this.handleClick(2)}}>{this.state.board[2]}</button>
                <br/>
                <button onClick={()=> {this.handleClick(3)}}>{this.state.board[3]}</button>
                <button onClick={()=> {this.handleClick(4)}}>{this.state.board[4]}</button>
                <button onClick={()=> {this.handleClick(5)}}>{this.state.board[5]}</button>
                <br/>   
                <button onClick={()=> {this.handleClick(6)}}>{this.state.board[6]}</button>
                <button onClick={()=> {this.handleClick(7)}}>{this.state.board[7]}</button>
                <button onClick={()=> {this.handleClick(8)}}>{this.state.board[8]}</button>
            </div>
        );
    }
}

export default tictactoe;   