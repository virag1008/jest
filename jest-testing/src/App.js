import { useState } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

function App() {
  const [comments, setComments] = useState([]);
  return (
    <>
      <div data-testid="myrootdiv">
        <CommentForm setComments={setComments} />

        {/* <h1> Testing Basics </h1> 
      <input type="text" placeholder="type name here" />
      <button> test Button </button>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul> */}
      </div>
      <hr />
      <div>
        <CommentList allcomments={comments} />
      </div>
    </>
  );
}

export default App;
