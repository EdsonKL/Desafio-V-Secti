import { Route, Routes } from "react-router-dom";

import App from "./App";
import Developers from "./Pages/Developers/Developers";


function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/devs" element={<Developers/>}/>
    </Routes>
  )
}

export default MainRoutes
