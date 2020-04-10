// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";
import faStyles from "font-awesome/css/font-awesome.css";

const LikeSection = (props) => {
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i
            className="fa fa-heart"
            cssModule={faStyles}
            onClick={() => {
              props.setLikes(props.likes + 1);
            }}
          />
        </div>
        <div className="like-section-wrapper">
          <i className="fa fa-comment" cssModule={faStyles} />
        </div>
      </div>
      <p className="like-number">{`${props.likes} likes`}</p>
    </div>
  );
};

export default LikeSection;
