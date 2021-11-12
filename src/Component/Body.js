import React from 'react'
import "../App.css"
import bushome from '../Images/comfort-bus.webp';
export default function Body() {
    return (
        <div className="container my-5 mb-5 py-5 ">

            <div class="row">
                    <div class="col-md-6 mb-4 mb-md-0">
                        <h2><b>WELCOME!</b></h2>
                        <p>Want a Ride?</p>
                        <p><i>
                        Get ready for some psychedelic funk. You are invited 
                        to experience the finest mobile entertainment on planet Earth. 
                        Enjoy a trip on the living legend, <b>Missoula's own Ghetto Gypsy</b>.
                        </i></p>
                        <div>
                        <div  className=" btn btn-danger">
                            <h4 text-white>
                            CALL US NOW AT <br/>
                            406-239-4375<br/>
                            TO BOOK<br/>
                            </h4>
                        </div>
                        </div>
                    </div>
                    <div  class="col-md-6 mb-4 mb-md-0">
                        <img src={bushome} width="100%" className="image image-home-sm" alt="the bus"/>
                    </div>
            </div>

            

            
        </div>
    )
}
