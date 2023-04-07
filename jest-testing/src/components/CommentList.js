import React from "react";

const CommentList = ({ allcomments }) => {
  if (allcomments.length == 0) {
    return <h6> No Comments </h6>;
  }

  return (
    <div className="list">
      <ul>
        {allcomments.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default CommentList;
