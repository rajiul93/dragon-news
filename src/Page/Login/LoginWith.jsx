import { FaGithub, FaGoogle } from "react-icons/fa6";
const LoginWith = () => {

    return (
        <div>
            <h1 className="font-bold text-xl mb-4">Login With</h1>
            <div className="space-y-2">
            <button className="btn btn-outline w-full"><FaGoogle /> Google</button>
            <button className="btn btn-outline w-full btn-info"><FaGithub /> Github</button>
            </div>
        </div>
    );
};

export default LoginWith;