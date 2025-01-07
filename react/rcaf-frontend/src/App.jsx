import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/Register';



function App() {

  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
