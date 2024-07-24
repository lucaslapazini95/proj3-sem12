import "./App.css";

// 2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

// 4 - navegando entre paginas
// import Navbar from "./components/Navbar";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>React Router</h1>
      <Outlet />
      <p>footer</p>
    </div>
  );
}

export default App;
