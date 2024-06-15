import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./auth/UserReducer";

// import { userReducer } from "./auth/userReducer";


export default configureStore({
  reducer: {
    user: UserReducer,
  },
});

// HOST
export const server = "https://combative-cod-life-jacket.cyclic.app/api/v1";