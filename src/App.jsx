import React from "react";
import { Routes, Route } from "react-router-dom"; // <-- Add this import
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Assuming you have these components created
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  );
}
