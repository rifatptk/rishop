import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import img from "../../../../public/images/rifatptk.png";
/*

Authentication:
 I've made a simple custom authentication system using localStorage.

 Initially I've create a users list and storing it to the localStorage to test the application (An Admin and a normal user).
 However if users list is already exists in localstorage I am skipping this step.

The authentication process is pretty simple here.
- Read users list from localStorage
- Check if user exists or not with given credentials
- Compare user's credentials with given credentials
- If credentials matches let the user log in to the site, else show an exception

The registration process is also very simple
- Read users list from localStorage
- Check if user already exists or not with given credentials
- If user dosen't already exist, create user with given credentials
- Add newly create user to the user's list and resave users list in localStorage
*/

// initial users list
const users = [
  {
    username: "rifatptk",
    phone: "01784254902",
    password: "pass1234",
    avatar: "images/rifatptk.png",
    role: "admin",
  },
  {
    username: "user",
    phone: "01614729335",
    password: "pass1234",
    avatar: "images/user.jpeg",
    role: "user",
  },
];
// checking if users list already exists or not
const existingUsers = localStorage.getItem("users");
if (!existingUsers) localStorage.setItem("users", JSON.stringify(users));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
    role: "admin",
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
      state.role = action.payload.role;
    },
    clearAuth: (state) => {
      state.role = "user";
    },

    register: (state, action) => {
      const { phone, password, username } = action.payload;
      const users = JSON.parse(localStorage.getItem("users"));

      // check if user already exists
      const user = users.find((usr) => usr.phone === phone);

      if (user) {
        toast.error("User with given 'phone' already exists!");
        return;
      }
      // create new user
      const newUser = { phone, password, username, role: "user", avatar: null };
      users.push(newUser);
      localStorage.setItem("auth", JSON.stringify(newUser));
      localStorage.setItem("users", JSON.stringify(users));

      // update auth state
      state.isAuth = true;
      state.role = "user";
      state.user = newUser;
      toast.success("Registration successfull!");
    },

    login: (state, action) => {
      const { phone, password } = action.payload;

      // check user exists or not
      const users = JSON.parse(localStorage.getItem("users"));
      const user = users.find((usr) => usr.phone === phone);

      if (!user) {
        toast.error("User not found!");
        return;
      }

      // compare user credentials
      if (user.password === password) {
        state.isAuth = true;
        state.role = user.role;
        state.user = user;
        localStorage.setItem("auth", JSON.stringify(user));
      } else {
        toast.error("Invalid credentials!");
      }
    },

    logout: (state, action) => {
      localStorage.removeItem("auth");
      state.isAuth = false;
      state.user = null;
      state.role = "user";
    },
  },
});

export const { setAuth, clearAuth, register, login, logout, checkToken } =
  authSlice.actions;

export default authSlice.reducer;
