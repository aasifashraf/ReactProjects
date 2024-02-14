// import { restaurantImgURL } from "../constant/URL.JSX";

import { useDispatch } from "react-redux";
import { addItems } from "../Redux/StoreSlice";

const CategoryItems = (props) => {
  const { items } = props;
  const { name, price, description, imageId, defaultPrice } = items?.card?.info;
  // onclick dispatch action
  const dispatch = useDispatch();
  const handleCartItem = (items) => {
    dispatch(addItems(items));
  };

  return (
    <div className=" flex border-b-[1px] px-10 py-[3rem] justify-between items-center">
      <div className="my-2 p-2 w-[40dvw] ">
        <p className=" font-medium">{name}</p>
        <p className=" mb-4 text-sm">
          {price ? "₹ " + price / 100 : "₹ " + defaultPrice / 100}
          {/* {console.log(defaultPrice)} */}
        </p>
        <p className=" font-thin text-sm text-gray-400">{description}</p>
      </div>
      <div className=" relative">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            imageId
          }
          className="  w-[10rem] h-[8rem] bg-slate-300 rounded-lg"
        />
        <button
          // onClick={handleCartItem} Use onClick={handleCartItem} if the function doesn't need any data.
          // onClick={handleCartItem(items)} Avoid using onClick={handleCartItem(items)} due to potential execution issues.
          onClick={() => handleCartItem(items)} //Use onClick={() => handleCartItem(items)} if the function needs the items data.
          className=" border-[1px] px-[3rem] py-2 absolute m-auto bg-white text-green-500 font-black rounded-lg left-4 bottom-[-1.1rem] border-gray-250 shadow-lg shadow-green-200">
          Add
        </button>
      </div>
    </div>
  );
};

export default CategoryItems;
