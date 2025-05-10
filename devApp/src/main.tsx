import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./components/pages/Home";
import { Provider } from "react-redux";
import  store from "./redux/store/index.tsx";
import Login from "./components/pages/Auth/Login.tsx";
import Profile from "./components/pages/Auth/Profile.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
