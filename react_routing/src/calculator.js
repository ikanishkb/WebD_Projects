import React, { Component } from 'react'
import Display from './display';
const buttons = ["9","8","7","6","5","4","3","2","1","0","-","+","*","/","="];

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state={
            displayvalue:""
        }
    }

    changeDisplay = (val)=>{
        let oldValue = this.state.displayvalue;
        if(val == "="){
            var newValue = eval(oldValue);
        }
        else{
            var newValue = oldValue + val;
        }
        this.setState({displayvalue: newValue})
    }

    render() {
        return (
            <div>
                <Display value={this.state.displayvalue}/>
                {buttons.map((data,index) =>{
                    return(
                        <span>{
                            index%3==0?<br/>:null
                        }
                        <button onClick={()=> {this.changeDisplay(data)}} >{data}</button>
                        </span>
                    )
                })
            }
            </div>
        )
    }
}

export default Calculator;