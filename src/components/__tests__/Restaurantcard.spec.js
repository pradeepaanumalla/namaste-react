import { render, screen } from "@testing-library/react";
import RestaurantCard, {WithFourPlusStar} from "../RestaurantCard";
import MOCK_DATA from "./mocks/restaurantMock.json";
import '@testing-library/jest-dom';



test("should render restaurant card when we pass props", ()=>{

    render(<RestaurantCard  result={MOCK_DATA}/>)

    let title =  screen.getByText("Barbeque Nation");

    expect(title).toBeInTheDocument();
})


test("Should render a restaurant with promoted label", ()=>{
    let Temp = WithFourPlusStar(RestaurantCard);

    render(<Temp result={MOCK_DATA} />);

    let promoted = screen.getByText(/Promoted with/);
    expect(promoted).toBeInTheDocument();

})