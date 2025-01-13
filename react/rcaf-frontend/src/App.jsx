import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/Register';
import RcafMainPage from './pages/rcafMainPage/RcafMainPage';
import Navbar from './components/navbar/Navbar';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Footer from './components/footer/Footer';



function App() {

  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              <Navbar></Navbar>
              <RcafMainPage></RcafMainPage>
              <Footer></Footer>
            </div>
          } ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path="/dashboard" element={
            <>
              <LeftSidebar></LeftSidebar>

            </>


          }>
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
