import React, { useState, useEffect } from "react";
import { categories } from "../utils/categories";
import CategoryNames from "../components/CategoryNames";
import Card from "../components/Card";

function Home() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState(categories[0].category.toLowerCase());

  useEffect(() => {
    fetch(`https://inshortsapi.vercel.app/news?category=${title}`)
      .then((response) => response.json())
      .then((response) => setPosts(response.data));
  }, [title]);

  const handlerClick = (e) => {
    e.preventDefault();
    setTitle(e.target.innerText.toLowerCase());
    console.log(title);
  };

  return (
    <div>
      <CategoryNames handlerClick={handlerClick} />
      <Card posts={posts} title={title} />
    </div>
  );
}

export default Home;
