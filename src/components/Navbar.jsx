/// external modules ///
import React, { useState } from 'react';

/// internal modules ///
import { useDarkMode } from '../hooks/useDarkMode';

/***************************************
  COMPONENT
***************************************/
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode (false);

  const toggleMode = e => {
    e.preventDefault ();
    setDarkMode (!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

/**************************************/
export default Navbar;
