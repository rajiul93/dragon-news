import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../Shared/Navbar";
const Registration = () => {
    const {createUser,user} = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget)
    const name = form.get("name")
    const email = form.get("email")
    const image = form.get("image")
    const password = form.get("password")
    console.log(name, email,password, image);

    createUser(email,password)
    .then(result => {
        const user = result.user;
        updateProfile(user, {
            displayName: "Jane Q. User", photoURL: image
          })
        console.log(user);
    })
    .catch(e=>console.log(e.message))
  };
  console.log(user);
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen ">
        <div className="hero-content ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                  name="image"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
                <p className="text-xs mt-4 ">
                  If you have Account go{" "}
                  <Link to="/login" className="font-bold">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
