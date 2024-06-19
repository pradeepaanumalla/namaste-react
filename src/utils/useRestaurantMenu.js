import { useEffect, useState } from "react";
import {RESTAURANT_MENU_API} from "./../utils/constants";

const useRestaurantMenu = (resId)=>{
    // console.log("useRes menu")

    let [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchRestaurantData();
    },[])

    let fetchRestaurantData = async()=>{

        let data = await fetch(RESTAURANT_MENU_API+resId);
        let finalJson = await data.json();
        setResInfo(finalJson);
    }
    return resInfo;
}
export default useRestaurantMenu;