import React, { useEffect, useState } from "react";
import Restaraunt from "./Restaraunt";
import Cardsarr from "./Cards";

let Body = () => {
  const [filteredcard, setfilteredcards] = useState([]);

  useEffect(() => {
    fetchapi();
  }, []);

  let fetchapi = async () => {
    let apilink = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.756728&lng=76.638159&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsondata = await apilink.json();
    console.log(jsondata);
    setfilteredcards(
      jsondata.data.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        jsondata.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };

  return (
    <>
      <div className="body">
        <div className="toprated">
          <button
            onClick={() => {
              let filterdata = filteredcard?.filter(
                (data) => data.info.avgRating >= 0
              );
              setfilteredcards((prevFilteredCards) => filterdata || []);
            }}>
            All
          </button>
          <button
            onClick={() => {
              let filterdata = filteredcard?.filter(
                (data) => data.info.avgRating > 4
              );
              setfilteredcards((prevFilteredCards) => filterdata || []);
            }}>
            Top Rated
          </button>
          <button
            onClick={() => {
              let filterdata = filteredcard?.filter((data) =>
                data.info.cuisines.includes("Biryani")
              );
              setfilteredcards((prevFilteredCards) => filterdata || []);
            }}>
            Biryani
          </button>
          <button
            onClick={() => {
              let filterdata = filteredcard?.filter(
                (data) => parseInt(data.info.costForTwo) < 251 * 100
              );
              setfilteredcards((prevFilteredCards) => filterdata || []);
            }}>
            Below 251
          </button>
        </div>
        <div className="restaurants">
          {filteredcard?.map((card) => (
            <Restaraunt key={card.info.id} data={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
