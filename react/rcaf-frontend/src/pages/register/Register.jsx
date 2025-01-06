import 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="text-center mb-4">Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
          <p className="text-center mt-3">
            Already have an account?{' '}
            <a href="/" className="text-decoration-none">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
