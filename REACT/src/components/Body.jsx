import Cards from "./Cards";
import react from "../react";

let Body = (props) => {
  const { data } = props;
  // const { cloudinaryImageId, name, avgRating, deliveryTime, cuisines } =
  //   cards?.data;
  return (
    <div className="card">
      <div className="image">
        {/* <img
          src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb"+cards.data.cloudinaryImageId}
          alt=""
        /> */}
      </div>
      <div className="rest">
        <h4 className={data.data.name}></h4>
        <div className="startime">
          <p className="star">{data.data.avgRating}</p>
          <p className="time">5 minutes</p>
        </div>
        <div className="cousine">
          <p>Pizzas, Italian, Pastas, Desserts Paschim Vihar</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
