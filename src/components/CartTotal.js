import React from "react";
import "./CartTotal.css";

function CartTotal({ items }) {
  const getTotalPrice = () => {
    //init total price to 0
    let total = 0;
    //loop through all the items and add to total price
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    //return total price
    return total;
  };

  const getTotalItems = () => {
    let totalItems = 0;

    items.forEach((item) => {
      totalItems += parseInt(item.quantity);
    });
    return totalItems;
  };

  return (
    <div className="CartTotal">
      <h3>
        Subtotal ({items.length}):
        <span className="CartTotal-price">${getTotalPrice()}</span>
      </h3>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default CartTotal;
