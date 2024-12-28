import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router";
import Jyotirling from "./components/pages/Jyotirling";
import Code from "./components/pages/Code";
import Devotee from "./components/pages/Devotee";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jyotirlinga" element={<Jyotirling />} />
        <Route path="/devotee" element={<Devotee />} />
        <Route path="/code" element={<Code />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
