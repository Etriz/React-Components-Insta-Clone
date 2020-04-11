// You do not need to do anything in this file
import React from "react";

const CommentInput = (props) => {
  const handleChange = (event) => {
    props.changeComment(event.target.value);
  };
  return (
    <form
      className="comment-form"
      onSubmit={(event) => {
        event.preventDefault();
        props.addNewComment([...props.allCommentsState, { username: "ryan", text: props.comment }]);
        props.changeComment("");
      }}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add comment.... "
        onChange={handleChange}
      />
    </form>
  );
};

export default CommentInput;
