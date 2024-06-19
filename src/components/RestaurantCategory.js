import React, { useState } from "react";

import ItemList from "./ItemList";
const RestaurantCategory = ({categoryInfo, showItems, toggleItems}) => {
  // let [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="bg-gray-50 mb-4">
        <div className="flex justify-between  mb-4 p-2 rounded-sm shadow-lg " onClick={() => toggleItems()}>
          <h2 className="text-xl font-semibold text-left ">
            {categoryInfo?.card?.card?.title} (
            {categoryInfo?.card?.card?.itemCards?.length})
          </h2>
          <button>
            {showItems ? "Close" : "Open"}
          </button>
        </div>
        {showItems && (
          <ItemList
            items={categoryInfo?.card?.card?.itemCards}
          ></ItemList>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
