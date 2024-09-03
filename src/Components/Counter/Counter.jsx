import React, {Component} from "react";
import './style.css'

class Counter extends Component {
    
    constructor () {
        super()
        this.state = {
            count:1
        }
    }

    handlePlus =()=> {
        this.setState(
            {
                count : this.state.count +1
            }
        )
    }

    handleMinus =()=> {
       if(this.state.count>1)
       {
        this.setState(
            {count : this.state.count -1}
        )
       }
    }

    render () {
        return (
            <div className="counter">
                <button onClick={this.handleMinus}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}
export default Counter