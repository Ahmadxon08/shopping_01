/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart,updateCartItems } = useContext(ShopContext);
  const { id, title, brand, price, category, thumbnail } = props;
  console.log(title);
  return (
    <div className="cart">
      <img src={thumbnail} alt={title} />
      <div className="des">
        <h3>{title}</h3>
        <p>Brand: {brand}</p>
        <p>Category: {category}</p>
        <span>${price}</span>
        <div className="counter">
          <button onClick={()=>addToCart(id)}>+</button>
          <input value={cartItems[id]} onChange={(e)=>updateCartItems(Number(e.target.value), id)} />
          <button onClick={()=>removeFromCart(id)}  >-</button>
        </div> 
      </div>
    </div>
  );
};

export default CartItem;
