import "./App.scss";
import Header from "./Components/shared/Header";
import Footer from "./Components/shared/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
