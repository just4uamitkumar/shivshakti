import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import ToDoList from "./Components/Pages/ToDoList/index.tsx";
import Count from "./Components/Pages/Count/index.tsx";
import Home from "./Components/Pages/Home/index.tsx";
import Products from "./Components/Pages/Products/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />

      <Route path="/ToDoList" element={<ToDoList />} />
      <Route path="/Count" element={<Count />} />
      <Route path="/Products" element={<Products />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
