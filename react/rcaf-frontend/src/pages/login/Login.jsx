import 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from 'react-router-dom';
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

function Login() {
  return (
    // Wrapper div to ensure the layout is full height and well-organized
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

                {/* Logo section */}
                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                  <span className="logo-title h1 fw-bold mb-0">Logo</span>
                </div>

                {/* Login title */}
                <h5 className="login-subtitle fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                  Sign into your account
                </h5>

                {/* Email and password input fields */}
                <MDBInput wrapperClass='mb-4' label='Email address' id='email-input' type='email' size="lg" />
                <MDBInput wrapperClass='mb-4' label='Password' id='password-input' type='password' size="lg" />

                {/* Login button */}
                <MDBBtn className="login-button mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                <a className="forgot-password-text small text-muted" href="#!">Forgot password?</a>
                <p className="register-text mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                  Do not have an account? <Link to="/register" style={{ color: '#393f81' }}>Register here</Link>
                </p>

                {/* Terms and privacy links */}
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
