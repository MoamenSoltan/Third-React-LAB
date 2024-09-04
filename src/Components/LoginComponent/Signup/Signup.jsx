import React ,{Component} from "react";
import './../style.css'
import Details from "../Details/Details";

class Signup extends Component {
    constructor() {
        super()
        this.state= {
            submit:false,
            user:'',
            password :'',
            email:'',
            timeStamp:null
        }
    }

    handleUserChange=(event)=>{
        this.setState({user:event.target.value})
    }

    handlePasswordChange=(event)=>{
        this.setState({password:event.target.value})
    }

    

    handleSubmitSignUp=(event)=>{
        event.preventDefault()
       this.setState({submit:true,
        timeStamp:new Date().toLocaleString()
       })
    }
    handleEmailChange=(event)=>{
        this.setState({email:event.target.value})
    }
   
    render () {
        if(this.state.submit){
            return (
                <Details user={this.state.user} pass={this.state.password} email={this.state.email} time={this.state.timeStamp}/>
                          /**to pass functions or states to child components , use props */

            )
        }
        return (
          <div className="register">
            <form onSubmit={this.handleSubmitSignUp}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" name="userName" id="userName" value={this.state.user} onChange={this.handleUserChange}/>
                </div>
                <div>
                    
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange}/>

                </div>

                <div>
                    
                    <label htmlFor="email">Confirm email</label>
                    <input type="text" name="email" id="email"  />

                </div>

                <div>
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.handlePasswordChange}/>

                </div>

                <button type="submit">Submit</button>
            </form>
            <button className="signUp" onClick={this.props.toggleHasAccount} >Already have an account?</button>{/**invoke function in parent component to dynamically change value */}
        </div>)
        
    }
}
export default Signup