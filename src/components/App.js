import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

function App() {

  const menuData = [
    { id: 1, name: "Buttermilk Pancakes", category: "breakfast", price: "$15.99" },
    { id: 2, name: "Diner Double", category: "lunch", price: "$13.99" },
    { id: 3, name: "Godzilla Milkshake", category: "shakes", price: "$6.99" },
    { id: 4, name: "Country Delight", category: "breakfast", price: "$20.99" },
    { id: 5, name: "Egg Attack", category: "lunch", price: "$22.99" },
    { id: 6, name: "Oreo Dream", category: "shakes", price: "$18.99" }
  ];

  const [items, setItems] = useState(menuData);

  const filterItem = (category) => {
    const filtered = menuData.filter((item) => item.category === category);
    setItems(filtered);
  };

  return (
    <div id="main">

      <h1>Our Menu</h1>

      <div>
        <button id="filter-btn-1" onClick={() => filterItem("breakfast")}>
          Breakfast
        </button>

        <button id="filter-btn-2" onClick={() => filterItem("lunch")}>
          Lunch
        </button>

        <button id="filter-btn-3" onClick={() => filterItem("shakes")}>
          Shakes
        </button>
      </div>

      <Menu items={items} />

    </div>
  );
}

export default App;