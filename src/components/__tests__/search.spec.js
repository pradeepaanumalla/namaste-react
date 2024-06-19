import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_REST_LIST from "./mocks/restaurantListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_REST_LIST);
    },
  });
});

test("Should render body and search the restaurants", async() => {

    await act(async()=>  render(
        <BrowserRouter>
            <Body />
            </BrowserRouter>
    ));

    let searchBtn = screen.getByRole("button", {name:"Search"});


    expect(searchBtn).toBeInTheDocument();


    let cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);

    let searchBox = screen.getByTestId("searchInput");

    fireEvent.change(searchBox, {target:{value:"pizza"}});

    fireEvent.click(searchBtn);

    let cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(2);

});


test("should list the top rated restaurants", async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body></Body>
        </BrowserRouter>
    ))

    let cardsBeforeTopRatedClick = screen.getAllByTestId("resCard");
    expect(cardsBeforeTopRatedClick.length).toBe(8);

    let topRatedBtn = screen.getByRole("button", {name:"Top rated Restaurants"});


    fireEvent.click(topRatedBtn);

    let cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(4);


})