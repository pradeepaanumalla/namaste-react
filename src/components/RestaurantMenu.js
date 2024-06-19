import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./../utils/useRestaurantMenu";

import {useParams} from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>{
    let [count, setCount]=useState(0);
    const {resId}= useParams();
    let [showIndex , setShowIndex] = useState(-1);

    const toggleItems = (index)=>{
        if(showIndex == index){
            setShowIndex(-1);

        }else{
            setShowIndex(index);
        }
    }

    let resInfo = useRestaurantMenu(resId);


   
    if(resInfo == null){
        return <Shimmer />;
    }
    const {name, costForTwoMessage, cuisines, avgRating} = resInfo?.data?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categoryList = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(ele=> ele.card.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return <div className="text-center">

        <h2 className="font-bold my-6 text-2xl">{name}</h2>

        <p className="font-bold">{cuisines.join(", ") } -  {costForTwoMessage}</p>
        <div className="w-2/3 text-center m-auto">
        {
            
            categoryList.map((e,index)=>{
              return   <RestaurantCategory key={e.card.card.title} categoryInfo={e} showItems={showIndex == index ? true: false} toggleItems={()=>toggleItems(index)}></RestaurantCategory>
            })
        }
        </div>

       
    </div>
};
export default RestaurantMenu;
