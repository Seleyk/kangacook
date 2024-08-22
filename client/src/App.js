import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";

const App = () => {
  const location = useLocation();
  const userInfo = true;
  //   useSelector((state) => state.auth);

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={!userInfo ? <Auth /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default App;
