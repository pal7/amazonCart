import React from "react";
import { useState } from "react";
import "./App.css"; //styling using a CSS file
import Header from "./Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import data from "./Data";

function App() {
  // const fname = "Ashwin";
  // const h1Style = { color: "pink", backgroundColor: "lightblue" }; //styling using JS object

  const [cartItems, setCartItems] = useState(data);

  return (
    <div className="App">
      <Header title="Amazon Cart" />
      {/* <h1 style={{ color: "green", backgroundColor: "#222" }}> YO Boys</h1> //Inline styling
      <h1 style={h1Style}>HELLO</h1> */}
      <div className="App-main">
        <CartItems items={cartItems} />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
