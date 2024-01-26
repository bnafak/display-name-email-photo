import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Providers/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    //console.log('Google is comming')
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google Login</button>
      <div className="mx-auto">
        {user && (
          <div>
            <h2> Name : {user?.displayName}</h2>
            <h2> Name : {user?.email}</h2>
            <img src={user?.photoURL} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
