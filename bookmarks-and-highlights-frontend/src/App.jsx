import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BandHsPage from "./Pages/BandHsPage";
import ProfilePage from "./Pages/ProfilePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/myprofile" element={<ProfilePage />}/>
        <Route path="/bandhs" element={<BandHsPage />}/>
        <Route path="/signin" element={<SignInPage />}/>
        <Route path="/signup" element={<SignUpPage />}/>
      </Routes>
    </Router>
  )
}

export default App
