import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRouter from "./AdminRouter";
import ClientRouter from "./ClientRouter";

function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ClientRouter />} />
          <Route path="/admin" element={<AdminRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
