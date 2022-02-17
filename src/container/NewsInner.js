import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CategoryNames from "../components/CategoryNames";
import { FaRegClock, FaRegUser } from "react-icons/fa";

const NewInner = ({ handlerClick }) => {
  const params = useParams();
  const [item, setItem] = useState({});
  const [posts, setPosts] = useState([]);

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
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
  return (
    <div>
      <CategoryNames handlerClick={handlerClick} />
      <div className="Post-Info">
        <div className="Post-Info--left">
          <div className="Image">
            <img src={item.imageUrl} alt="" />
          </div>
          <div className="Footer-Info">
            <div className="Date">
              <FaRegClock />
              <span>{item.date}</span>
            </div>
            <div className="Author">
              <FaRegUser />
              <span>{item.author}</span>
            </div>
          </div>
        </div>
        <div className="Post-Info--right">
          <div className="Title">
            <h4>{item.title}</h4>
          </div>
          <div className="Content">
            <p>{item.content}</p>
          </div>
        </div>
      </div>
      <div className="Posts-Similar--all">
        <h3 className="Posts-Similar--title">Similar news</h3>
        <div className="Posts-Similar">
          {posts.map((post, index) =>
            index > 2 ? (
              ""
            ) : (
              <Link
                exact={true}
                to={`/${params.category}/${post.title}`}
                className="Posts-Similar--Link"
                onClick={topFunction}
              >
                {" "}
                <div className="Post-Similar">
                  <div className="Similar-Layout">
                    <div className="Similar-Layout--img">
                      <img src={post.imageUrl} alt="" />
                    </div>
                    <div className="Similar-Layout--Info">
                      <div className="Content">{post.content}</div>
                      <div className="Footer-Info">
                        <div className="Date">
                          <FaRegClock />
                          <span>{item.date}</span>
                        </div>
                        <div className="Author">
                          <FaRegUser />
                          <span>{item.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NewInner;
