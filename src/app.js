
import React, { useState } from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialFacebook } from 'reactjs-social-login';

function App() {

  const [profile, setProfile] = useState(null);
  return (

    <div className="App">
      {!profile ? ( <LoginSocialFacebook
        appId="1206951963663186"
        onResolve={(response) => {
          console.log(response);
          setProfile(response.data);

        }}
        onReject={(error) => {
          console.log(error);

        }}
      >
        <FacebookLoginButton />

      </LoginSocialFacebook>): (" ") }
      {profile ? ( <div>
        <h1>{profile.name}</h1>
        <img src={profile.picture.data.url} alt='pic' />
      </div> ): (" ")}
        

    </div>
  );
}

export default App;
