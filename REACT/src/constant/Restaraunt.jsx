import { restaurantImgURL } from "../constant/URL.JSX";

let Restaraunt = (props) => {
  let { data } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwo } =
    data?.info;
  return (
    <div className="card">
      <div className="image">
        <img src={restaurantImgURL + cloudinaryImageId} alt="" />
      </div>
      <div className="rest">
        {/* {console.log(name)} */}
        <h4 className="name">{name}</h4>
        <div className="startime">
          <p className="star">{avgRating}</p>
          <p className="time">{sla.deliveryTime + " Minutes"}</p>
        </div>
        <div className="cousine">
          <p>{cuisines.join(", ")}</p>
        </div>
        <div className="amount">
          <p>{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default Restaraunt;
