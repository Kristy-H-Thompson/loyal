import React from 'react'
import { email, download, edit } from "../../assets";
import "./animal.css";


const animal = (props) => {
  return (
    <div className="animal__container">
    <div className="quick-buttons">
      <img className="quick-button" alt="edit" src={edit} />
      <img className="quick-button" alt="email" src={email} />
      <img className="quick-button" alt="download" src={download} />
    </div>

    <div>
      <img
        alt={props.petName}
        className="pet-photo"
        src={props.petImage}
      ></img>
    </div>

    <div className="pet-reminders">
      <h3>{props.petName}</h3>
      <ul>
        <li>vet appointment one January 2nd</li>
        <li>grooming appointment one February 3rd</li>
        <li>playdate with Doggo on March 1st</li>
      </ul>
    </div>
  </div>
  )
}

export default animal