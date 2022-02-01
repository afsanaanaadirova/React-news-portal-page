import React from "react";
import { FaRegClock, FaRegUser } from "react-icons/fa";

function Card({ posts }) {
  return (
    <div className="Cards">
      {posts.map((post) => (
        <div className="Card" key={post.url}>
          <div className="Card_Image">
            <img src={post.imageUrl} alt="" />
          </div>
          <div className="Card_Info">
            <h3 className="Card_Info--Title">{post.title}</h3>
            <p className="Card_Info--Text">{post.content}</p>
            <span className="Card_Info--Footer">
              <div className="Date">
                <FaRegClock />
                <span>{post.date}</span>
              </div>
              <div className="Author">
                <FaRegUser />
                <span>{post.author}</span>
              </div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
