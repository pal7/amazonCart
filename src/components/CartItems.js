import React from "react";
import "./CartItems.css";
import CartItem from "./CartItem";

function CartItems({ items }) {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {/* array with products.mpa(product) => render */}
        //map through items and pass this.props.
        {items.map((item) => {
          return <CartItem item={item} />;
        })}
        {/* <CartItem /> */}
      </div>
    </div>
  );
}

export default CartItems;
