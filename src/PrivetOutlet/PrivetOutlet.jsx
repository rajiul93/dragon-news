import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetOutlet = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
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
  return <Navigate to="/login" />;
};

export default PrivetOutlet;
