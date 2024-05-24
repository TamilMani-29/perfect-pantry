import { render, screen } from "@testing-library/react";
import LogoutButton from "../LogoutButton";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe("test logout btn functionality", () => {
  test("logout button renders properly", async () => {
    user.setup();
    render(
      <BrowserRouter>
        <LogoutButton />
      </BrowserRouter>
    );
    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();
    await user.click(logoutBtn);
    expect(window.location.pathname).toBe('/');
  });
});
