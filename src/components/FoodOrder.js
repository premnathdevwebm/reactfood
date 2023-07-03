import { Fragment, useState, useContext } from "react";
import "./FoodOrder.css";
import { FoodItemsContext } from "../store/food-context";

const FoodOrder = (props) => {
  const selectedFood = props.food;
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(selectedFood.price);
  const [isOrdered, setIsOrdered] = useState(false);
  const { menuItems, setMenuItems } = useContext(FoodItemsContext);

  const handleQuantityChange = (event) => {
    setTotalAmount(selectedFood.price * event.target.value);
    setQuantity(event.target.value);
  };

  const handleClick = () => {
    setIsOrdered(true);
    setMenuItems(
      [...menuItems].map((item) => {
        if (item.id === selectedFood.id) {
          item.quantity = item.quantity - quantity;
          return item;
        }
        return item;
      })
    );
  };

  return (
    <Fragment>
      <h4 className="selfoodtitle">{selectedFood.name}</h4>
      <img
        className="foodimg"
        src={require(`../assets/images/${selectedFood.image}`)}
        alt={selectedFood.name}
      />
      <ul className="ulFoodDetails">
        <li>
          <p className="selFoodDesc">{selectedFood.desc}</p>
        </li>
        <li>
          <p className="selFoodPrice">{totalAmount}$</p>
        </li>
        <li className="selQuantity">
          <label>Quantity</label>
          <input
            type="number"
            defaultValue={1}
            className="quantity"
            min="1"
            max="10"
            onChange={handleQuantityChange}
          />
        </li>

        <li className="liDetails">
          <label htmlFor="name"></label>
          <input
            type="text"
            className="inputFields"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </li>
        <li>
          <label htmlFor="mobile"></label>
          <input
            type="text"
            className="inputFields"
            id="mobile"
            name="mobile"
            placeholder="Your mobile number"
          />
        </li>

        <li>
          <button className="btn btnOrder" onClick={handleClick}>
            Submit Order
          </button>
          <button className="btn btnReturnMenu" onClick={props.returnToMenu}>
            Return to Menu
          </button>
        </li>
        {isOrdered && (
          <li className="liMessage">
            <label>
              Order Submitted! You will receive an SMS to once ready for pickup.
            </label>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default FoodOrder;
