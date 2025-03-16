import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store/index.tsx";

//Pages
import Home from "./components/pages/Home/index.tsx";
import Jyotirling from "./components/pages/Jyotirling/index.tsx";
import Devotee from "./components/pages/Devotee/index.tsx";
import Code from "./components/pages/Code/index.tsx";
import DevoteeDetails from "./components/pages/Devotee/DevoteeDetail/index.tsx";
import Develop from "./components/pages/Develop/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/jyotirlinga" element={<Jyotirling />} />
      <Route path="/devotee" element={<Devotee />}/>
      <Route path="/devotee/:id" element={<DevoteeDetails />}/>
      <Route path="/code" element={<Code />} />
      <Route path="/develop" element={<Develop />} />
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
