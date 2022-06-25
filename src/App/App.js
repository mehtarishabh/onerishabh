import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from '../ui/Footer/Footer'
import './App.scss';
import MainMenu from "../ui/MainMenu/MainMenu";

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const ContactUs = lazy(() => import('../pages/ContactUs/ContactUs'));
const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={renderLoader()}>
          <MainMenu />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<ContactUs />}></Route>
            <Route render={() => <h1>Not found</h1>}></Route>
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
