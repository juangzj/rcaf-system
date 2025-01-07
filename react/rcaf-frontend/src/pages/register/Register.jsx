import 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';

const registerUserUri = 'http://localhost:8080/auth/register';

function Register() {

  // UseNavigate instance
  const navigate = useNavigate();

  //User data to create user
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Method to register a new user
   */
  const handleRegisterUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post(registerUserUri, { name: name, email: email, password: password, user_type: 'registered' })
      navigate('/');
    } catch (error) {
      console.error(error)
      alert('Error, the user could not be created')
    }
  }




  return (
    // Wrapper div to ensure full-height layout and proper alignment
    <div className="register-wrapper d-flex align-items-center justify-content-center">
      <MDBContainer>
        <MDBCard className="register-card">
          <MDBRow className="g-0">

            {/* Left column with a decorative image */}
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img2.webp"
                alt="Registration form"
                className="register-image rounded-start w-100"
              />
            </MDBCol>

            {/* Right column containing the registration form */}
            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">

                {/* Logo and title section */}
                <div className="d-flex flex-row mt-2">
                  <MDBIcon fas icon="users fa-3x me-3" style={{ color: '#4caf50' }} />
                  <span className="register-title h1 fw-bold mb-0">Sign Up</span>
                </div>

                {/* Subtitle for registration */}
                <h5 className="register-subtitle fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                  Create your account
                </h5>

                {/* Input fields for user details */}
                <MDBInput
                  wrapperClass="mb-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Full Name"
                  id="name-input"
                  type="text"
                  size="lg" />
                <MDBInput
                  wrapperClass="mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address"
                  id="email-input"
                  type="email"
                  size="lg" />
                <MDBInput
                  wrapperClass="mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  id="password-input"
                  type="password"
                  size="lg" />

                {/* Registration button */}
                <MDBBtn className="register-button mb-4 px-5" color="success" size="lg" onClick={handleRegisterUser}>Register</MDBBtn>

                {/* Link to redirect to login */}
                <p className="login-redirect-text mb-5 pb-lg-2" style={{ color: '#4caf50' }}>
                  Already have an account? <Link to="/" style={{ color: '#4caf50' }}>Log in here</Link>
                </p>

                {/* Footer links for terms and privacy */}
                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">Terms of use</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>

              </MDBCardBody>
            </MDBCol>

          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Register;
