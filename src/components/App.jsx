import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import IdeasPage from "../pages/IdeasPage";
import NotFoundPage from "../pages/NotFoundPage";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/ideas");
  }, []);
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NotFoundPage />} />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
