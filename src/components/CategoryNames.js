import React, { useState } from "react";
import { categories } from "../utils/categories";
import { Link } from "react-router-dom";

function CategoryNames({ handlerClick }) {
  const [activeClass, setActiveClass] = useState("active");
  return (
    <div className="CategoryItems">
      <div className="Categories">
        <h2>News</h2>
        {categories.map((data) => (
          <Link
            exact={true}
            to={`/category/${data.category.toLowerCase()}`}
            key={data.category}
            onClick={handlerClick}
          >
            <button
              className={
                activeClass === data.category
                  ? "Category_Name active"
                  : "Category_Name "
              }
              key={data.category}
              onClick={() => {
                setActiveClass(data.category);
              }}
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
