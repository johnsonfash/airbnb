import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/page404";
import Dashboard from "./components/dashboard";
import IndexPage from "./pages";

function Router() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<IndexPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default Router;
