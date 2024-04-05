import moment from "moment/moment";
import logo from "../assets/logo.png";
const Header = () => {
    return (
        <div className="text-center flex justify-center">
           <div className="space-y-2 mt-4">
           <img  src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p className="font-semibold">
           {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
           </p>
           </div>
       
        </div>
    );
};

export default Header;