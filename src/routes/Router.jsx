import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useIsAdmin from "../hooks/useIsAdmin";
import NotFound from "../pages/client/NotFound";
import AdminRouter from "./AdminRouter";
import ClientRouter from "./ClientRouter";

function Router() {
  const isAdmin = useIsAdmin();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ClientRouter />} />
          <Route
            path="/admin/*"
            element={isAdmin ? <AdminRouter /> : <Navigate to="/not-found" />}
          />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
