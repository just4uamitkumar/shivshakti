import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { Outlet } from "react-router";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
