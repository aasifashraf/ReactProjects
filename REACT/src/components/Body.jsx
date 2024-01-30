import React, { useEffect, useState } from "react";
import Restaraunt from "../constant/Restaraunt";
import ShimmerUI from "../constant/shimmerUI";
import { Link } from "react-router-dom";
import { swiggyURL } from "../constant/URL.JSX";
import useOnlineStatus from "../constant/useOnllineStatus";

let Body = () => {
  const [filteredcard, setfilteredcards] = useState([]);
  const [tempcard, settempcard] = useState([]);

  useEffect(() => {
    fetchapi();
  }, []);

  let fetchapi = async () => {
    try {
      let apilink = await fetch(swiggyURL);
      let jsondata = await apilink.json();
      // console.log(jsondata);
      setfilteredcards(
        jsondata.data.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          jsondata.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
      settempcard(
        jsondata.data.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
          jsondata.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
    } catch (error) {
      console.log("api didnot work", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    console.log(!onlineStatus);
    return (
      <div className="onlinestatus">
        <i className="fa-solid fa-wifi"></i>
        <p>Please check your internet connection</p>
      </div>
    );
  }
  // if (filteredcard.length === 0 || null || undefined) {
  //   return <ShimmerUI />;
  // }

  return filteredcard.length === 0 || null || undefined ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="body">
        <div className="toprated">
          <button
            onClick={() => {
              let filterdata = filteredcard?.filter(
                (data) => data.info.avgRating >= 0
              );
              settempcard((prevFilteredCards) => filterdata || []);
            }}>
            All
          </button>
          <button
            onClick={() => {
              let filterdata = filteredcard?.filter(
                (data) => data.info.avgRating > 4
              );
              settempcard((prevFilteredCards) => filterdata || []);
            }}>
            Top Rated
          </button>
          <button
            onClick={() => {
              let filterdata = filteredcard?.filter((data) =>
                data.info.cuisines.includes("Biryani")
              );
              settempcard((prevFilteredCards) => filterdata || []);
            }}>
            Biryani
          </button>
          <button
            onClick={() => {
              let filterdata = filteredcard?.filter(
                (data) => parseInt(data.info.costForTwo) < 251 * 100
              );
              settempcard((prevFilteredCards) => filterdata || []);
            }}>
            Below 251
          </button>
        </div>
        <div className="restaurants">
          {tempcard?.map((card) => (
            <Link key={card.info.id} to={"/restaurant/" + card.info.id}>
              <Restaraunt data={card} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
