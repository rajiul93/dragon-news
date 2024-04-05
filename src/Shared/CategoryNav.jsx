import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

 

const CategoryNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
    fetch('/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
    }, [])
    
    return (
        <div>
            {
                categories?.map(category =><li  className="list-none font-medium mt-3" key={category.id}><NavLink>{category.name}</NavLink></li>)
            }
        </div>
    );
};

export default CategoryNav;