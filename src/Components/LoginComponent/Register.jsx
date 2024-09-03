import React ,{Component} from "react";
import './style.css'
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

class Register extends Component {
    constructor() {
        super()
        this.state= {
            hasAccount:true,

        }
    }
    toggleHasAccount = ()=>{
        this.setState({hasAccount:!this.state.hasAccount})
    }

    
    render () {
        {/**very important , pass the method as a prop , to dynamically change value from signup and login */}
          {/**never type comments right after return , becomes unreachable code */}
        return (
          (this.state.hasAccount)?(<Login toggleHasAccount={this.toggleHasAccount}/>):(<Signup toggleHasAccount={this.toggleHasAccount}/>)
          
        )
    }
}
export default Register