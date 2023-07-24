export default function getGoogleUrl () {
    const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
  
    const options = {
      redirect_uri: import.meta.REACT_APP_GOOGLE_OAUTH_REDIRECT as string,
      client_id: import.meta.REACT_APP_GOOGLE_OAUTH_CLIENT_ID as string,
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ].join(' '),
      state: from,
    };
  
    const qs = new URLSearchParams(options);
  
    return `${rootUrl}?${qs.toString()}`;
};