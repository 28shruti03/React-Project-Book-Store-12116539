import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import video from '../assets/bgvd.mp4';
import logo from '../assets/dark-logo.png';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/home');
    // Perform login logic here
  }

  return (
    <section className="vh-100 d-flex align-items-center justify-content-center position-relative">
      <video 
        className="fullscreen-vd"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={logo} style={{mixBlendMode: 'color-burn', filter: 'contrast(280%)'}} className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-6">Sign-in</p>
              </div>
              <div className="divider d-flex align-items-center my-4"></div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-control form-control-lg" 
                  placeholder="Enter a valid email address" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="form-control form-control-lg passwordt" 
                  placeholder="Enter password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">Remember me</label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <div style={{ visibility: "hidden" }} className="alert alert-danger" role="alert">Invalid credentials</div>
                <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={handleLogin}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Don&apos;t have an account? <Link to="/signup" className="link-danger">Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
