import "./App.css";

// 2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

// 4 - navegando entre paginas
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>footer</p>
    </div>
  );
}

export default App;
