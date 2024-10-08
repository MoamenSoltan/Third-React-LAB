import React ,{Component} from "react";
import './../style.css'
import Details from "../Details/Details";
class Login extends Component {
    constructor() {
        super()
        this.state= {
            submit:false,
            user:'',
            password :'',
            timeStamp:null/**default value of null not '' */

        }
    }

    handleUserChange=(event)=>{
        this.setState({user:event.target.value})
    }

    handlePasswordChange=(event)=>{
        this.setState({password:event.target.value})
    }

    handleSubmitLogIn=(event)=>{
        event.preventDefault()
        this.setState({submit:true,
            timeStamp:new Date().toLocaleString()/**a new date object ,like const time=new Date() ,tolocalestring is for formatting ,  */
        })/**change submit value */
    }

    
    
    
    render () {
        if(this.state.submit) {/**conditional rendering using if else here and not ternary operator */
            return (
                <Details user={this.state.user} pass={this.state.password} time={this.state.timeStamp} />
                          /**to pass functions or states to child components , use props */

            )
        }
        return (
          <div className="register">
            <form onSubmit={this.handleSubmitLogIn}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" name="userName" id="userName" value={this.state.user} onChange={this.handleUserChange}/>
                </div>

                <div>
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.handlePasswordChange}/>

                </div>

                <button type="submit">Submit</button>
            </form>
            <button className="signUp" onClick={this.props.toggleHasAccount} >Don't have an account?</button>{/**invoke function in props to dynamically change value */}
        </div>
        )
    }
}
export default Login