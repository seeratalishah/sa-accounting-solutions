// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import OurApproachPage from "./pages/our-approach-page";
import FutureAccounting from "./pages/accounting-future";
import ContactPage from "./pages/contact-page";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-approach" element={<OurApproachPage />} />
          <Route path="/future-of-accounting" element={<FutureAccounting />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
  );
};

export default App;
