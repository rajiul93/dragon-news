import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../Shared/Header";
import Navbar from "../../Shared/Navbar";
import RightSideNav from "../../Shared/RightSideNav";

const NewsDetails = () => {
  const { id } = useParams();
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);

  const displayData = allNews?.find((sData) => id == sData._id);
  const categories = allNews?.filter(
    (sData) => sData.category_id == displayData?.category_id
  );

  // const {title,thumbnail_url,details,total_view,_id} = displayData;
  // category_id
  console.log(categories);
  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-3">
          <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
              <img
                src="https://source.unsplash.com/random/480x360"
                alt=""
                className="w-full h-60 sm:h-96 dark:bg-gray-500"
              />
              <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                <div className="space-y-2">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-block text-2xl font-semibold sm:text-3xl"
                    data-abc="true"
                  >
                    {displayData?.title}
                  </a>
                  <p className="text-xs dark:text-gray-600">
                    Total View : {displayData?.total_view}
                  </p>
                </div>
                <div className="dark:text-gray-800">
                  <p>{displayData?.details}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* category data start */}

            {categories.map((item) => {
              return (
                <div
                  key={item._id}
                  className="max-w-xs rounded-md shadow-md  bg-gray-50  text-gray-800"
                >
                  <img
                    src={item.thumbnail_url}
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                  />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    <h2 className="text-xs font-semibold tracking-wide">
                      {item.title}
                    </h2>

                  <Link to={`/news-details/${item._id}`}>  <button
                      type="button"
                      className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                    >
                      Read more
                    </button></Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
