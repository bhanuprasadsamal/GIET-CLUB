import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ShowNavbars({ children }) {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(false)
  useEffect(() => {
    console.log("Current location:", location);
    if (location.pathname === '/' || location.pathname === '/signup'){
        setShowNavBar(false)
    }else{
        setShowNavBar(true)
    }
  }, [location]);

  return (
    <div>{showNavBar && children}</div>
  );
}

export default ShowNavbars;
