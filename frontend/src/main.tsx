import { StrictMode, Suspense, lazy } from "react";
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
import Code from "./components/pages/Code/index.tsx";
import DevoteeDetails from "./components/pages/Devotee/DevoteeDetail/index.tsx";
import Develop from "./components/pages/Develop/index.tsx";
import ToDoList from "./components/pages/ToDoList/index.tsx";

// eslint-disable-next-line react-refresh/only-export-components
const Devotee = lazy(() => import('./components/pages/Devotee/index.tsx'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/jyotirlinga" element={<Jyotirling />} />
      <Route path="/devotee" element={<Suspense><Devotee /></Suspense>}/>
      <Route path="/devotee/:id" element={<DevoteeDetails />}/>
      <Route path="/code" element={<Code />} />
      <Route path="/todoList" element={<ToDoList />} />
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
