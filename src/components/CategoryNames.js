import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { categories } from "../utils/categories";

function CategoryNames({ handlerClick }) {
  const [activeClass, setActiveClass] = useState();
  const { category } = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log(location, category);
    setActiveClass(category);
  }, [location, category]);

  return (
    <div className="CategoryItems">
      <div className="Categories">
        <h2>News</h2>
        {categories.map((data) => (
          <Link exact={true} to={`/category/${data.category.toLowerCase()}`}>
            {" "}
            <button
              className={
                data.category.toLowerCase() === activeClass
                  ? "Category_Name active"
                  : " Category_Name"
              }
              onClick={handlerClick}
              key={data.category}
            >
              {data.category}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryNames;
