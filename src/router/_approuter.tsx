import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/homepage";
import Upload from "../components/upload";
import Navbar from "../components/navbar";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
};

export default AppRouter;
