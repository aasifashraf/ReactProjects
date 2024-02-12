import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./StoreSlice";

const AppStore = configureStore({
  reducer: {
    Cart: Cartreducer,
  },
});

export default AppStore;
