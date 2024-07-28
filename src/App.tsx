import "./App.css";

// 2 - reaproveitamento de estrutura
import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useFetchProducts } from "./hooks/useFetch";

function App() {
  return (
    <>
      {useFetchProducts()}
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
