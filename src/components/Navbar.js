import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import images from './images/a1.jpeg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const [isDayMode, setIsDayMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    if (
      trimmedQuery === "gdsc" ||
      trimmedQuery === "gdsc club"
    ) {
      // If the search query matches "GDSC" or "GDSC club", redirect to the GDSC club
      navigate("/club");
    } else if (
      trimmedQuery === "music" ||
      trimmedQuery === "music club"
    ) {
      // If the search query matches "Music" or "Music club", redirect to the music club
      navigate("/club");
    } else if (
      trimmedQuery === "event" ||
      trimmedQuery === "event club"
    ) {
      // If the search query matches "Event" or "Event club", redirect to the event club
      navigate("/club");
    } else if (
      trimmedQuery === "english" ||
      trimmedQuery === "english club"
    ) {
      // If the search query matches "English" or "English club", redirect to the English club
      navigate("/club");
    } else {
      // If the search query does not match any club, show a message
      alert("Club not found");
    }
  };
  

  const toggleMode = () => {
    setIsDayMode(prevMode => !prevMode);
    // You can add additional logic to change theme, background, etc. based on the mode
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDayMode ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <span style={{ color: 'red' }}>GIETU CLUB</span>
          <img src={images} alt="Logo" className="logo" style={{ width: 'auto', height: '30px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/club">Club</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/joinclub">Joinclub</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/event">Events</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>
              Search
            </button>
          </form>
          <div className="navbar-nav">
            <div className="nav-item">
              <button onClick={toggleMode} className="btn btn-outline-primary ms-2">
                {isDayMode ? 'Night' : 'Day'}
              </button>
            </div>
            <div className="nav-item">
              <Link to="/" className="btn btn-outline-danger ms-2">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
