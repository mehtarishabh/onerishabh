import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home/Home'
import Gallery from '../pages/Gallery/Gallery'
import Hire from '../pages/Hire/Hire'
import CreateYours from '../pages/CreateYours/CreateYours'
import Footer from '../ui/Footer/Footer'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/hire-me" element={<Hire />} />
        <Route exact path="/create-yours" element={<CreateYours />} />
        <Route render={() => <h1>Not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
