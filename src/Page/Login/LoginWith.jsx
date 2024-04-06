import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";
const LoginWith = () => {
  const { user,googleLogin,gitLogin } = useContext(AuthContext);
  const logByGit = () => {
    if (user) {
      return toast.info("You Already Logged");
    } else {
        gitLogin()
        .then(result =>{
            console.log(result);
        })
        .catch(e=>console.log(e.message))
    }
  };
  const logByGoogle = () => {
    if (user) {
      return toast.info("You Already Logged");
    } else {
        googleLogin()
        .then(result =>{
            console.log(result);
        })
        .catch(e=>console.log(e.message))
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="font-bold text-xl mb-4">Login With</h1>
      <div className="space-y-2">
        <button onClick={logByGoogle} className="btn btn-outline w-full">
          <FaGoogle /> Google
        </button>
        <button className="btn btn-outline w-full btn-info" onClick={logByGit}>
          <FaGithub /> Github
        </button>
      </div>
    </div>
  );
};

export default LoginWith;
