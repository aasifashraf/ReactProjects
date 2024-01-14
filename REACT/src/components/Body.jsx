import React, { useState } from "react";
import Restaraunt from "./Restaraunt";
import Cardsarr from "./Cards";

let Body = () => {
  const [filteredcard, setfilteredcards] = useState(Cardsarr);

  return (
    <>
      <div className="body">
        <div className="toprated">
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
            Below 200
          </button>
        </div>
        <div className="restaurants">
          {filteredcard.map((card) => (
            <Restaraunt key={card.data.id} data={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
