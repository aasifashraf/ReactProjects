import { useDispatch, useSelector } from "react-redux";
import { clearItems, removeItems } from "../Redux/StoreSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.Cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems(cartItems));
  };

  const handleRemoveItem = (cartItems) => {
    dispatch(removeItems(cartItems));
  };

  return cartItems.length === 0 ? (
    <h1 className="flex justify-center items-center h-[100dvh] text-2xl">
      Please add items
    </h1>
  ) : (
    <>
      <div className="flex justify-end items-center w-[80dvw]">
        <button
          onClick={handleClearCart}
          className=" border-2 rounded-md px-4 py-2 ">
          Clear Cart
        </button>
      </div>
      <div className="flex px-10 py-[3rem] justify-between items-center flex-col border-b-2 ">
        {/* Create a list of cart items using map */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="my-4 p-9 w-[45dvw]  flex justify-between items-center  ">
            <div className="w-[30dvw]">
              <p className="font-medium">{item.card.info.name}</p>
              <p className="mb-4 text-sm">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
                {/* Handle missing price gracefully? */}
              </p>
              <p className="font-thin text-sm text-gray-400">
                {item.card.info.description}
              </p>
            </div>
            <div className=" relative ">
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  item.card.info.imageId
                }
                className=" w-[10rem] h-[8rem] "
              />
              <button
                // onClick={handleCartItem} Use onClick={handleCartItem} if the function doesn't need any data.
                // onClick={handleCartItem(items)} Avoid using onClick={handleCartItem(items)} due to potential execution issues.
                onClick={() => handleRemoveItem(cartItems)} //Use onClick={() => handleCartItem(items)} if the function needs the items data.
                className=" border-[1px] px-[3rem] py-2 absolute m-auto bg-white text-red-500 font-black rounded-lg left-4 bottom-[-1.1rem] border-gray-250 shadow-lg shadow-red-200">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
