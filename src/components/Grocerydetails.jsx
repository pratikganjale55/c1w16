import React from "react"
import data from '../data.json'
import CartButton from "./CartButton"


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */
             data.map(item => {
                return (
                <>
                <div>
                <img src = {item.imgURL}/>
                <p>{item.title}</p>
                <p>{item.mrp}</p>
                <button>Add to card</button>
               <p>Pratik Ganjale</p>

                </div>
                
                </>
                )
            })
            }
           
        </div>
        </>
    )
}
export default GroceryDetails
