import { createContext, useContext } from "react";

const userContext = createContext({
  username: "aasif",
  id: "12345",
  search: "",
});

export default userContext;
