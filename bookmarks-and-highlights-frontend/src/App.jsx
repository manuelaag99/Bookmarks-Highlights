import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthContext } from "./context/auth-context";

import AddBandH from "./Pages/AddBandH";
import BandHsPage from "./Pages/BandHsPage";
import ProfilePage from "./Pages/ProfilePage";
import SignInOrSignUpPage from "./Pages/SignInOrSignUpPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import UpdateBandH from "./Pages/UpdateBandH";
import ProfileSettings from "./Pages/ProfileSettings";

export default function App () {
  const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false)

  const logIn = React.useCallback(() => {
    setIsUserLoggedIn(() => true)
  }, [])

  const logOut = React.useCallback(() => {
    setIsUserLoggedIn(() => false)
  }, [])

  return (
    <>
      <AuthContext.Provider value={{isLoggedIn: isUserLoggedIn, login: logIn, logout: logOut}}>
        <Router>
          <Routes>
            <Route path="/*" element={<SignInOrSignUpPage />}/>
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
      </AuthContext.Provider>
    </>
  )
}