import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeContext } from "./context/theme";
import About from "./pages/about";
import AddNew from "./pages/addNew";
import Detail from "./pages/detail";
import Explore from "./pages/explore";
import Home from "./pages/home";
import Search from "./pages/search";

function App() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme.theme === "light" ? "bg-[#FFFDF4]" : "bg-[#242933] text-white"
      }
    >
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/frameworks" element={<Explore />} />
        <Route path="/addnewframework" element={<AddNew />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/framework/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

