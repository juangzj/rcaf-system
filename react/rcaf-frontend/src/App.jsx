import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import RcafMainPage from './pages/rcafMainPage/RcafMainPage';
import Navbar from './components/navbar/Navbar';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Footer from './components/footer/Footer';
import Dashboard from './pages/dashboard/Dashboard';
import UsersTableDashboard from './pages/usersTableDashboard/UsersTableDashboard';
import RcarFormPage from './pages/rcafFormPage/RcafFormPage';



function App() {

  return (
    <div>

      <Router>
        <Routes>
          {/**Main Page */}
          <Route path='/' element={
            <div>

              <Navbar></Navbar>
              <RcafMainPage></RcafMainPage>
              <Footer></Footer>

            </div>
          } ></Route>
          {/** Login page */}
          <Route path='/login' element={<Login />} ></Route>
          {/**Register page */}
          <Route path='/register' element={<Register />} ></Route>
          {/**admin dashboard */}
          <Route path="/admin/dashboard" element={
            <>
              <LeftSidebar></LeftSidebar>
              <Dashboard></Dashboard>
            </>
          }>
          </Route>
          {/** User page to handle user (Admin page) */}
          <Route path='/admin/usersDashboard' element={<>
            <LeftSidebar></LeftSidebar>
            <UsersTableDashboard></UsersTableDashboard>

          </>}></Route>
          {/** RCAF form  */}
          <Route path='/user/rcafFomr' element={
            <>
              <Navbar></Navbar>
              <RcarFormPage></RcarFormPage>
            </>
          }></Route>


        </Routes>
      </Router>

    </div>
  )
}

export default App
