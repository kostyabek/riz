import { Route, Routes } from "react-router-dom";
import { HomePages } from "../../utils";
import { HomePage } from "./pages";

export const HomeRouter = () => {
  return (
    <Routes>
      <Route
        path={HomePages.Home}
        element={<HomePage />}
      />
    </Routes>
  );
};
