import { restaurantImgURL } from "../constant/URL.JSX";

let Restaraunt = (props) => {
  let { data } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwo } =
    data?.info;
  return (
    <div className="card h-auto">
      <div className="image">
        <img src={restaurantImgURL + cloudinaryImageId} alt="" />
      </div>
      <div className="rest">
        {/* {console.log(name)} */}
        <h4 className="name font-bold">{name}</h4>
        <div className="startime">
          <p className="star">{avgRating}</p>
          <p className="time">{sla.deliveryTime + " Minutes"}</p>
        </div>
        <div className="cousine h-11 overflow-hidden text-gray-400">
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
