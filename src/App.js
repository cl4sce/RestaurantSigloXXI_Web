import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Menu from "./componentes/Menu";
import Pagar from "./componentes/Pagar";
import DetallePedido from "./componentes/DetallePedido";
import { Store } from "./store/Store";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/DetallePedido" element={<DetallePedido />} />
        <Route path="/Pagar" element={<Pagar store={Store} />} />
      </Routes>
    </div>
  );
}

export default App;
