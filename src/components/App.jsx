import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IdeasPage from "../pages/IdeasPage";
import NotFoundPage from "../pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
