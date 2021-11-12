import React from 'react'
import aboutus from "../Images/about-us.webp"
export default function Aboutus() {
    return (
        <div className="container mb-4">
          <div className="card mt-2 p-4">
              
            <div class="row mt-2">
                    <div class="col-md-6 mb-4 mb-md-0">
                       
                        <img src={aboutus} width="100%" className="image image-home-sm" alt="the bus"/>
                        
                    </div>
                    <div  class="col-md-6 mb-4 mb-md-0">
                    <h1>About Us</h1>
                    <p><b>
                    The Ghetto Gypsy began as a Hamilton, MT school bus during the 1980s.<br/><br/>
​                    Years later, it fell into the hands of a talented group of Missoula artists who 
                    wanted to give it new life. Initially renovated and used as a private party vehicle in 
                    the deserts of Burning Man, the possibilities for the bus have grown.  Whether you want a
                     birthday night on the town, an outdoor graduation party, or an intimate evening of music and poetry,
                      this versatile vehicle can provide the atmosphere for a myriad of events.<br/><br/>
                    So much love and hard work has gone into the making of the Ghetto Gypsy, 
                    and the fun is just beginning. We look forward to the next unforgettable night.
                    </b></p>
                    </div>
            </div>
          </div>
        </div>
    )
}
