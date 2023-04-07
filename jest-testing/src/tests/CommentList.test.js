import { render, screen } from "@testing-library/react";
import CommentList from "../components/CommentList";

test("Comments are not available", () => {
  render(<CommentList allcomments={[]} />);
  const h2Element = screen.getByText("No Comments", { exact: false });
  expect(h2Element).toBeInTheDocument();
});

test("List all comments", () => {
  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
  ];
  render(<CommentList allcomments={comments} />);

  // expect(screen.getByText("Comment 1")).toBeInTheDocument();
  // expect(screen.getByText("Comment 2")).toBeInTheDocument();

  // when their is a multiple comments then its not feasible to write all code so we used  below method (length compare karun)

  const commentLi = screen.getAllByRole("listitem");
  expect(commentLi.length).toBe(comments.length);
  // 2 primitive value compare karnya sathi toBe()
  // 2 non-primitive value compare karnyasathi toEqual()
});
