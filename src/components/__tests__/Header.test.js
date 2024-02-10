import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  //   const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

test("Should load Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart (0 items)");
  expect(cartItems).toBeInTheDocument();
});

test("Should load Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Using regex
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

test("Should change Login Button to Logout on click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
