import Cards from "./Cards";
import react from "../react";

let Restaraunt = (props) => {
  let { data } = props;
  console.log(data);
  // const { data } = props;
  const { cloudinaryImageId, name, avgRating, deliveryTime, cuisines } =
    data?.data;
  return (
    <div className="card">
      <div className="image">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt=""
        />
      </div>
      <div className="rest">
        {console.log(name)}
        <h4 className="name">{name}</h4>
        <div className="startime">
          <p className="star">{avgRating}</p>
          <p className="time">{deliveryTime + " Minutes"}</p>
        </div>
        <div className="cousine">
          <p>{data.data.cuisines.join(", ")}</p>
        </div>
        <div className="amount">
          <p>{"₹" + data.data.costForTwo / 100 }</p>
        </div>
      </div>
    </div>
  );
};

export default Restaraunt;
