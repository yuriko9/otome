import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Star from "./pages/Star";
import StarIndex from "./pages/StarIndex";
import Troupe from "./pages/Troupe";
import NoMatch from "./pages/NoMatch";
import SideDrawer from "./components/SideDrawer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <SideDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/star" element={<Star />}>
          <Route index element={<StarIndex />} />
          <Route path=":troupeName" element={<Troupe />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
