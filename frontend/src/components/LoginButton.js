import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const LoginButton = () => {
  <GoogleOAuthProvider clientId="271986087308-ihmhermkbg0h7lm6tqggn0opmqrmisif.apps.googleusercontent.com">
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  </GoogleOAuthProvider>;
};

export default LoginButton;
