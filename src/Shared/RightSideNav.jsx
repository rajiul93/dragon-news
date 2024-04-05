import LoginWith from "../Page/Login/LoginWith";
import FindUsOn from "./FindUsOn";
import QZone from "./QZone";


const RightSideNav = () => {
    return (
        <div className="">
            <LoginWith/>
            <FindUsOn/>
            <QZone/>
        </div>
    );
};

export default RightSideNav;