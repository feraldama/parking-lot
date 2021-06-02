import "./App.css";
import Nav from "./componentes/Nav.jsx";
import Catalogo from "./componentes/Catalogo.jsx";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch="onSearch" />} />
      <Route path="/" component={Catalogo} />
    </div>
  );
}

export default App;
