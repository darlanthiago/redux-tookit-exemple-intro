import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, name: payload };
    },
    logout(state) {
      return { ...state, isLogged: false, name: "" };
    },
  },
});

export const { changeUser, logout } = userSlice.actions;

export default userSlice.reducer;
