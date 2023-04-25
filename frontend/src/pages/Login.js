import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { createClient } from '@supabase/supabase-js'

const Login = () => {
  const supabaseUrl = 'https://nakokxtvynhsbxlxpzwx.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ha29reHR2eW5oc2J4bHhwend4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0NDA0MTksImV4cCI6MTk5ODAxNjQxOX0.Xci4_R1rqxh5pydTVXt8hhkZQb6e3QmYx6PdShpGJ1A'
  const supabase = createClient(supabaseUrl, supabaseKey)

  async function addUser(name, email){
    
    const { data, error } = await supabase
    .from('users')
    .insert([
      { name: name },
      { email: email },
    ])

  }
  const [user, setUser] = useState({});
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject.name);
    addUser(userObject.name, userObject.email)
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
