import React from 'react'
import "./Information.css";
import { InformationOne, InformationTwo} from '../../assets/'



const Information = () => {
  return (
    <section>
        <h2>What Can You Do On Loyal?</h2>
        <div className="information">


            <div>
                <img alt="dog" src={InformationTwo} />
            </div>            
            
            
            <div className="info">
                <h3>Comprehensive Pet Profiles</h3>
                <ul>
                    <li>Upload Images</li>
                    <li>Store Vet Records</li>
                    <li>Print or Share Pet Information</li>
                    <li>Print or Share Pet Information</li>
                    <li>Print or Share Pet Information</li>
                    <li>Print or Share Pet Information</li>

                </ul>
            </div>

        </div>
    </section>
  )
}

export default Information