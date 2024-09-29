import React from "react";
import './ItemList.css'; // Import the CSS file

function ItemList({ title, items }) {
  return (
    <div className="item-list-container">
      <div className="item-list-content">
        <h2 className="item-list-title">{title}</h2>
        {items.map((item, index) => (
          <div key={index} className="item-list-entry">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
