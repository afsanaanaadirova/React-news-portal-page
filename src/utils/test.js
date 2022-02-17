import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const NewInner = ({ handlerClick }) => {
  const params = useParams();
  const [item, setItem] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `https://inshortsapi.vercel.app/news?category=${params.category.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((response) => {
        setPosts(response.data);
        const itemNew = response.data.find(
          ({ title }) => title === params.title
        );
        setItem(itemNew);
      });
    console.log(params);
  }, [params]);
  return <div></div>;
};

export default NewInner;
