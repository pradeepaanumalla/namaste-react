import RestaurantCard, {WithFourPlusStar} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { SWIGGY_RESTAURANTS_API } from "./../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import Button from "./../utils/styles";
import UserContext from "../utils/UserContext";
const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");


  let RatedGreat = WithFourPlusStar(RestaurantCard);

  let {loggedInUser, setUserName}  = useContext(UserContext);
  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  let fetchRestaurantsData = async () => {
    let data = await fetch(SWIGGY_RESTAURANTS_API);
    let json = await data.json();
    let restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex gap-4 p-4 justify-between">
        <div className="flex gap-8 ">
          <input
            type="text"
            data-testid="searchInput"
            className="border-2 border-gray-200 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((ele) =>
                  ele.info.name.toLowerCase().includes(searchText)
                )
              );
            }}
            className="bg-green-100 px-2 py-2 rounded-md text-green-700"
          >
            Search
          </Button>
          <Button
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
              setSearchText("");
            }}
            className="bg-green-100 px-2 py-2 rounded-md text-green-700"

          >
            Clear
          </Button>
          <input
            type="text"
            className="border-2 border-gray-200 "
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <Button
          onClick={() => {
            // console.log(listOfRestaurants);
            setFilteredRestaurants(
              listOfRestaurants.filter((ele) => ele.info.avgRating > 4)
            );
          }}
          className="bg-gray-200 px-2 py-2 rounded-md  justify-end"

        >
          Top rated Restaurants
        </Button>
      </div>
      <div className="flex gap-2 flex-wrap px-2">
        {filteredRestaurants.map((ele) => (
          
         
          <Link key={ele.info.id} to={"/restaurant/" + ele.info.id}>
            {
              ele.info.avgRating > 4 ?  <RatedGreat result={ele}></RatedGreat>  :  <RestaurantCard result={ele} />
            }
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
