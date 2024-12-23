import { configureStore } from "@reduxjs/toolkit";

import ThemeChangerReducer from "../features/brightness/brightnessSlice";

const store = configureStore({
  reducer: {
    theme: ThemeChangerReducer,
  },
});

export default store;
