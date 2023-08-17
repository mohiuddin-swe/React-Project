import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ByCategorypage from "./Pages/ByCategorypage";
import DetailsPage from "./Pages/DetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/byCategory/:categoryID" element={<ByCategorypage />} />
        <Route path="/details/:detailsID" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
