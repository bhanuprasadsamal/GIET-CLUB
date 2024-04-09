import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Club from './components/Club';
import About from './components/About';
import ShowNavbars from './components/shownavbars/shownavbars';
import Footer from './components/Footer';
import ContactPage from './components/Contact';
import JoinClubPage from './components/Joinclub';
import EventList from './components/Event';
import AdminPage from './components/AdminPage';
function App() {
  const [userName, setUserName] = useState(null); // State to store user name

  // Function to set user name, can be called after user logs in or signs up
  const handleSetUserName = (name) => {
    setUserName(name);
  };

  return (
    <div className="App">
      <Router>
        <ShowNavbars>
          <Navbar userName={userName} />
        </ShowNavbars>
        <Routes>
          <Route path="/" element={<Login setUserName={handleSetUserName} />} />
          <Route path="/signup" element={<Signup setUserName={handleSetUserName} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/club" element={<Club />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/joinclub" element={<JoinClubPage />} />
          <Route path="/event" element={<EventList />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
