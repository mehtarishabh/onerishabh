import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';

import './MainMenu.scss';

function MainMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showMenu && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowMenu(false);
        inputRef.current.click();
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [showMenu])

  return (
      <div ref={wrapperRef}>
        <label htmlFor="check">
          <input type="checkbox" id="check" ref={inputRef} 
            onClick={() => setShowMenu(!showMenu)} /> 
          <span></span>
          <span></span>
          <span></span>
        </label>
      {showMenu && <div className='MainMenu'>
        <div className='MainMenu_empty'></div>
        <NavLink to="/" className="MainMenu_items" onClick={() => { setShowMenu(false); inputRef.current.click(); }}>Home</NavLink>
        <NavLink to="/projects" className="MainMenu_items" onClick={() => { setShowMenu(false); inputRef.current.click(); }}>Projects</NavLink>
        <NavLink to="/contact" className="MainMenu_items" onClick={() => { setShowMenu(false); inputRef.current.click(); }}>Contact</NavLink>
        <NavLink to="/about" className="MainMenu_items" onClick={() => { setShowMenu(false); inputRef.current.click(); }}>About</NavLink>
      </div>}
    </div>
  );
}

export default MainMenu;
