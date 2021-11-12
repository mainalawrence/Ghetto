import React,{useEffect, useState} from 'react'
import Dj from "../Images/Dj.webp"
import Tshirt1 from "../Images/T-shirt1.jpg"
import Tshirt2 from "../Images/T-shirt2.png"
import Tshirt3 from "../Images/T-shirt3.jpg"
import Tshirt4 from "../Images/T-shirt4.jpg"

const Item=({HandleCart,image,price,name,id})=>{
    return(
        <div class="col-md-3 mb-4  mb-md-0">
            <div class="card  p-4  hover-shadow shadow">
                <img src={image} alt={name+id} style={{width:'100%',height:'auto'}}/>
                <h5>{name}</h5>
                <h4>Price:${price}</h4>
                <input type="submit" onClick={()=>{
                   HandleCart({"name":name,"price":price,"id":id,"amount":1,"cost":price})
                }} className="btn btn-success" value="Add to Cart"/>
           </div>
        </div>
    )
}
const Data=[
{
id:1,
name:"T-Shirt",
price:300,
image:Tshirt1
},
{
    id:2,
    name:"Short",
    price:500,
    image:Tshirt2
},
{
        id:3,
        name:"Hood",
        price:800,
        image:Tshirt3
},
        {
            id:4,
            name:"Jamper",
            price:300,
            image:Tshirt4
            },


]
export default function Products({HandleCart}) {
    const [Products, setProducts] = useState([])
    useEffect(() => {
        setProducts(Data);
    })
    return (
        <div className="container my-4 ">
            <div class="row">
                   {
                      Products.map((item)=>{     
                          return(<Item HandleCart={HandleCart} key={item.id} price={item.price} name={item.name} id={item.id} image={item.image}/>)
                      }) 
                    
                   }
            </div>
       
            
        </div>
    )
}
