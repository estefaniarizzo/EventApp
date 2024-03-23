import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      

        {/* Agrega más rutas aquí si es necesario */}
        {/* Por ejemplo: */}
        {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
