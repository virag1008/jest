import React, { useState } from "react";

const CommentForm = ({ setComments }) => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  // const addComments = () => {
  //   setComments((pre) => [...pre, { id: Date.now(), text: text }]);
  //   setText("");
  // };

  const addComments = async () => {
    const res = await fetch("http://localhost:5000/addcomment", {
      method: "post",
      headers: {
        "content-Type": "appliction/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });
    const result = await res.json();
    setComments((pre) => [...pre, result]);
    setText("");
  };

  return (
    <div>
      <h2>comment form</h2>
      <input
        type="text"
        placeholder="write your comment here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <br />

      <input
        type="checkbox"
        id="checkbox"
        onChange={() => setChecked(!checked)}
      />

      <label htmlFor="checkbox"> i agree to terms and conditions </label>
      <br />
      <br />
      <button disabled={!checked || !text} onClick={addComments}>
        comment
      </button>
    </div>
  );
};

export default CommentForm;
