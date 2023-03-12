import { Route, Routes } from "react-router-dom";
import { ItemsPages } from "../../utils";
import { ItemsPage, ItemDetailsPage } from "./pages";

export const ItemsRouter = () => {
  return (
    <Routes>
      <Route
        index
        element={<ItemsPage />}
      />
      <Route
        path={ItemsPages.ItemDetails}
        element={<ItemDetailsPage />}
      />
    </Routes>
  );
};
