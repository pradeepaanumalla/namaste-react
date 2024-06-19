import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "./mocks/restaurantMenuMock.json";
import { act } from "react";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  });
});

test("Should render restaurant menu and add items to cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu /> 
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  let tiffinSec = screen.getByText("TIFFINS MENU (25)");
  expect(tiffinSec).toBeInTheDocument();
  fireEvent.click(tiffinSec);
  let itemCards = screen.getAllByTestId("itemcard");
  expect(itemCards.length).toBe(25);

 let addBtns =  screen.getAllByRole("button", {name :"+Add"});
  
 expect(addBtns.length).toBe(25);

 fireEvent.click(addBtns[0]);
  
let cartItems = screen.getByText("Cart 1 items");
expect(cartItems).toBeInTheDocument();

fireEvent.click(addBtns[2]);
 
expect( screen.getByText("Cart 2 items")).toBeInTheDocument();
expect(screen.getAllByTestId("itemcard").length).toBe(27);

let clearCart = screen.getByRole("button", {name:"Clear cart"});
fireEvent.click(clearCart);


expect(screen.getAllByTestId("itemcard").length).toBe(25);



});
