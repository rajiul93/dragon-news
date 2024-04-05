import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../Shared/Navbar";

const Login = () => {
const {logIn}= useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault(); 
        const form = new FormData(e.currentTarget) 
        const email = form.get("email") 
        const password = form.get("password")
        logIn(email,password)
        .then()
        .catch()
      };
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen w-full">
        <div className="hero-content ">
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email{name}</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <p className="text-xs mt-4 ">If you have No account : <Link to="/registration"className="font-bold">Registration</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
