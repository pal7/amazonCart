import React from "react";
import "./CartItems.css";
import CartItem from "./CartItem";

function CartItems({ items, setCartItems }) {
  const changeQuantityItem = (e, index) => {
    const itemsCopy = [...items];
    itemsCopy[index].quantity = e.target.value;
    setCartItems(itemsCopy);
  };

  const deleteItem = (indexDel) => {
    const filteredItems = items.filter((_, idx) => idx !== indexDel);
    console.log(filteredItems);
    setCartItems(filteredItems);
  };

  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {/* array with products.map(product) => render */}
        {/* //map through items and pass this.props. */}
        {items.map((item, index) => (
          <CartItem
            index={index}
            item={item}
            key={index}
            changeQuantityItem={changeQuantityItem}
            deleteItem={deleteItem}
          />
        ))}
        {/* <CartItem /> */}
      </div>
    </div>
  );
}

export default CartItems;
