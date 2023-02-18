import { ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearAuth, setAuth } from "./redux/features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  // check if user already logged in or not
  const auth = localStorage.getItem("auth");
  useEffect(() => {
    if (auth) {
      dispatch(setAuth(JSON.parse(auth)));
    } else {
      dispatch(clearAuth());
    }
  }, [auth, dispatch]);

  return (
    <div className="App">
      <Router />

      <ToastContainer
        draggable
        pauseOnHover
        theme="colored"
        position="top-center"
      />
    </div>
  );
}

export default App;
