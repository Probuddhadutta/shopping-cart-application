import { useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
      <h3>{item.name}</h3>
      <p>Unit Price: ${item.price}</p>
      <p>Total: ${item.price * item.quantity}</p>

      <button onClick={() => dispatch(decrement(item.id))}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increment(item.id))}>+</button>

      <button onClick={() => dispatch(removeItem(item.id))}>
        Delete
      </button>
    </div>
  );
}

export default CartItem;
