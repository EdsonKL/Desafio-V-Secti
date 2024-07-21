import { Route, Routes } from "react-router-dom";

import App from "./App";
import Developers from "./Pages/Developers/Developers";
import Details from "./components/Details/Details";
import NotFound from "./Pages/NotFound/NotFound";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/devs" element={<Developers />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default MainRoutes;
