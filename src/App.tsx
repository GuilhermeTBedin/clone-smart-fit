import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/sections/HeaderSection";
import Footer from "./components/sections/FooterSection";
import Login from "./pages/Login";
import Franqueado from "./pages/Franqueado";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/espaco-do-cliente" element={<Login />} />
        <Route path="/seja-um-franqueado" element={<Franqueado />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
