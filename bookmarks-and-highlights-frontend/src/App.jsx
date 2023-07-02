import React, { useCallback, useEffect, useState } from "react";
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

let logOutTimer;

export default function App () {
  const [ token, setToken ] = useState(false);
  const [ tokenExpiration, setTokenExpiration ] = useState(null);
  const [ userId, setUserId ] = useState(false);

  const logIn = useCallback((uId, token, expirationDate) => {
    setUserId(uId);
    setToken((token));
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60)
    setTokenExpiration(tokenExpirationDate);
    localStorage.setItem("userData", JSON.stringify({ userId: uId, token: token, expiration: tokenExpirationDate.toISOString() }));
  }, []);

  const logOut = useCallback(() => {
    setToken(null);
    setTokenExpiration(null);
    setUserId(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (token && tokenExpiration) {
      const remainingTime = tokenExpiration.getTime() - new Date().getTime();
      logOutTimer = setTimeout(logOut, remainingTime);
    } else {
      clearTimeout(logOutTimer);
    }
  }, [token, logOut, tokenExpiration])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token && (new Date(storedData.expiration) > new Date())) {
      logIn(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [logIn]);

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