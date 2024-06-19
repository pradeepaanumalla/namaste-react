import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

test("should load header component with  a login button", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  let loginBtn = screen.getByRole("button");
  //if there are multiple buttons

  expect(loginBtn).toBeInTheDocument();

});


test("should load header component with  a login button , how to check when there are multiple buttons", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
  
    //if there are multiple buttons
  
    let loginBtn2 = screen.getByRole("button", {name:"login"});
    expect(loginBtn2).toBeInTheDocument();
  
  });
  


test("should load cart - o items", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
  
    //if there are multiple buttons
  
    let cartItems = screen.getByText("Cart 0 items");
    expect(cartItems).toBeInTheDocument();
  
  });
  

  test("should change login to logout on click", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
        </BrowserRouter>
      );

      let loginBtn = screen.getByRole("button", {name:"login"});
      fireEvent.click(loginBtn);
      let logoutBtn = screen.getByRole("button", {name:"logout"});

      expect(logoutBtn).toBeInTheDocument();
    
  })