/* eslint-disable react/jsx-key */

import { PRODUCTS } from "./products";
import Products from './Products.jsx';
import './Products.scss'

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop_head">
          <h1>Welcome our Shop</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product, index) => (
            <Products key={index} {...product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
