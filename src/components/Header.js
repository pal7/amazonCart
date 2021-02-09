import React from "react";
import "./Header.css";

// props: {
//   title: "YOOO!!!";
// }

function Header({ title }) {
  //   console.log(" [---  what's in props?? ---- >", props.title);
  return (
    <div className="App-header">
      {/* <h1> Amazon Cart</h1> */}
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
