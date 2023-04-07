import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Integration testing...
///******************************************************** */

test("comments gets displayed after submitting", async () => {
  render(<App />);
  const checkBox = screen.getByLabelText("i agree to terms and conditions", {
    exact: false,
  });
  const submitButton = screen.getByRole("button", {
    name: "comment",
    exact: false,
  });
  const commentInput = screen.getByPlaceholderText("write your comment here", {
    exact: false,
  });

  // kontihi action(event) perform karnyasathi userEvent like click dblClick,type , Keyboard,hover etc..
  await userEvent.type(commentInput, "nice pic");
  await userEvent.click(checkBox);
  await userEvent.click(submitButton);

  const commentLi = await screen.findByText("nice pic", { exact: false });
  expect(commentLi).toBeInTheDocument();
});

//****************************************************** */

test("previous comments also display after submitting", async () => {
  render(<App />);
  const checkBox = screen.getByLabelText("i agree to terms and conditions", {
    exact: false,
  });
  const submitButton = screen.getByRole("button", {
    name: "comment",
    exact: false,
  });
  const commentInput = screen.getByPlaceholderText("write your comment here", {
    exact: false,
  });
  await userEvent.type(commentInput, "nice pic");
  await userEvent.click(checkBox);
  await userEvent.click(submitButton);

  await userEvent.clear(commentInput);

  await userEvent.type(commentInput, "awesome");
  await userEvent.click(submitButton);

  await waitFor(() => {
    const commentLi = screen.getAllByRole("listitem");
    expect(commentLi.length).toBe(2);
  });
  //   screen.debug();
});

//*********************************************************** */
