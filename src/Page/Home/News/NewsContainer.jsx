import { useEffect, useState } from "react";
import News from "./News";

 
const NewsContainer = () => {
    const [allNews, setAllNews] = useState([])
    useEffect(() => {
    fetch('/news.json')
    .then(res => res.json())
    .then(data => setAllNews(data))
    }, [])
    return (
        <div>
            {
                allNews.map(news => <News news={news} key={news._id}/>)
            }
        </div>
    );
};

export default NewsContainer;