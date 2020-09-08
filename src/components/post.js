import React from "react";
import Footer from "./footer";
import "../reset.css";
import "./style.css";
import coment from "./img/comment.svg";
import like from "./img/like.svg";
import repost from "./img/repost.svg";
import share from "./img/share.svg";
import arrow from "./img/arrow.svg";

let footer = [
  {
    image: coment,
    number: 482,
  },
  {
    image: repost,
    number: 146,
  },
  {
    image: like,
    number: 887,
  },
  {
    image: share,
  },
];
const postFooter = footer.map((el, index) => (
  <Footer key={index} image={el.image} number={el.number} />
));

const Post = (props) => (
  <div className="wrapper">
    <div className="photo__container">
      <img className="main-photo" alt="avatar" src={props.author.photo} />
    </div>
    <div className="about-user">
      <div className="user-info">
        <p className="user-date">
          <span className="name txt">{props.author.name}</span>
          {props.author.nickname} · {props.date}
        </p>
        <img className="arrow" src={arrow} alt="" />
      </div>
      <p className="content txt">{props.content}</p>
      <div className="post-img">
        <img className="user-post" alt="post" src={props.image} />
      </div>
      <div className="post__footer"> {postFooter}</div>
    </div>
  </div>
);

export default Post;
