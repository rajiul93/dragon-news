import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetOutlet = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location =  useLocation()
  if (loader) {
    return (
      <div className="h-screen w-full flex justify-center align-middle items-center">
        <span className="loading text-4xl loading-spinner text-error"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivetOutlet;
