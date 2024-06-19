import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANTS_API } from "./constants";

const useRestaurantsData = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  let fetchRestaurantsData = async () => {
    let data = await fetch(SWIGGY_RESTAURANTS_API);
    let json = await data.json();
    console.log("json", json);
    let restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
        console.log("restaurant data");

    setListOfRestaurants(restaurants);
  };
  return listOfRestaurants;
};

export default useRestaurantsData;