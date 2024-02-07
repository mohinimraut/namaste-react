import { UseSelector, useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //Here take selector fumction as arguement
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log("carItems>>>>>", cartItems);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length===0 && <h1>Your cart Items are empty.Add Items to the Cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
