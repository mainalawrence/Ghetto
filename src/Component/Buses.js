import React from 'react'
import './buses.css'
import Logo from '../Images/Gettologo.webp'
import GGypsy from '../Images/GGypsy.webp'
import bluelight from '../Images/bluelight.webp'
import partyscene from '../Images/partyscene.webp'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import BusLoungeBlue from '../Images/BusLoungeBlue.webp'
import RopeDancer from '../Images/RopeDance.webp'
import HumanZoo from '../Images/HumanZoo.webp'
import Shinney from '../Images/shinney.webp'

import Dj from '../Images/Dj.webp'
import RedRounge from '../Images/RedRounge.webp'
import ShineFestival from '../Images/ShineFestival.webp'
import PiratePartyScene from '../Images/PiratePartyScene.webp'
import SkyblueLounge from '../Images/Skybluelounge.webp'
import Procenium from '../Images/Procenium.webp'
import Lightboard from '../Images/Lightboard.webp'
import SideShoot from '../Images/SideShoot.webp'
import SunRise from '../Images/SunRise.webp'
export default function Buses() {
    
const slideImages = [
    {
      url:GGypsy,
      caption: 'All decked out for Burning Man.',
      title:"The Getto Gypsy"
    },
    {
      url: bluelight,
      caption: 'Dancing and laughing at party 2014',
      title:"Blue light Special"
    },
    {
      url: partyscene,
      caption: 'The Getto Gypsy can Handle a crowd',
      title:"The Part scene"
    }, 
     {
      url: BusLoungeBlue,
      title:"Bus Lounge Blue"
    },
    {
        url: RopeDancer,
        title:"Bus Lounge Blue",
        caption:'A perfomer Swing from the Ropes Inside the Bus'
      },
      {
        url: HumanZoo,
        title:"Human Zoo",
        caption:'A Good look at the lightboard in action ,beaming Human Zoo onto a crowd at Shine'
      },
      {
        url: Shinney,
        title:"ooo shiny",
        caption:'The light Board illuminating the night at Neon City 2014'
      },
      {
        url: Dj,
        title:"Dj Party",
        caption:'Ready to Dance?'
      },
       {
        url: RedRounge,
        title:"Red Rounge",
        caption:'People partying it up deep into the night at Pirate party'
      }, 
       {
        url: ShineFestival,
        title:"Shine Festival",
        caption:'Teamed up with Elevation productions to rock a large crowd at shine 2012'
      },  
      {
        url: Procenium,
        title:"Procenium",
        caption:'The stage inside the bus can be elegabt and tasteful for the right occasion'
      },
      {
        url: PiratePartyScene,
        title:"Pirate Party Scene",
        caption:''
      }, 
      {
        url: SkyblueLounge,
        title:"Skyblue Lounge",
        caption:'The interior is lit with 16 million color RGB LEDs, capable of creating a variety of moods'
      },
        {
        url: Lightboard,
        title:"Lightboard",
        caption:'Custom designed and painted by Missoula artists,our 30 foot RGB LED light board gets Bright at night'
      },
        {
        url: SideShoot,
        title:"Side Shoot",
        caption:'Parked at caras Park for Hempfest 2013'
      }, 
      {
        url: SunRise,
        title:"Sun Rise",
        caption:'A closer view of the rising painted on the back wall of the bus'
      },
  ];
    return (
        <div className="slide-container container p-3">
        <Slide>
        {slideImages.map((slideImage, index)=> (
           <div style={{}} className="each-slide" key={index}>
             <div style={{'backgroundImage': `url(${slideImage})`}} className="img-">
                 <img src={slideImage.url} alt={slideImage.title}/>
                <div>   
                <h6>{slideImage.title}</h6>
               <span>{slideImage.caption}</span>
               </div>
             </div>
           </div>
         ))} 
       </Slide>
       </div>
    )
  
}
 