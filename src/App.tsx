import "./App.css";

// 2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

// 4 - navegando entre paginas
// import Navbar from "./components/Navbar";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
