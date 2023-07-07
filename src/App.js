import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import Albums from "./Albums";
import Photos from "./Photos";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
};

export default App;
