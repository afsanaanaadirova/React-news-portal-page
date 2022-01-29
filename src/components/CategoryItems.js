import React, { useEffect, useState } from "react";
import { data } from "./data.js";
import { FaRegClock, FaRegUser } from "react-icons/fa";

function CategoryItems() {
  const [categoryName, setCategoryName] = useState(data);
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState("all");

  useEffect(() => {
    fetch(`https://inshortsapi.vercel.app/news?category=${title}`)
      .then((response) => response.json())
      .then((response) => setCategory(response.data));
  }, [title]);

  const handlerClick = (e) => {
    e.preventDefault();
    setTitle(e.target.innerText);
  };
  return (
    <div className="CategoryItems">
      <div className="Categories">
        <h2>News</h2>
        {categoryName.map((category) => (
          <button className="Category_Name" onClick={handlerClick}>
            {category.category}
          </button>
        ))}
      </div>
      <div className="Cards">
        {category.map((category) => (
          <div className="Card">
            <div className="Card_Image">
              <img src={category.imageUrl} alt="" />
            </div>
            <div className="Card_Info">
              <h3 className="Card_Info--Title">{category.title}</h3>
              <p className="Card_Info--Text">{category.content}</p>
              <span className="Card_Info--Footer">
                <div className="Date">
                  <FaRegClock />
                  <span>{category.date}</span>
                </div>
                <div className="Author">
                  <FaRegUser />
                  <span>{category.author}</span>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryItems;
