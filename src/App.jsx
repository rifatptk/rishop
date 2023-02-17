import { ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
