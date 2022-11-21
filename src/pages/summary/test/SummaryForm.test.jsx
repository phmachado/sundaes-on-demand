import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("checkbox enable button", () => {
  test("if checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    expect(checkbox).not.toBeChecked();
  });

  test("if button is enabled when checkbox is checked", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: "I agree to Terms and Conditions",
    });
    const button = screen.getByRole("button", { name: "Confirm order" });

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
