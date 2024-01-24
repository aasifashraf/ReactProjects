

let Restaraunt = (props) => {
  let { data } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwo } =
    data?.info;
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
