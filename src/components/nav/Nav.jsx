import React from 'react'
import "./Nav.css";
import {logo}  from '../../assets/index.js'
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <nav>
      <Link to="/"><img alt="logo" src={logo} /></Link>
    <ul>
      <Link to="/about" className="info">About</Link>
      <Link to="/review" className="info">Reviews</Link>
      <Link to="/pricing" className="info">Pricing</Link>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>

    </ul>
    </nav>

  <Outlet />
  </>
  )
}

export default Nav