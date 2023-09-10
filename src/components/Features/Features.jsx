import React from 'react'
import "./Features.css";
import {Profile, Reminders, Share} from '../../assets/'



const Features = () => {
  return (
    
    <section>
        <h2>Your Pet's Care Companion.</h2>
        <div className="feature-grid">   

        <div className="feature"> 
            <img src={Reminders} alt="reminders" />        
            <p>Set Reminders</p>
        </div>

        <div className="feature"> 
            <img src={Profile} alt="pet profiles"/>        
            <p>Create Pet Profiles</p>
        </div>

        <div className="feature"> 
            <img src={Share} alt="share"/> 
            <p>Share With Friends</p>
        </div>

        </div>
    </section>
  )
}

export default Features


