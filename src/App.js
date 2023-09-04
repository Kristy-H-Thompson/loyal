import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login, Nav, Register, Reset } from './components/'
import {About, Dashboard, Reviews, Pricing } from './pages/'




function App() {
  return (
    <Router >
    <div className="App">
    <Nav />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/pricing" element={<Pricing />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
