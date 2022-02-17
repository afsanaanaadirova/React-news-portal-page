import React, { useState, useEffect } from "react";
import { categories } from "../utils/categories";
import CategoryNames from "../components/CategoryNames";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

function Home() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState(categories[0].category.toLowerCase());
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://inshortsapi.vercel.app/news?category=${title}`)
      .then((response) => response.json())
      .then((response) => setPosts(response.data));
  }, [title]);

  const handlerClick = (e) => {
    setTitle(e.target.innerText.toLowerCase());
    navigate(`/category/${e.target.innerText.toLowerCase()}`);
  };

  return (
    <div>
      <CategoryNames handlerClick={handlerClick} />
      <Card posts={posts} title={title} />
    </div>
  );
}

export default Home;
