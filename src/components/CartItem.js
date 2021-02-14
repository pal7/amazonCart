import React from "react";
import "./CartItem.css";

function CartItem({ item, changeQuantityItem, index, deleteItem }) {
  const getSubTotal = (item) => {
    let subTotal = 0;
    subTotal = item.price * item.quantity;
    subTotal = subTotal.toFixed(2);

    return subTotal;
  };

  return (
    <div className="CartItem">
      <div className="CartItem-image">
        {/*    <img
          src="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX679_.jpg"
          alt="iPad Pro image"
        /> */}
        <img src={process.env.PUBLIC_URL + "/items/" + item.image} alt="" />
      </div>

      <div className="CartItem-info">
        <div className="info-title">
          <h2> {item.title}</h2>
        </div>
        <div className="info-stock"> {item.stock}</div>
        <div className="item-actions">
          <div className="item-quantity">
            <select
              name=""
              id=""
              onChange={(e) => changeQuantityItem(e, index)}
              value={item.quantity}
            >
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="6">Qty: 6</option>
            </select>
          </div>
          <div className="item-actions-divider"> | </div>
          <div className="item-delete" onClick={() => deleteItem(index)}>
            Delete
          </div>
        </div>
      </div>
      <div className="CartItem-price">{getSubTotal(item)}</div>
    </div>
  );
}

export default CartItem;
