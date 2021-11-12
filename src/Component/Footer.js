import React from 'react'
import facebook from '../Images/facebook.ico';

export default function Footer() {
    return (
        <div className=" container-fluid my-3 bg-dark text-white">
        <div className="row d-flex justify-content-center">
             <div className="col-md-5  mr-3 align-items-end">
                 <p className="text-white"><b>P.O. Box 9111</b></p>
                 <p className="text-white"><b>Missoula, MT</b></p>
                 <p className="text-white"><b>59807</b></p>
             </div>
           
             <div className=" col-md-5">
                 <p className="text-white"><b><u>Tel</u></b></p>
                 <p className="text-light  ">4<b>06-239-4375</b></p>
             </div>
             <div  className=" col-md-5">
                 <a  target="_blank" href="https://www.facebook.com/ghettogypsybus/"><img src={facebook} alt="facebook"/></a>
              </div>
             
             </div>
     </div>
    )
}
