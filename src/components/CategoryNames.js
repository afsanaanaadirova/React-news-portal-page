import React from "react";
import { categories } from "../utils/categories";

function CategoryNames({ handlerClick }) {
  return (
    <div className="CategoryItems">
      <div className="Categories">
        <h2>News</h2>
        {categories.map((data) => (
          <button
            className="Category_Name"
            onClick={handlerClick}
            key={data.category}
          >
            {data.category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryNames;
