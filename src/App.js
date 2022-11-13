import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AgregarVideojuego from './components/AgregarVideojuego'
import EditarVideojuego from './components/EditarVideojuego'
import VerVideojuegos from './components/VerVideojuegos'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route path="videojuegos/agregar" element={<AgregarVideojuego />} />             
              <Route path="videojuegos/editar/:id" element={<EditarVideojuego />} />
              <Route path="videojuegos/ver" element={<VerVideojuegos />} />  
            </Route> 
          </Routes>    
      </Router>
    </div>
  );
}

export default App;
