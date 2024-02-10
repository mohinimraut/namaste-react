import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

import "@testing-library/jest-dom";
console.log("mockkkkkk", MOCK_DATA);
test("RestaurantCard should load with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Burger King");
  expect(name).toBeInTheDocument();
});
