import React from "react";
import './style.css'

function Details ({user,pass,email}) {
    return(
        <div className="details">
               
                    <h1>the entered values are :</h1>
                    <h2>User Name is : {user}</h2>
                    <h2>password is : {pass}</h2>
                    {email && <h2>email is :{email}</h2>}{/**if email is available (short circuit) */}
                
        </div>
    )
}
export default Details