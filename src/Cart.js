import React from 'react'
import "./Component/cart.css"
import { PayPalScriptProvider, PayPalButtons ,BraintreePayPalButtons } from "@paypal/react-paypal-js";

 const Cart=({count,TotalCost,Data,HandleCartView,HandleCartRemoval,HandleCartUpdateAdd,HandleCartUpdatedel})=> {
    return (
        <div className="Container-view">
          <input className="btn btn-danger float-btn" style={{borderRadius:'100%',width:'5%'}} value="X" onClick={()=>HandleCartView()}/>
           <div className="card bg-light container p-4 mt-4">
                    <div className="row">
                      <div className="card bg-light col-md-8">
                        <table>
                          <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Del</th>
                            <th>Amount</th>
                            <th>Add</th>
                            <th>Total Cost</th>
                          </tr>
                        { Data.map(item=>{
                          return(
                            <>
                            <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><input type="button" onClick={()=>HandleCartUpdatedel(item.id)} className="btn btn-warning" value="-"/></td>
                            <td>{item.amount}</td>
                            <td><input type="button" onClick={()=>HandleCartUpdateAdd(item.id)} className="btn btn-success" value="+"/></td>
                            <td>{item.cost}</td>
                            <td><input type="button" onClick={()=>HandleCartRemoval(item.id)} className="btn btn-danger" value="X"/></td>
  
                          </tr>
                            </>
                        )   })
                        }
                        </table>
  
                      </div>
                        <div className="card col-md-4" style={{height:'500px'}}>
                          <h6>Number Of Items</h6>
                          <h6>{count}</h6>
                          <h6>Total Cost</h6>
                          <h6>{TotalCost}</h6>
                            <div>
                            <PayPalScriptProvider options={{ "client-id": "test"}}>
                            <PayPalButtons
                                style={{ layout: "horizontal" }}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value:{TotalCost},
                                                },
                   },
               ],
           });
       }}
   />
                            </PayPalScriptProvider>
                            </div>
                            
                        </div>
                      </div>
           </div>
        </div>
    )
  }
  export default Cart;