import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Groups } from "../utils";
import { Card } from "./Card";

const HomeGroup = lazy(() => import("../../uiLayer/groups/home/HomeGroup"));
const ItemsGroup = lazy(() => import("../../uiLayer/groups/items/ItemsGroup"));

export const RouterElement = () => {
  return (
    <Suspense fallback={<Card />}>
      <Routes>
        <Route
          path={`${Groups.Home}/*`}
          element={<HomeGroup />}
        />
        <Route
          path={`${Groups.Items}/*`}
          element={<ItemsGroup />}
        />
      </Routes>
    </Suspense>
  );
};
