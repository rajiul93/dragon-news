import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

const gitLogin =()=>{
  return signInWithPopup(auth, gitProvider)
}

  const googleLogin =()=>{
    return signInWithPopup(auth, googleProvider)
  }

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
 

  const logIn = (email, password)=>{
    return signInWithEmailAndPassword(auth , email, password)
  }
const logOut =()=>{
    return signOut(auth)
}


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
      setLoader(false);
    });
    return ()=>{
        unSubscribe()
      }
  }, [auth]);

  const authInfo = {
    gitLogin,
    googleLogin,
    createUser,
    logIn,
    logOut,
    loader,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = { 
  children: PropTypes.node
}