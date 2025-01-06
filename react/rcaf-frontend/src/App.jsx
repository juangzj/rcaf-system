import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';



function App() {

  return (
    <div className='vh-100'>

      <Router>
        <Routes>

          <Route path='/' element={<Login />} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
