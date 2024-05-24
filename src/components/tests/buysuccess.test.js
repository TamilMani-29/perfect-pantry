import "@testing-library/jest-dom/extend-expect";
import { render,screen } from "@testing-library/react";
import BuySuccess from "../BuySuccess";
import user from "@testing-library/user-event";

const handleClose = jest.fn();

describe("test buysuccess functionality", () => {
  test("buysuccess is closing functionality", async () => {
    user.setup();
    render(<BuySuccess handleClose={handleClose} />);
    const closeBtn = screen.getByTestId("close-icon");
    const successImg = screen.getByAltText("success-img");
    expect(closeBtn).toBeInTheDocument();
    expect(successImg).toBeInTheDocument();

  });
});
