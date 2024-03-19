/* eslint-disable react/jsx-key */

import "./Cart.scss";
import { PRODUCTS } from "./../shop/products";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItme";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalItems } = useContext(ShopContext);
  console.log(cartItems);

  const totalAmountPrice = getTotalItems();

  const navigate = useNavigate();

  return (
    <div className="carts">
      <div className="container">
        <div className="cart_head">
          <h1>Your cart items</h1>
        </div>
        <div className="cart_content">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} {...product} />;
            }
            return null;
          })}
        </div>
        {totalAmountPrice > 0 ? (
          <div className="check_out">
            <p>Subtotal:$ {totalAmountPrice}</p>
            <div className="check_btn">
              <button onClick={() => navigate("/")}>Continue Shopping </button>
              <button>Check Out</button>
            </div>
          </div>
        ) : (
          <h1>Your cart is Empty 😶‍🌫️</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
