import React, { useState } from "react";
import Restaraunt from "./Restaraunt";
import Cardsarr from "./Cards";

let Body = () => {
  const [filteredcard, setfilteredcards] = useState(Cardsarr);

  return (
    <>
      <div className="toprated">
        <button
          onClick={() => {
            let filterdata = Cardsarr.filter((data) => data.data.avgRating > 4);
            setfilteredcards(filterdata);
          }}>
          Top Rated
        </button>
      </div>
      <div className="body">
        {filteredcard.map((card) => (
          <Restaraunt key={card.data.id} data={card} />
        ))}
      </div>
    </>
  );
};

export default Body;
