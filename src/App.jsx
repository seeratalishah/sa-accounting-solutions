// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import OurApproachPage from "./pages/our-approach-page";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-approach" element={<OurApproachPage />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
  );
};

export default App;
