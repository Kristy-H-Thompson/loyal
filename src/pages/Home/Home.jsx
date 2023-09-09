import React from 'react';
import "./Home.css";
import {Wave} from '../../assets/'


const Home = () => {
  return (
    <>
    <header>
    <div>
      <img alt="wave" src={Wave} />
    </div>

    <div>
      <h1>Loyal</h1>
    </div>
    </header>
    

    <h2>Your pet</h2>
    </>
  )
}

export default Home