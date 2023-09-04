import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../../firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";




function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  });
  return (
    <>
    <div className="dashboard">
      <section className="dashboard-aside">
      <img alt="User profile" src="https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODM1fHxkb2clMjBvdXRzaWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"></img>
      <h2>{name}</h2>
      <span>{user?.email}</span><br/>
      <button className="dashboard__btn" onClick={logout}>
          Logout
      </button>
      
      <h3>Account Information</h3>
      <ul>
        <li>View member profile</li>
        <li>Edit member profile</li>
        <li>Account status</li>
      </ul>
      </section>

      <section className="dashboard-animals">
        
       <div className="animal__container">
        Logged in as
        
       </div>

       <div className="animal__container">
        Logged in as
        
       </div>

       <div className="animal__container">
        Logged in as
        
       </div>

       <div className="animal__container">
        Logged in as
        
       </div>


     </section>     
     
    </div>

     </>
  );
}
export default Dashboard;