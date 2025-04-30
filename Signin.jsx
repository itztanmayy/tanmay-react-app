import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Signin(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [isValidLogin, setIsValidLogin] = useState(false);
    const [messageText, setMessageText] = useState("");
    
    const validCredentials = {
        "s24cseu2098@bennett.edu.in": "abc",
        "s24cseu2097@bennett.edu.in": "project7",
        "s24cseu0524@bennett.edu.in": "test123",
    };
    
    const handleSignIn = (e) => {
        e.preventDefault();
        
        if (validCredentials.hasOwnProperty(email) && validCredentials[email] === password) {
            setIsValidLogin(true);
            setMessageText("Signed in successfully");
            setShowMessage(true);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } else if (validCredentials.hasOwnProperty(email)) {
            setIsValidLogin(false);
            setMessageText("Invalid password");
            setShowMessage(true);
        } else {
            setIsValidLogin(false);
            setMessageText("Invalid email");
            setShowMessage(true);
        }
    };

    return(
        <div className="ebay-container">
            <header className="ebay-header">
                <div className="sign-in-container">
                    <span className="signin-text">New User?</span>
                    <Link to="/Register" className="register-link">Register</Link>
                </div>
            </header>
  
            <div className="form-container">
                <h1 className="form-title">Sign in to your account</h1>
  
                {showMessage && (
                    <div 
                        className={`message-box ${isValidLogin ? "success" : "error"}`}
                        style={{
                            padding: "10px",
                            marginBottom: "15px",
                            backgroundColor: isValidLogin ? "#d4edda" : "#f8d7da",
                            color: isValidLogin ? "#155724" : "#721c24",
                            border: `1px solid ${isValidLogin ? "#c3e6cb" : "#f5c6cb"}`,
                            borderRadius: "4px",
                            textAlign: "center"
                        }}
                    >
                        {messageText}
                    </div>
                )}
  
                <form className="signup-form" onSubmit={handleSignIn}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
              
                    <div className="form-group password-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
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
                    >
                        Sign In 
                    </button>
                </form>
            
                <div className="help-button-container">
                    <button className="help-button">?</button>
                </div>
            </div>
        </div>
    )
}
