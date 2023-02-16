import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AdminRouter from "./AdminRouter";
import ClientRouter from "./ClientRouter";

function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ClientRouter />} />
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
