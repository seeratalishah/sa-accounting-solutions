// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import OurApproachPage from "./pages/our-approach-page";
import ContactPage from "./pages/contact-page";
import SolutionsPage from "./pages/solutions-page";
import CloudBKPage from "./pages/cloud-bk-page";
import PayrollServicesPage from "./pages/payroll-services-page";
import CFOServicesPage from "./pages/cfo-services-page";
import CorporateReturnsPage from "./pages/corporate-returns-page";
import PersonalReturnsPage from "./pages/personal-returns-page";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-approach" element={<OurApproachPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/cloud-bookkeeping" element={<CloudBKPage />} />
          <Route path="/payroll-services" element={<PayrollServicesPage />} />
          <Route path="/CFO-services" element={<CFOServicesPage />} />
          <Route path="/corporate-returns" element={<CorporateReturnsPage />} />
          <Route path="/personal-returns" element={<PersonalReturnsPage />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
  );
};

export default App;
