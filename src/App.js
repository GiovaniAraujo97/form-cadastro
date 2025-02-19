import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>
      </Routes>
    </Router>
  );
}

export default App;
