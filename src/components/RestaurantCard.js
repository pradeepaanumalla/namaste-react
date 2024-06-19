import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { result } = props;
  // console.log(result);
  const { name, cuisines, avgRating, cloudinaryImageId, sla } = result.info;

  const userContext = useContext(UserContext);
  return (
    <div data-testid="resCard" className="mx-2 p-4 bg-gray-100  w-[250px] flex flex-col justify-center gap-2"  >
      <img
        className="w-[200px] h-[200px] rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold">{name}</h3>
      <h4 className="break-all">{cuisines.join(", ")}</h4>
      <h4 className="break-all">{avgRating} stars</h4>
      <h4>{sla.deliveryTime} min </h4>
      <div>{userContext?.loggedInUser}</div>
    </div>
  );
};


export const WithFourPlusStar = (RestaurantCard)=>{

  return ((props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg p-2">Promoted with {props.result.info.avgRating}* </label>
        <RestaurantCard {...props}></RestaurantCard>

      </div>

    )
  })
}

export default RestaurantCard;
