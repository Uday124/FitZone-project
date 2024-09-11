import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log(JSON.stringify(action.payload))
      state.currentUser = action.payload.user;
      localStorage.setItem("fitzone-app-token", action.payload.token);
      localStorage.setItem("userId", JSON.stringify(action.payload.user._id));
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("fitzone-app-token");
      localStorage.removeItem("userId");
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
