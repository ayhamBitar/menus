import React from "react";

function SingleMenu({ title, category, price, img, desc }) {
  return (
    <div className="single-menu">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <div className="title-price">
          <h4>{title}</h4>
          <div className="price">${price}</div>
        </div>

        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}

export default SingleMenu;
