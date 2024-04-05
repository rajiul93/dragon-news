import { FaFacebookF, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
const FindUsOn = () => {
    return (
        <div className='mt-8'>
            <h1 className="font-bold text-xl mb-4">Find Us On</h1>
            <div className="">

<div className="flex items-center gap-3  p-3 border rounded-t-2xl hover:bg-gray-200 cursor-pointer"><FaFacebookF className="text-2xl text-blue-700" /> Facebook</div>
<div className="flex items-center gap-3 p-3  border border-b-0 border-t-0   hover:bg-gray-200 cursor-pointer "><FaSquareXTwitter className="text-2xl text-blue-500" /> Twitter</div>
<div className="flex items-center gap-3 p-3 border rounded-b-2xl hover:bg-gray-200 cursor-pointer"> <FaInstagram className="text-2xl text-orange-600" /> Instagram</div>


            </div>
            
        </div>
    );
};

export default FindUsOn;