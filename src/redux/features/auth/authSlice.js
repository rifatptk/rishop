import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const users = [
  {
    username: "rifatptk",
    phone: "01784254902",
    password: "pass1234",
    avatar: "images/rifatptk.png",
    role: "admin",
  },
];
localStorage.setItem("users", JSON.stringify(users));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
    role: "user",
  },
  reducers: {
    register: (state, action) => {
      const { phone, password, username } = action.payload;
      const users = JSON.parse(localStorage.getItem("users"));

      const user = users.find((usr) => usr.phone === phone);

      if (user) {
        toast.error("User already exists!");
        return;
      }

      users.push({ phone, password, username, role: "user", avatar: null });
      localStorage.setItem("users", JSON.stringify(users));

      state.isAuth = true;
      state.role = "user";
      state.user = { phone, password, username, role: "user", avatar: null };
      toast.success("Registration successfull!");
    },

    login: (state, action) => {
      const { phone, password } = action.payload;
      const users = JSON.parse(localStorage.getItem("users"));

      const user = users.find((usr) => usr.phone === phone);

      if (!user) {
        toast.error("User not found!");
        return;
      }

      if (user.password === password) {
        state.isAuth = true;
        state.role = user.role;
        state.user = user;
      } else {
        toast.error("Invalid credentials!");
      }
    },
    logout: (state, action) => {
      state.isAuth = false;
      state.user = null;
      state.role = "user";
      redirect("/login");
    },
    checkToken: (state) => {},
  },
});

export const { register, login, logout, checkToken } = authSlice.actions;

export default authSlice.reducer;
