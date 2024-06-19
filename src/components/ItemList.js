import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  const dispatch = useDispatch();
  
  const handleAddItems = (item)=>{
    dispatch(addItem(item));
  }
  return (
    <div className="flex flex-col justify-between gap-3">
      {props.items.map((ele) => {
        return (
          <div data-testid="itemcard"
            key={ele?.card?.info?.id}
            className="flex  justify-between w-[100%]"
          >
            <div className="flex  flex-col text-left p-4 w-10/12">
              <h4 className="text-base font-semibold">
                {ele?.card?.info?.name}- Rs.
                {ele?.card?.info?.price
                  ? ele?.card?.info?.price / 100
                  : ele?.card?.info?.defaultPrice / 100}
              </h4>

              <p className="text-sm text-gray-500">
                {ele?.card?.info?.description}
              </p>
            </div>
            <div className="w-2/12">
              <div className="absolute">
                <button onClick={()=>handleAddItems(ele)} className="bg-black text-white rounded-lg  px-4 py-1.5 mt-1 ml-1">
                  +Add
                </button>
              </div>
              <img
                className=" rounded-md "
                src={CDN_URL + ele?.card?.info?.imageId}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
