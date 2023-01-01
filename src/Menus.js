import React from "react";
import SingleMenu from "./SingleMenu";

function Menus({ menuList }) {
  return (
    <div className="menus">
      {menuList.map((menu) => (
        <SingleMenu key={menu.id} {...menu} />
      ))}
    </div>
  );
}

export default Menus;
