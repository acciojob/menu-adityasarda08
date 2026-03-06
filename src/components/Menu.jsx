import React from "react";

const Menu = ({ items }) => {
  return (
    <div>

      {items.map((item) => {

        let testId = "";

        if (item.category === "breakfast") {
          testId = "menu-item-breakfast";
        } 
        else if (item.category === "lunch") {
          testId = "menu-item-lunch";
        } 
        else if (item.category === "shakes") {
          testId = "menu-item-shakes";
        }

        return (
          <div key={item.id} data-test-id={testId}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        );
      })}

    </div>
  );
};

export default Menu;