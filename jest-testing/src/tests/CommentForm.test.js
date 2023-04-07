import { render, screen } from "@testing-library/react";
import CommentForm from "../components/CommentForm";
import userEvent from "@testing-library/user-event";

describe("All test cases combined", () => {
  test("Initial conditions", () => {
    render(<CommentForm />);
    const commentInput = screen.getByRole("textbox");
    expect(commentInput).toBeInTheDocument();

    const checkBox = screen.getByLabelText("i agree to terms and conditions", {
      exact: false,
    });
    //   const checkBox = screen.getByLabelText(/'i agree to terms and conditions'/i); //using regular expression

    expect(checkBox).toBeInTheDocument();
    const submitButton = screen.getByRole("button", {
      name: "comment",
      exact: false,
    });
    expect(submitButton).toBeDisabled();
  });

  //************************************************************* */

  test("enable submit btn on type and checkBox click", async () => {
    render(<CommentForm />);
    const checkBox = screen.getByLabelText("i agree to terms and conditions");
    const submitButton = screen.getByRole("button", {
      name: "comment",
      exact: false,
    });
    const commentInput = screen.getByPlaceholderText(
      "write your comment here",
      { exact: false }
    );

    // fireEvent.change(commentInput, { target: { value: "something" } });
    // fireEvent.click(checkBox);

    await userEvent.type(commentInput, "something");
    await userEvent.click(checkBox);

    expect(submitButton).toBeEnabled();
    // fireEvent.click(checkBox);
    await userEvent.click(checkBox);
    expect(submitButton).toBeDisabled();
  });
});
