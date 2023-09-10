import "./Reviews.css";

import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase.js";
import { collection, onSnapshot } from "firebase/firestore"; // Added getDocs
import { useAuthState } from "react-firebase-hooks/auth";




const Reviews = () => {

    const [reviews, setReviews] = useState([]); // Initialize as an empty array


    const fetchReviews = () => {
        try {
          onSnapshot(collection(db, "reviews"), (snapshot) => {
            // Log the data directly here
            console.log(snapshot.docs.map((doc) => doc.data()));
            setReviews(snapshot.docs.map((doc) => doc.data()));
          });
        } catch (err) {
          console.log(err);
          alert("An error occurred while fetching pet data");
        }
      };
    
      useEffect(() => {
        fetchReviews(); // Call fetchPets inside useEffect
      }, []); // Specify dependencies for useEffect

      

  return (
    <>
    <h2>What People Are Saying About Loyal</h2>
    <section id="slider">  
    <input checked="" type="radio" name="slider" id="slide1" />
    <input type="radio" name="slider" id="slide2" />
    <input type="radio" name="slider" id="slide3" />
    <input type="radio" name="slider" id="slide4" />
    <input type="radio" name="slider" id="slide5" />
  
    <div id="slides">
      <div id="overflow">
        <div className="inner">
          <div className="slide slide_1">
            <div className="flex">


            {reviews.map((reviews,index)=>{
             return (

              <div>
                <img src={reviews.image} width="52" alt="" className="round__img" />
                <div>
                  <div className="flex">
                    <div className="flex"><span className="user__name">{reviews.name}</span><img
                        src="https://try.miraclebrand.co/laundry/images/check-testimonials.svg" width="16" height="16" alt="" /></div>
                    <span className="user__location">{reviews.location}</span>
                  </div>
                  <img src="https://try.miraclebrand.co/laundry/images/rating-stars.svg" className="stars" />
                  <p className="review_txt">
                    {reviews.review}
                  </p>
                </div>
              </div>

                )
            })}

  
  
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div id="controls">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
      <label for="slide5"></label>
    </div>
  
    <div id="bullets">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
      <label for="slide5"></label>
    </div>
  </section>
  </>
  )
}

export default Reviews