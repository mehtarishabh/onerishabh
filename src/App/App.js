import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import ContactUs from '../pages/ContactUs/ContactUs'
import Footer from '../ui/Footer/Footer'
import './App.scss';
import MainMenu from "../ui/MainMenu/MainMenu";

function App() {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showMainMenu && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowMainMenu(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [showMainMenu])

  return (
    <BrowserRouter>
      {!showMainMenu && <div className='App_mainMenu' onClick={() => setShowMainMenu(true)}>
        <div className='App_mainMenu_top'></div>
        <div className='App_mainMenu_bottom'></div>
      </div>}
      {showMainMenu && <div ref={wrapperRef}>
        <MainMenu closeClick={() => setShowMainMenu(false)}/>
      </div>}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<ContactUs />}></Route>
        <Route render={() => <h1>Not found</h1>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
