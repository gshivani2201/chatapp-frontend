import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";
import miscSlice from "./reducers/misc";
import api from "./reducers/api";
import chatSlice from "./reducers/chat";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [miscSlice.name]: miscSlice.reducer,
    [chatSlice.name]: chatSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (defaultMiddleware) => [...defaultMiddleware(), api.middleware],
});

export default store;
