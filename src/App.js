import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
     
      <Router>
      <div className="NavBar"><Navbar /></div>
        <Routes>
          
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
