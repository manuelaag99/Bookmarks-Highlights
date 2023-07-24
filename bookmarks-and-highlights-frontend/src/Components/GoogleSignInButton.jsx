import React, { useEffect } from 'react';

export default function GoogleSignInButton ({ onSignIn }) {
  useEffect(() => {
    // Load the Google Sign-In API
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
      });
    });
  }, []);

  const onSignIn = () => {
    // Sign in with Google when the button is clicked
    const auth2 = gapi.auth2.getAuthInstance();

    auth2.signIn().then((googleUser) => {
      const idToken = googleUser.getAuthResponse().id_token;
      // Send 'idToken' to your backend for verification
      console.log(idToken);
    });
  };

  return (
    <button onClick={onSignIn}>Sign in with Google</button>
  );
};