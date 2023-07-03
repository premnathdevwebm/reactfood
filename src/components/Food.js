import { Fragment, useState } from "react";
import FoodOrder from "./FoodOrder";
import "./Food.css";
const Foods = (props) => {
  const [selectedFood, setSelectedFood] = useState({});
  const handleSelect = (event) => {
    setSelectedFood(
      [...props.fooditems].find(
        (item) => item.id === parseInt(event.currentTarget.dataset.id)
      )
    );
  };
  return (
    <>
      {!Object.keys(selectedFood).length > 0 && (
        <Fragment>
          <h4 className="foodtitle">Menu Availability</h4>
          <ul className="ulfoods">
            {[...props.fooditems].map((food) => (
              <li
                className="lifoods"
                key={food.id}
                data-id={food.id}
                onClick={handleSelect}
              >
                <img
                  className="foodimg"
                  src={require(`../assets/images/${food.image}`)}
                  alt={food.name}
                />
                <div className="fooditem">
                  <p className="fooddesc">{food.desc}</p>
                  <p className="foodprice">{food.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </Fragment>
      )}
      {Object.keys(selectedFood).length > 0 && (
        <FoodOrder
          food={selectedFood}
          returnToMenu={() => setSelectedFood({})}
        />
      )}
    </>
  );
};

export default Foods;
