import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import React from "react";
import "@testing-library/jest-dom";
// import {test, expect} from "jest";
describe("Contact us test page", ()=>{

    // can use either test or it
    test('should render contact us page', () => {
        render(<Contact />);
        let heading = screen.getByRole("heading");    
        expect(heading).toBeInTheDocument();
    })

  
    
    
   it("Should render button", ()=>{
        render(<Contact />);
        let btn = screen.getByText("Submit");
        // console.log("expect", expect);
        expect(btn).toBeInTheDocument();
    
    })
    
    test("Should load input name on dom", ()=>{
        render(<Contact />);
    
        let inputBox = screen.getByPlaceholderText("Name");
    
        expect(inputBox).toBeInTheDocument();
    
    })
    
    test("Should load 2 input boxes  on dom", ()=>{
        render(<Contact />);
    
        let inputBoxes = screen.getAllByRole("textbox");
    
    
        expect(inputBoxes.length).not.toBe(3);
        expect(inputBoxes.length).toBe(2);
    
    })

})
