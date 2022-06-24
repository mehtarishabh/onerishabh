import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from '../ui/Footer/Footer'
import './App.scss';
import MainMenu from "../ui/MainMenu/MainMenu";

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const ContactUs = lazy(() => import('../pages/ContactUs/ContactUs'));
const renderLoader = () => <p>Loading</p>;

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
      <Suspense fallback={renderLoader()}>
        {!showMainMenu && <div className='App_mainMenu' onClick={() => setShowMainMenu(true)}>
          <div className='App_mainMenuIcon_top'></div>
          <div className='App_mainMenuIcon_bottom'></div>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
