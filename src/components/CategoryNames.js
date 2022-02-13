import React from "react";
import { categories } from "../utils/categories";
import { Link } from "react-router-dom";

function CategoryNames({ handlerClick }) {
  return (
    <div className="CategoryItems">
      <div className="Categories">
        <h2>News</h2>
        {categories.map((data) => (
          <Link exact={true} to={`/`}>
            <button
              className="Category_Name"
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
