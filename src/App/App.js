import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from '../ui/Footer/Footer'
import './App.scss';
import MainMenu from "../ui/MainMenu/MainMenu";
import { Seo } from "../components/Seo/Seo";

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const ContactUs = lazy(() => import('../pages/ContactUs/ContactUs'));
const renderLoader = () => <p>Loading</p>;

function NotFound() {
  return (
    <main className="container" style={{ padding: "120px 24px" }}>
      <Seo title="Page not found" noindex />
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={renderLoader()}>
          <MainMenu />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
