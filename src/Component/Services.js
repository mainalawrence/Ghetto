import React from 'react'
import Vip from '../Images/Vip.webp';
import Dj from '../Images/Dj.webp';
import outDoor from '../Images/outDoor.webp';
import  '../style.css';
export default function Services() {
    return (
        <div className="container"> 
           <div className="card mt-2 p-3">
           <div class="col-12 text-center">
                        <h2 class="section-title text-dark  text-capitalize header-title ">Services</h2>
                        <p>The Ghetto Gypsy has many faces. Not only can it transform into a
                             mobile dance club, it can also be a plush, relaxing lounge with 
                             a soothing atmosphere. In addition to it's vibrant, changable interior,
                              it can also provide the backdrop for larger outdoor events. 
                              Let us help you create an experience unlike any you've had before.
                </p>
              
                 <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card hover-shadow shadow p-2">
                            
                                <h4 className="mb-4 text-danger service-title"><b>​VIP  Lounge</b></h4>
                                <img src={Vip} alt="​VIP  Lounge"/>
                                <p><b>
                                Plush cushions, exotic tapestries, paintings that change color with the room, the VIP lounge is a luxurious experience you didn't know was possible inside of a school bus.
                                <br/><br/>
                                Ideal for parties of 20 or less  <br/><br/>
                                 The VIP Lounge can be a mobile or stationary event.
                                </b></p>                              
                           
                        </div>
                        </div>

                        <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card hover-shadow shadow p-2">
                            
                                <h4 className="mb-4 text-danger service-title"><b>​DJ Dance Party</b></h4>
                                <img src={Dj} alt="​VIP  Lounge"/>
                                <p><b>
                                We bring the club to you! Complete with a live DJ, hardwood dance floor, dynamic lighting and powerful sound, get ready to move.
                                <br/><br/>
                                Ideal for parties of 24 or less <br/><br/>
                                The DJ Dance Party can be a mobile or stationary event.
                                </b></p> 
                                                         
                           
                        </div>
                        </div>

                        <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card hover-shadow shadow p-2">
                            
                                <h4 className="mb-4 text-danger service-title"><b>​Outdoor Events</b></h4>
                                <img src={outDoor} alt="​VIP  Lounge"/>
                                <p><b>
                                With a 40 foot graffiti covered school bus, 30 foot RGB LED light board, and a powerful sound system, 
                                we can rock an outdoor party inside and outdoors simultaneously.
                                 From large festivals to small private groups, we can give your event a colorful, unique sense of flair.
                                 <br/><br/>
                                </b></p>                              
                           
                        </div>
                        </div>


                        <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card hover-shadow shadow p-2">
                                <h4 className="mb-4 text-danger service-title"><b>​DJ Dance Party</b></h4>
                                <p><b>
                                The bus can be used in conjunction with festivals as a stage or shuttle. The top level is a custom 35 x 8 ft
                                hardwood deck and can be used as a DJ booth / performer stage.
                                The Gypsy can also be used to transport people between large outdoor events and nearby towns.
                                <br/>   <br/>   
                                Contact for details.
                                </b></p> 
                                <br/>                            
                           
                        </div>
                        </div>
                </div>
                    <div class="col-12 text-center">
                        <h2 class="section-title text-dark  text-capitalize header-title ">Testimonials</h2>
                    </div>
                <div class="row ">
                    
                    <div class="col-md-5 mb-4 mb-md-0">
                        <div class="card p-3 hover-shadow shadow">
                           <p>"This is the coolest bus I've ever seen."</p>
                           <br/>
                         
                           <p> "There's so much to look at!"</p>
                           <br/>
                          
                            <p>"This is the stuff of fantasies."</p>
                           <br/>

                            </div>
                    </div>
                    <div class="col-md-5 mb-4 mb-md-0">
                        <div class="card  p-3 hover-shadow shadow">
                           <p>" When you look back on your life you can say, 'I did this.' "</p>
                           <br/>
                           
                           <p>"Wow</p>
                           <br/>
                       <p>"How did you do this?"</p>
                            </div>
                    </div>

                </div>
           </div>

        </div>
    </div>
    )
}
