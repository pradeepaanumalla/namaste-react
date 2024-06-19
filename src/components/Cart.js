import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";



const Cart = function(){

    let dispatch = useDispatch();


    const clearCartItems = ()=>{
        dispatch(clearCart());
        
    }

    let items = useSelector((store)=>store.cart.items);
    return <div className="text-center w-2/3 m-auto">
        <h2 className="font-bold text-xl m-2 p-2">Cart</h2>

        <button onClick={()=>clearCartItems()} className="text-white bg-black p-2 rounded-lg">Clear cart</button>
        <ItemList items={items}></ItemList>
    </div>
}

export default Cart;