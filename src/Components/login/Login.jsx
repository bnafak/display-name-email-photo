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
    <div className="w-11/12 mx-auto ">
      <button onClick={handleGoogleSignIn}>Login</button>
      <div className="mx-auto">
        {user && (
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={user?.photoURL} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-center">{user?.displayName}</h2>
              <p className="text-center">{user?.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
