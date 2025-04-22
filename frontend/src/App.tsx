import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { Outlet } from "react-router";
import { useAppSelector } from "./redux/store";

const App: React.FC = () => {

  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const { data, isAuthenticated } =
      useAppSelector((state) => state.user);

  return (
    <>
      <Header  isAuthenticated={isAuthenticated} user={data?.user}  />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
