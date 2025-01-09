import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
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

// API endpoint for user login
const loginUserUri = 'http://localhost:8080/auth/login';

function Login() {
  const navigate = useNavigate(); // Instance for navigation after login
  const [email, setEmail] = useState(''); // State for storing the email input
  const [password, setPassword] = useState(''); // State for storing the password input
  const [errorMessage, setErrorMessage] = useState(''); // State for handling error messages

  /**
   * Function to handle user login
   * Sends the email and password to the backend API and processes the response
   */
  const handleUserLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    //Validate that the fields are not empty
    if (!email || !password) {
      setErrorMessage('Both fields are required');
      return; // stop ejecution if fields are empty
    }


    try {
      // Make a POST request to the login API
      const response = await axios.post(loginUserUri, { email, password });

      // Check if the response contains a valid token
      if (response.data) {
        // Store the token and email in localStorage
        localStorage.setItem('token', response.data);
        localStorage.setItem('email', email);

        // Redirect to the dashboard or main page
        alert('hola')
        navigate('/dashboard');
      } else {
        // Display an error message if the login fails
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please check your connection or try again later.');
    }
  };

  return (
    <div className="main-wrapper d-flex align-items-center justify-content-center">
      <MDBContainer>
        <MDBCard className="form-card">
          <MDBRow className='g-0'>
            {/* Left column with the login image */}
            <MDBCol md='6'>
              <MDBCardImage
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp'
                alt="Login form"
                className='login-image rounded-start w-100'
              />
            </MDBCol>
            {/* Right column with the login form */}
            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>
                {/* Logo and brand name */}
                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                  <span className="logo-title h1 fw-bold mb-0">RCAF</span>
                </div>
                {/* Login form title */}
                <h5 className="login-subtitle fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                  Sign into your account
                </h5>
                {/* Error message display */}
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                {/* Email input field */}
                <MDBInput
                  wrapperClass='mb-4'
                  label='Email address'
                  id='email-input'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                  required
                />
                {/* Password input field */}
                <MDBInput
                  wrapperClass='mb-4'
                  label='Password'
                  id='password-input'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  size="lg"
                  required
                />
                {/* Login button */}
                <MDBBtn className="login-button mb-4 px-5" color='dark' size='lg' onClick={handleUserLogin}>
                  Login
                </MDBBtn>
                {/* Forgot password link */}
                <a className="forgot-password-text small text-muted" href="#!">Forgot password?</a>
                {/* Registration link */}
                <p className="register-text mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                  Do not have an account? <Link to="/register" style={{ color: '#393f81' }}>Register here</Link>
                </p>
                {/* Terms and privacy policy links */}
                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
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

export default Login;
