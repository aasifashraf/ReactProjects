import Restaraunt from "./Restaraunt";
import { Cards } from "./Cards";

let Body = () => {
  return (
    <div className="body">
      {Cards.map((card) => (
        <Restaraunt key={card.data.id} data={card} />
      ))}
    </div>
  );
};

export default Body;
