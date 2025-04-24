import './register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  
  const navigate = useNavigate();
    return (
      <div className="ebay-container">

        <header className="ebay-header">
          <div className="sign-in-container">
            <span className="signin-text">Already have an account?</span>
            <Link to="/Signin" className="sign-in-link">Sign in</Link>          
            </div>
        </header>
  
        
  

          <div className="form-container">

            
  
            <h1 className="form-title">Create an account</h1>
  
            
  

            <form className="signup-form">
              <div className="name-fields">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
              </div>
              
              <div className="form-group password-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input"
                />
                <button
                  type="button"
                  className="password-toggle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
              
              <br />
              <br />
              <br />              
              <button
                type="submit"
                className="submit-btn"
                onClick={() => navigate("/Signin")}
              >
                Create account
              </button>
            </form>
            

            <div className="help-button-container">
              <button className="help-button">?</button>
            </div>
          </div>
        </div>
    );
  }