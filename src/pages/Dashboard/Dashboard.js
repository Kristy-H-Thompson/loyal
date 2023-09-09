import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../../firebase.js";
import { collection, onSnapshot } from "firebase/firestore"; // Added getDocs
import {Animal } from '../../components/'



function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [pets, setPets] = useState([]); // Initialize as an empty array

  const navigate = useNavigate();

  const fetchPets = () => {
    try {
      onSnapshot(collection(db, "pets"), (snapshot) => {
        // Log the data directly here
        console.log(snapshot.docs.map((doc) => doc.data()));
        setPets(snapshot.docs.map((doc) => doc.data()));
      });
    } catch (err) {
      console.log(err);
      alert("An error occurred while fetching pet data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    console.log(user);
    fetchPets(); // Call fetchPets inside useEffect
  }, [loading, user, navigate]); // Specify dependencies for useEffect

  return (
    <>
      <div className="dashboard">
        <section className="dashboard-aside">
          <h2>{user?.displayName}</h2>
          <img
            alt="User profile"
            src="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODM1fHxkb2clMjBvdXRzaWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          ></img>
          <p>{user?.email}</p>
          <br />

          <h3>Account Information</h3>
          <ul>
            <li>View member profile</li>
            <li>Edit member profile</li>
            <li>Account status</li>
          </ul>
        </section>

        <section className="dashboard-animals">
          <div className="util-buttons">
            <button className="dashboard__btn">Add new pet</button>
            <button className="dashboard__btn" onClick={logout}>
              Logout
            </button>
          </div>

          {pets.map((pet,index)=>{
         return (
         <Animal petName={pet.petName} petImage={pet.petImage} />
         )
     })}
     
        </section>
 </div>
    </>
  );
}

export default Dashboard;





