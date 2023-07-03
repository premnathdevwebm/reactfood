import { Fragment, useState, useContext } from "react";
import FoodComp from "./components/Food";
import {FoodItemsContext} from "./store/food-context"
import "./App.css";

function App() {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const {menuItems} = useContext(FoodItemsContext)
  return (
    <div className="App">
      <button
        className="togglebtton"
        onClick={() => setIsChooseFoodPage((prev) => !prev)}
      >
        {isChooseFoodPage ? "Availability Check" : "Order Food"}
      </button>
      <header className="App-header">Food online shop</header>
      {!isChooseFoodPage && (
        <Fragment>
          <h4 className="foodtitle">Menu Availability</h4>
          <ul className="ulapp">
            {[...menuItems].map((food) => (
              <li className="liapp" key={food.id}>
                {food.name} - {food.quantity}
              </li>
            ))}
          </ul>
        </Fragment>
      )}
      {isChooseFoodPage && (
        <FoodComp fooditems={menuItems}  />
      )}
    </div>
  );
}

export default App;
