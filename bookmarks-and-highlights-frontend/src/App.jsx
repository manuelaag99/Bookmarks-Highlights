import React, { useCallback, useContext, useState } from "react";
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
  const [ token, setToken ] = useState(false);
  const [ userId, setUserId ] = useState(false);

  const logIn = useCallback((uId, token) => {
    setUserId(uId);
    setToken((token));
    localStorage.setItem("userData", JSON.stringify({ userId: Id, token: token }));
  }, []);

  const logOut = useCallback(() => {
    setUserId(null);
    setToken(null);
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      logIn(storedData.userId, storedData.token);
    }
  })

  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn: token, token: token, userId: userId, login: logIn, logout: logOut }}>
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