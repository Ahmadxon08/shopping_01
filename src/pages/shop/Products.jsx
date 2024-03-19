/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./Products.scss";
const Products = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { title, id, brand, category, thumbnail } = props;

  const cartItemAmount = cartItems[id];
  return (
    <div className="card">
      <img src={thumbnail} alt={title} />
      <div className="texts">
        <h1>{brand}</h1>
        <h2>{category}</h2>
        <span>{title}</span>
      </div>
      <div className="btns">
        <button onClick={() => addToCart(id)} type="button">
          Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Products;
