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
    setfilteredcards(jsondata?.data?.cards);
  };

  return (
    <>
      <div className="body">
        <div className="toprated">
          <button
            onClick={() => {
              let filterdata = Cardsarr.filter(
                (data) => data.data.avgRating >= 0
              );
              setfilteredcards((prevFilteredCards) => [...filterdata]);
            }}>
            All
          </button>
          <button
            onClick={() => {
              let filterdata = Cardsarr.filter(
                (data) => data.data.avgRating > 4
              );
              setfilteredcards((prevFilteredCards) => [...filterdata]);
            }}>
            Top Rated
          </button>
          <button
            onClick={() => {
              let filterdata = Cardsarr.filter((data) =>
                data.data.cuisines.includes("Biryani")
              );
              setfilteredcards((prevFilteredCards) => [...filterdata]);
            }}>
            Biryani
          </button>
          <button
            onClick={() => {
              let filterdata = Cardsarr.filter(
                (data) => parseInt(data.data.costForTwo) < 251 * 100
              );
              setfilteredcards((prevFilteredCards) => [...filterdata]);
            }}>
            Below 251
          </button>
        </div>
        <div className="restaurants">
          {filteredcard.map((card) => (
            <Restaraunt /*key={card.data.id}*/ data={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
