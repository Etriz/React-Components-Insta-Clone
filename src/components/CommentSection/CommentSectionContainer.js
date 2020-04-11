// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // Add state for the comments
  const [commentState, submitComment] = useState(props.comments);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {commentState.map((item) => (
        <Comment comment={item} />
      ))}
      <CommentInput submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;
