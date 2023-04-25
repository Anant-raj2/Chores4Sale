import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Login = () => {
  const [user, setUser] = useState({});
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  useEffect(() => {
    /* global google*/
    google.accounts.id.initialize({
      client_id:
        "386716839775-0qep8cemua3mia1gh4l899ncr5co478n.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <div id="signInDiv"></div>
      {user && (
        <div>
          <h2>{user.email}</h2>
          <h3>{user.name}</h3>
        </div>
      )}
    </>
  );
};

export default Login;
