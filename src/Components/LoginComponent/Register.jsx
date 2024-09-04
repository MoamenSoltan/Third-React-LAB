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
          (this.state.hasAccount)?(<Login toggleHasAccount={this.toggleHasAccount}/>):(<Signup toggleHasAccount={this.toggleHasAccount}/>)/**function is passed to child component */
          /**when do i want to change the hasAccount?when the last button is clicked in either signup or login , in an onClick event , invoke this function by using this.props.toggleHasAccount in signup or login */
          /**to pass functions or states to child components , use props */
        )
    }
}
export default Register