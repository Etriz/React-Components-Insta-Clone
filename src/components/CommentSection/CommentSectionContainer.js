// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // Add state for the comments
  const [allCommentsState, addNewComment] = useState(props.comments);
  const [comment, changeComment] = useState("");

  // const submitComment = () => {
  //   addNewComment(comment);
  // };
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {allCommentsState.map((item, index) => (
        <Comment key={index} comment={item} />
      ))}
      <CommentInput
        addNewComment={addNewComment}
        comment={comment}
        changeComment={changeComment}
        allCommentsState={allCommentsState}
      />
    </div>
  );
};

export default CommentSection;
