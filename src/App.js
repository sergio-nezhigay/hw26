import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList/UserList";
import Albums from "./Albums/Albums";
import Photos from "./Photos/Photos";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/albums/:userId" element={<Albums />} />
        <Route path="/photos/:albumId" element={<Photos />} />
      </Routes>
    </Router>
  );
}
