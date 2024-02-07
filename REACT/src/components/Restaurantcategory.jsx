import CategoryItems from "./CategoryItems";
import { useState } from "react";

const RestaurantCategory = (props) => {
  // console.log(showitems);
  const { category, showitems, setshowindex } = props;

  // const [showitems, setshowitems] = useState(true);

  const accordion = () => {
    setshowindex();
  };
  // console.log(showitems);
  return (
    <div
      className="category px-10 w-[76.5dvw] mt-4 p-2 bg-gray-00  rounded-lg shadow-md border-r-0"
      onClick={accordion}>
      <div className="title flex justify-between items-center ">
        <p className="font-extrabold my-2 text-[15px]">
          {category?.card?.card?.title}
          {/* {category.length} */}
        </p>
        <i className="fa-solid fa-angle-down"></i>
      </div>
      {category?.card?.card?.itemCards?.map(
        (items) =>
          showitems && (
            <CategoryItems key={items?.card?.info?.id} items={items} />
          )
      )}
    </div>
  );
};
export default RestaurantCategory;
