import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

export const brightnessSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { changeTheme } = brightnessSlice.actions;
export default brightnessSlice.reducer;
