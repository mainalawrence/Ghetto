import React,{useEffect, useState} from 'react'
import './App.css';
import Body from './Component/Body';
import Buses from './Component/Buses';
import Contactus from './Component/Contactus';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Services from './Component/Services';
import {Switch,Route} from "react-router-dom";
import Products from './Component/Products';
import Aboutus from './Component/About-us';
import Cart  from './Cart';


function App() {

   //the following product are neeeded 
   //header
   //footer
      //Home
      //About-us
      //The Bus
      //Services
      //contacts
      //Producs->cart->login->payment->
     const [CartData, setCartData] = useState([])
     const [showCart, setshowCart] = useState(false)
     const [TotalCost, setTotalCost] = useState(0.0)
     const [count, setcount] = useState(0)

     const HandleCart=(data)=>{
      calcCost()
      if(CartData.length>=0){
       CartData.forEach(item=>{
         if(item.id !==data.id){
            setCartData([...CartData,data])
            calcCost()
            return;
         }
         else{ 
           alert("in the Cart") 
           calcCost()
           return 0;}
       })
     }
     if(CartData.length===0){
      setCartData([...CartData,data])
      calcCost()
     }
     calcCost() 
     }
     const HandleCartUpdateAdd=(id)=>{
       CartData.map(item=>{
         if(item.id==id){
           item.amount++;
           item.cost=item.price*item.amount
         
         }
       })
       calcCost()
       setCartData([...CartData])

     }
     const HandleCartUpdateDel=(id)=>{
      CartData.map(item=>{
       if(item.amount>1){
        if(item.id==id){
          item.amount--;
          item.cost=item.price*item.amount
        
        }
       }
      })
      calcCost()
      setCartData([...CartData])   
    }
     const HandleCartRemoval=(id)=>{
     let newdata= CartData.filter(item=>{return item.id!==id})

     setCartData(newdata)
     calcCost() 

    
     }
     const HandleCartView=()=>{
      setshowCart(!showCart)
      calcCost() 
     }
     const calcCost=()=>{
       let total=0
       let coun=0
      CartData.forEach(item=>{
        total+=item.cost
        coun+=item.amount
        setTotalCost(total)
        setcount(coun)
      })
     
     }
  return (
    <div className="App">
  {
    showCart ?  <Cart count={count} TotalCost={TotalCost}HandleCartUpdatedel={HandleCartUpdateDel} HandleCartUpdateAdd={HandleCartUpdateAdd} HandleCartRemoval={HandleCartRemoval} Data={CartData} HandleCartView={HandleCartView}/> :<>
    <Header HandleCartView={HandleCartView}/>
    <Switch>
    <Route exert path="/home" component={Body}/ >
    <Route exert path="/services" component={Services} />
    <Route exert path="/buses" component={Buses} />
    <Route exert path="/contact-us" component={Contactus}/ >
    <Route exert path="/Products"> 
    <Products HandleCart={HandleCart}/>
    </Route>
    <Route exert path="/about-us" component={Aboutus} />
    <Route component={Body}/>
    </Switch>
    <Footer/>
    </>
  } 
    </div>
  );
}

export default App;
