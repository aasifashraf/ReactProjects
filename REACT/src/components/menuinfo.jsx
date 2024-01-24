import { useEffect, useState } from "react";
import ShimmerUI from "../constant/shimmerUI";

const InfoMenu = () => {
  const [Apicall, setApicall] = useState(null);
  const [offers, setoffers] = useState(null);

  useEffect(() => {
    infoApi();
  }, []);
  const infoApi = async () => {
    const infofetch = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=235"
    );
    const infoJson = await infofetch.json();
    // console.log(infoJson.data);
    setApicall(infoJson.data);
    setoffers(
      infoJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    console.log(
      infoJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
  };
  if (Apicall == null) return <ShimmerUI />;
  const {
    name,
    cuisines,
    costForTwo,
    areaName,
    avgRating,
    feeDetails,
    sla,
    totalRatingsString,
  } = Apicall?.cards[0]?.card?.card?.info;

  offers.map((offercards) => {
    offercards = { data };
  });
  console.log(data?.info?.header);
  const { header, couponCode, description } = data?.info;

  return (
    <div className="topdiv">
      <div className="all">
        <div className="topsec">
          <div className=" infowrap">
            <div className="heading">
              <h1>{name}</h1>
            </div>
            <div>
              <p>{cuisines.join(", ")}</p>
            </div>
            <div className="addressdistance">
              <p>{areaName}</p>
              <p>{sla.lastMileTravel + " km"}</p>
            </div>
          </div>
          <div className="rating">
            <div className="ratingdiv">
              <i class="fa-solid fa-star"></i>
              <p className="ratingnbr">{avgRating}</p>
            </div>
            <p>{totalRatingsString}</p>
          </div>
        </div>
        <div className="middlesec">
          <p>{feeDetails.message}</p>
        </div>
        <div className="timecost">
          <div className="time">
            <i className="fa-solid fa-clock"></i>
            <p>{sla.deliveryTime}</p>
          </div>
          <div className="cost">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <p>{costForTwo / 100}</p>
          </div>
        </div>
        <div className="offers">
          <div className="offersec">
            <p>{header}</p>
          </div>
          <div className="offersecbtm">
            <p>{couponCode}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMenu;
