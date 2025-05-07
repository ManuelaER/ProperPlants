import { useState } from "react";
import Plants from "./components/Plants"
import Items from "./components/Items"
import PLANTS from "./data";
import "./index.css";

export default function App() {
  const [items, setItems] = useState([]);
  
  const addItems = (plant) => {
    const itemExists = items.find((i) => i.id === plant.id);
    if (itemExists) {
      setItems(
        items.map((item) =>
        item.id === plant.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
      )
      );
    } else {
      const start = { ...plant, quantity: 1};
      setItems([...items, start]);
    }
  };

  const removeItems = (itemToRemove) => {
    setItems(
      items
      .map((item) => 
      item.id === itemToRemove.id
    ? { ...item, quantity: item.quantity - 1 }
    : item
    )
    .filter((item) => item.quantity > 0 )
    );
  };

  return (
  <>
  <Plants plants={PLANTS} addItems={addItems} />
  <Items
  items={items}
  addItems={addItems}
  removeItems={removeItems}
  />
  </>
  );
}

