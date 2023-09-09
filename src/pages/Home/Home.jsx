import React from 'react';
import "./Home.css";
import {Wave} from '../../assets/'


const Home = () => {
  return (
    <>
    <header>
    <div className="header-img__container">
      <img alt="wave" className="header-img" src={Wave} />
    </div>

    <div className="header-information">
      <h1>Loyal</h1>
      <p>Are you a devoted pet parent looking for a seamless way to manage your furry friend's life? Look no further than Loyal, the ultimate pet web app designed to simplify every aspect of pet care. Loyal is your one-stop solution for organizing all your pet's vital information, ensuring their well-being, and streamlining your pet parenting journey.</p>
      <button>Get Started </button>
    </div>
    </header>
    

    <h2>Your Pet's Care Companion.</h2>
    <div className="feature-grid">
      <div className="feature"> 
        <span>Create Custom Pet Profiles</span>
      </div>
      <div className="feature"> 
        <span>Set Important Reminders</span>
      </div>
      <div className="feature"> 
        <span>Share With Friends</span>
      </div>
    </div>
    </>
  )
}

export default Home