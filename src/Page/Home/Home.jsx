import BreakingNews from "../../Shared/BreakingNews";
import CategoryNav from "../../Shared/CategoryNav";
import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";
import RightSideNav from "../../Shared/RightSideNav";
// import NewsContainer from "./News/NewsContainer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <Header />
      <BreakingNews/>
      <Navbar />


<div className="grid grid-cols-1 md:grid-cols-4 mt-4 gap-6 ">
    <div  className=" md:col-span-1  max-h-screen overflow-y-auto">
{/*left side  */}
<h1 className="font-bold text-xl ">All Category</h1>
<h1 className="btn my-4">National News</h1>
<CategoryNav/>
    </div>
    <div style={{scrollbarWidth: "none"}} className=" md:col-span-2 max-h-screen overflow-y-auto ">
{/* center */}
<h1 className="btn mb-8">Dragon News Home</h1>
{/* <NewsContainer/> */}
<Outlet/>
    </div>
    <div className=" md:col-span-1 max-h-screen overflow-y-auto" style={{scrollbarWidth: "none"}}>
{/* end */} 
<RightSideNav/>

    </div>
</div>


    </div>
  );
};

export default Home;
