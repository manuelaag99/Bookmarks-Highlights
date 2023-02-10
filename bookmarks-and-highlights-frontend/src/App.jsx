import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddBandH from "./Pages/AddBandH";
import BandHsPage from "./Pages/BandHsPage";
import ProfilePage from "./Pages/ProfilePage";
import SignInOrSignUpPage from "./Pages/SignInOrSignUpPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import UpdateBandH from "./Pages/UpdateBandH";
import ProfileSettings from "./Pages/ProfileSettings";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<SignInOrSignUpPage />}/>
          <Route path="/signin" element={<SignInPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/:userid/myprofile" element={<ProfilePage />}/>
          <Route path="/:userid/myprofile/settings" element={<ProfileSettings />}/>
          <Route path="/:userid/bandhs/labelid/:bookid" element={<BandHsPage />}/>
          <Route path="/:userid/bandhs/labelid/:bookid/update/itemid/:itemid" element={<UpdateBandH />}/>
          <Route path="/:userid/add" element={<AddBandH />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
