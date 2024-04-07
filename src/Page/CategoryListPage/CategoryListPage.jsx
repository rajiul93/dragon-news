import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import News from "../Home/News/News";
const CategoryListPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const filterContent = categories.filter((items) => {
    if (category == "0") {
      navigate("/");
      return;
    }
    return items.category_id == category;
  });

  return (
    <div>
      <h1>CategoryListPage</h1>
      {filterContent.length ? (
        filterContent.map((news) => <News news={news} key={news._id} />)
      ) : (
    <div className="flex justify-center min-h-screen items-center"><h1 className="text-center text-2xl">There have no data</h1></div>
      )}
    </div>
  );
};

export default CategoryListPage;
