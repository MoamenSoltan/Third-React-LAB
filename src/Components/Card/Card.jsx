import React from "react"; 
import './style.css'
import { products } from "../../ProductData";
import Counter from "../Counter/Counter";

function Card () {
    return(
        <div className="cards">
           {

               products.map((x,idx)=>(
                <div className="card" key={x.id}>
                    <h5>{x.id}</h5>
                    <img src={x.img} alt="product image" width="70%" />
                    <h5>{x.name}</h5>
                    <h5>{x.price}</h5>
                    <p>{x.description}</p>
                    <h5>{x.category}</h5>
                    
                    <Counter/>
                    
                </div>
               ))



           }
        </div>
    )
}
export default Card