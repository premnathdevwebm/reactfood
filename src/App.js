import { useState } from "react";
import "./App.css";
const initialValue = [
  {
    id: 1,
    name: "Chicken Burger",
    quantity: 40,
    desc: "Fried chicken burger - lettuce, tomato, cheese and mayonnaise",
    price: "24",
    image: "cb.jpg"
  },
  {
    id: 2,
    name: "Veg Burger",
    quantity: 30,
    desc: "Plant based burger - lettuce, tomato, vegan cheese and mayonnaise",
     price: "22",
    image: "vb.jpg"
  },
  {
    id: 3,
    name: "Chips",
    quantity: 50,
    desc: "Potato chips fried to perfection",
     price: "10",
    image: "chips.jpg"
  },
  {
    id: 4,
    name: "Ice Creams",
    quantity: 30,
    desc: "Ice Cream - Vannila ouble scoop",
     price: "7",
    image: "ic.jpg"
  },
];
function App() {
  const [menuItems, setMenuItems] = useState(initialValue);
  return (
    <div className="App">
      <header className="App-header">Food online shop</header>
      <h4 className="subtitle">Menu Availability</h4>
      <ul className="ulapp">
        {
          menuItems.map((item)=><li className="liapp" key={item.id}>
            {item.name} - {item.quantity}
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
